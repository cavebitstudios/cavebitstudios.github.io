import { Download, Image, Mail, Newspaper } from 'lucide-react'
import { CTAButton } from '../components/ui/CTAButton'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { focusedGame } from '../data/games'
import { getProjectGalleryImages, getProjectTitleImage } from '../data/projectImages'
import { siteConfig } from '../data/site'

const studioAssets = [
  {
    title: 'Transparent logo',
    body: 'PNG with a transparent background.',
    href: '/cavebit_studios_logo_tsp.png',
    filename: 'cavebit-studios-logo-transparent.png',
    icon: Image,
  },
  {
    title: 'Original logo',
    body: 'Full-color square logo.',
    href: '/cavebit_studios_logo.png',
    filename: 'cavebit-studios-logo.png',
    icon: Image,
  },
  {
    title: 'Dark logo',
    body: 'Dark-background logo variant.',
    href: '/cavebit_studios_logo_dark.png',
    filename: 'cavebit-studios-logo-dark.png',
    icon: Image,
  },
]

export function PressPage() {
  const titleImage = getProjectTitleImage(focusedGame)
  const galleryImage = getProjectGalleryImages(focusedGame)[0]
  const pressFacts = [
    ['Studio', siteConfig.studioName],
    ['Focused project', focusedGame.title],
    ['Status', focusedGame.statusLabel],
    ['Genre', focusedGame.genre],
    ['Release', focusedGame.releaseWindow],
    ['Platforms', focusedGame.platforms.join(', ')],
  ]

  const projectAssets = [
    titleImage
      ? {
          title: `${focusedGame.title} title image`,
          body: 'Primary project image.',
          href: titleImage.src,
          filename: titleImage.filename,
          icon: Image,
        }
      : undefined,
    galleryImage
      ? {
          title: `${focusedGame.title} gallery image`,
          body: 'Current gameplay media.',
          href: galleryImage.src,
          filename: galleryImage.filename,
          icon: Newspaper,
        }
      : undefined,
  ].filter((asset): asset is NonNullable<typeof asset> => Boolean(asset))

  return (
    <>
      <ScrollReveal className="page-hero section-shell press-hero">
        <p className="eyebrow">Press kit</p>
        <h1>CaveBit Studios</h1>
        <p>Studio facts, current project details, downloadable logos, and press contact.</p>
      </ScrollReveal>

      <ScrollReveal className="section-shell split-panel split-panel--reversed press-summary-section">
        <div>
          <SectionHeader eyebrow="Studio description" title="Independent game development" />
          <p className="body-large">
            CaveBit Studios develops focused indie games with clear systems, strong atmosphere, and practical scope.
          </p>
          <div className="split-panel__actions">
            <CTAButton href={`mailto:${siteConfig.pressEmail}`} variant="secondary">
              Press contact
            </CTAButton>
            <CTAButton to={focusedGame.route} variant="ghost">
              View {focusedGame.title}
            </CTAButton>
          </div>
        </div>
        <dl className="press-facts">
          {pressFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>

      <ScrollReveal className="section-shell press-assets-section">
        <SectionHeader eyebrow="Downloads" title="Studio assets" />
        <div className="asset-grid press-asset-grid">
          {studioAssets.map((asset) => {
            const Icon = asset.icon

            return (
              <article key={asset.title}>
                <div className="panel-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{asset.title}</h3>
                <p>{asset.body}</p>
                <a className="press-asset-link" href={asset.href} download={asset.filename}>
                  <Download aria-hidden="true" />
                  Download
                </a>
              </article>
            )
          })}
        </div>
      </ScrollReveal>

      {projectAssets.length > 0 ? (
        <ScrollReveal className="section-shell press-project-assets-section">
          <SectionHeader eyebrow={focusedGame.title} title="Project media" />
          <div className="asset-grid press-asset-grid">
            {projectAssets.map((asset) => {
              const Icon = asset.icon

              return (
                <article key={asset.title}>
                  <div className="panel-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{asset.title}</h3>
                  <p>{asset.body}</p>
                  <a className="press-asset-link" href={asset.href} download={asset.filename}>
                    <Download aria-hidden="true" />
                    Download
                  </a>
                </article>
              )
            })}
            <article>
              <div className="panel-icon" aria-hidden="true">
                <Mail />
              </div>
              <h3>Press contact</h3>
              <p>Questions, coverage, interviews, and additional asset requests.</p>
              <a className="press-asset-link" href={`mailto:${siteConfig.pressEmail}`}>
                <Mail aria-hidden="true" />
                {siteConfig.pressEmail}
              </a>
            </article>
          </div>
        </ScrollReveal>
      ) : null}
    </>
  )
}
