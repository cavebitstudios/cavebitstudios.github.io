import { useEffect } from 'react'
import { CheckCircle2, Monitor, Sparkle } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { CTAButton } from '../components/ui/CTAButton'
import { ProjectImageSlideshow } from '../components/ui/ProjectImageSlideshow'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TagList } from '../components/ui/TagList'
import { YouTubeEmbed } from '../components/ui/YouTubeEmbed'
import { findGameBySlug } from '../data/games'
import { getProjectGalleryImages, getProjectTitleImage } from '../data/projectImages'
import { getProjectThemeStyle } from '../data/projectTheme'
import { buildCampaignAwareUrl, trackCampaignEvent } from '../lib/campaignTracking'

export function GameDetailPage() {
  const { slug } = useParams()
  const game = findGameBySlug(slug)

  useEffect(() => {
    if (game?.slug === 'glyphrune') {
      trackCampaignEvent('glyphrune_view')
    }
  }, [game?.slug])

  if (!game) {
    return <Navigate to="/games" replace />
  }

  const titleImage = getProjectTitleImage(game)
  const galleryImages = getProjectGalleryImages(game)
  const themeStyle = getProjectThemeStyle(game)
  const isGlyphruneSteamAction = game.slug === 'glyphrune' && game.primaryActionTo.startsWith('https://store.steampowered.com/')
  const primaryActionHref = isGlyphruneSteamAction ? buildCampaignAwareUrl(game.primaryActionTo) : undefined
  const primaryActionTo = isGlyphruneSteamAction ? undefined : game.primaryActionTo

  return (
    <div className="game-detail-page project-theme" style={themeStyle}>
      <ScrollReveal className="game-title-section section-shell">
        <div className="game-title-card">
          <div className="game-title-card__visual">
            <div className={`game-title-card__screen${titleImage ? ' game-title-card__screen--image' : ''}`}>
              {titleImage ? (
                <img
                  className="game-title-card__image"
                  src={titleImage.src}
                  alt={`${game.title} title image`}
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <>
                  <Sparkle aria-hidden="true" />
                  <span>{game.coverTone}</span>
                </>
              )}
            </div>
          </div>

          <div className="game-title-card__copy">
            <p className="eyebrow">{game.eyebrow}</p>
            <h1>{game.title}</h1>
            <p className="game-title-card__logline">{game.logline}</p>
            <p>{game.description}</p>
            <TagList tags={game.tags} />

            <dl className="game-title-card__facts">
              <div>
                <dt>Status</dt>
                <dd>{game.statusLabel}</dd>
              </div>
              <div>
                <dt>Genre</dt>
                <dd>{game.genre}</dd>
              </div>
              <div>
                <dt>Release</dt>
                <dd>{game.releaseWindow}</dd>
              </div>
            </dl>

            <div className="game-hero__actions">
              <CTAButton
                to={primaryActionTo}
                href={primaryActionHref}
                onClick={isGlyphruneSteamAction ? () => trackCampaignEvent('steam_click') : undefined}
              >
                {game.actionLabel}
              </CTAButton>
              <CTAButton to={game.secondaryActionTo} variant="secondary">
                {game.secondaryAction}
              </CTAButton>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {game.youtubeVideoId ? (
        <ScrollReveal className="section-shell project-video-section">
          <div className="project-gallery-heading">
            <p className="eyebrow">Trailer</p>
            <h2>{game.title} in Action</h2>
          </div>
          <YouTubeEmbed videoId={game.youtubeVideoId} title={`${game.title} trailer`} />
        </ScrollReveal>
      ) : null}

      <ScrollReveal className="section-shell project-gallery-section">
        <div className="project-gallery-heading">
          <p className="eyebrow">Gallery</p>
          <h2>{galleryImages.length > 0 ? `${game.title} Image Gallery` : 'Images coming soon'}</h2>
        </div>
        <ProjectImageSlideshow images={galleryImages} fallbackItems={game.gallery} projectTitle={game.title} />
      </ScrollReveal>

      <ScrollReveal className="section-shell split-panel split-panel--reversed game-overview-section">
        <div>
          <SectionHeader eyebrow="Overview" title="Who is it for?" />
          <p className="body-large">Designed for {game.audience}.</p>
        </div>
        <div className="info-card">
          <div className="panel-icon" aria-hidden="true">
            <Monitor />
          </div>
          <h3>Platforms</h3>
          <ul>
            {game.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal className="section-shell game-features-section">
        <SectionHeader eyebrow="Gameplay" title="What to expect" />
        <div className="feature-grid">
          {game.features.map((feature) => (
            <article className="feature-card" key={feature}>
              <div className="panel-icon" aria-hidden="true">
                <CheckCircle2 />
              </div>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
