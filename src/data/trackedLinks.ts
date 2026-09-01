export type TrackedLinkDefinition = {
  source: string
  medium: string
  campaign: string
  content: string
  route: string
}

export const trackedLinks = {
  trailer: {
    source: 'youtube',
    medium: 'trailer',
    campaign: 'trailer_v1_2026',
    content: 'glyphrune_trailer',
    route: '/games/glyphrune',
  },
  devlog: {
    source: 'youtube',
    medium: 'devlog_series',
    campaign: 'developer_journey_2026',
    content: 'series',
    route: '/games/glyphrune',
  },
} satisfies Record<string, TrackedLinkDefinition>

export type TrackedLinkSlug = keyof typeof trackedLinks

const SITE_URL = 'https://cavebitstudios.com/'

export function buildTrackedLinkDestination(link: TrackedLinkDefinition) {
  const url = new URL(SITE_URL)
  url.searchParams.set('utm_source', link.source)
  url.searchParams.set('utm_medium', link.medium)
  url.searchParams.set('utm_campaign', link.campaign)
  url.searchParams.set('utm_content', link.content)
  url.hash = link.route

  return url.toString()
}
