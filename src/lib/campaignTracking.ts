type CampaignAttribution = {
  source: string | null
  medium: string | null
  campaign: string | null
  content: string | null
}

type CampaignEvent = 'qr_landing' | 'glyphrune_view' | 'steam_click'

const TRACKER_URL = 'https://cavebit-tracker.cavebitstudios.workers.dev'
const CAMPAIGN_STORAGE_KEY = 'cavebit_campaign'
const SESSION_STORAGE_KEY = 'cavebit_session'
const LANDING_STORAGE_KEY = 'cavebit_qr_landing'

function readCampaignFromUrl(): CampaignAttribution {
  const params = new URLSearchParams(window.location.search)

  return {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
  }
}

function hasAttribution(campaign: CampaignAttribution) {
  return Boolean(campaign.source || campaign.campaign)
}

function readStoredCampaign(): CampaignAttribution | null {
  try {
    const stored = sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)
    if (!stored) return null

    const campaign = JSON.parse(stored) as CampaignAttribution
    return hasAttribution(campaign) ? campaign : null
  } catch {
    return null
  }
}

function getCampaign(): CampaignAttribution | null {
  const fromUrl = readCampaignFromUrl()
  if (hasAttribution(fromUrl)) return fromUrl
  return readStoredCampaign()
}

function getSessionId() {
  const existing = sessionStorage.getItem(SESSION_STORAGE_KEY)
  if (existing) return existing

  const sessionId = crypto.randomUUID()
  sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId)
  return sessionId
}

export function trackCampaignEvent(event: CampaignEvent, campaignOverride?: CampaignAttribution) {
  if (!TRACKER_URL) return

  const campaign = campaignOverride ?? getCampaign()
  if (!campaign || !hasAttribution(campaign)) return

  void fetch(TRACKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event,
      source: campaign.source,
      medium: campaign.medium,
      campaign: campaign.campaign,
      content: campaign.content,
      path: `${window.location.pathname}${window.location.hash}`,
      referrer: document.referrer || null,
      sessionId: getSessionId(),
    }),
    keepalive: true,
  }).catch(() => undefined)
}

export function captureCampaign() {
  const campaign = readCampaignFromUrl()
  if (!hasAttribution(campaign)) return

  sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(campaign))

  const landingSignature = JSON.stringify(campaign)
  if (sessionStorage.getItem(LANDING_STORAGE_KEY) === landingSignature) return

  sessionStorage.setItem(LANDING_STORAGE_KEY, landingSignature)
  trackCampaignEvent('qr_landing', campaign)
}

export function buildCampaignAwareUrl(destination: string) {
  const campaign = getCampaign()
  if (!campaign || !hasAttribution(campaign)) return destination

  try {
    const url = new URL(destination)

    if (campaign.source) url.searchParams.set('utm_source', campaign.source)
    if (campaign.medium) url.searchParams.set('utm_medium', campaign.medium)
    if (campaign.campaign) url.searchParams.set('utm_campaign', campaign.campaign)
    if (campaign.content) url.searchParams.set('utm_content', campaign.content)

    return url.toString()
  } catch {
    return destination
  }
}
