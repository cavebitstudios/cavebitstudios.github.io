import { motion } from 'motion/react'
import { CTAButton } from '../components/ui/CTAButton'
import { JournalCard } from '../components/ui/JournalCard'
import { JournalVideoCard } from '../components/ui/JournalVideoCard'
import { ProjectCard } from '../components/ui/ProjectCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { focusedGame, games } from '../data/games'
import { journalEntries } from '../data/journal'
import { getProjectGalleryImages, getProjectTitleImage } from '../data/projectImages'
import { getProjectThemeStyle } from '../data/projectTheme'
import { siteConfig } from '../data/site'

export function HomePage() {
  const titleImage = getProjectTitleImage(focusedGame)
  const galleryImages = getProjectGalleryImages(focusedGame)
  const featuredImage = titleImage ?? galleryImages[0]
  const otherGames = games.filter((game) => game.slug !== focusedGame.slug)
  const themeStyle = getProjectThemeStyle(focusedGame)
  const videoEntries = journalEntries.filter((entry) => Boolean(entry.youtubeVideoId)).slice(0, 3)
  const standardEntries = journalEntries.filter((entry) => !entry.youtubeVideoId).slice(0, 3)

  return (
    <>
      <section className="hero-section hero-section--focused section-shell project-theme" style={themeStyle}>
        <div className="hero-section__copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {focusedGame.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
          >
            {focusedGame.title}
          </motion.h1>
          <motion.p
            className="hero-section__lead"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
          >
            {focusedGame.description}
          </motion.p>
          <motion.dl
            className="hero-project-facts"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <dt>Genre</dt>
              <dd>{focusedGame.genre}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{focusedGame.statusLabel}</dd>
            </div>
            <div>
              <dt>Release</dt>
              <dd>{focusedGame.releaseWindow}</dd>
            </div>
          </motion.dl>
          <motion.div
            className="hero-section__actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
          >
            <CTAButton to={focusedGame.route}>{siteConfig.primaryGameAction}</CTAButton>
            <CTAButton to="/games" variant="secondary">
              {siteConfig.secondaryGameAction}
            </CTAButton>
          </motion.div>
        </div>

        <motion.div
          className="hero-project"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.65 }}
        >
          <div className="hero-project__halo" />
          <figure className="hero-project__media">
            {featuredImage ? (
              <img src={featuredImage.src} alt={`${focusedGame.title} featured image`} loading="eager" decoding="async" />
            ) : (
              <div className="hero-project__fallback">{focusedGame.coverTone}</div>
            )}
          </figure>
          <div className="hero-project__panel">
            <span>Focused project</span>
            <strong>{focusedGame.title}</strong>
            <small>{focusedGame.logline}</small>
          </div>
        </motion.div>
      </section>

      {otherGames.length > 0 ? (
        <ScrollReveal className="section-shell section-shell--proof">
          <SectionHeader eyebrow="In development" title="More games" />
          <div className="project-grid">
            {otherGames.map((game, index) => (
              <ProjectCard key={game.slug} game={game} index={index} />
            ))}
          </div>
        </ScrollReveal>
      ) : null}

      <ScrollReveal className="section-shell simple-panel simple-panel--studio-proof home-studio-panel">
        <p className="eyebrow">CaveBit Studios</p>
        <h2>{siteConfig.studioTagline}</h2>
        <p>Independent game development with a focus on clear systems, strong atmosphere, and practical scope.</p>
        <div className="split-panel__actions">
          <CTAButton to="/studio" variant="secondary">
            About the studio
          </CTAButton>
          <CTAButton to="/contact" variant="ghost">
            Contact
          </CTAButton>
        </div>
      </ScrollReveal>

      <ScrollReveal className="section-shell home-updates-section">
        {videoEntries.length > 0 ? (
          <div className="home-video-updates">
            <SectionHeader eyebrow="Devlogs" title="Latest Videos on YouTube" />
            <div className="journal-video-grid">
              {videoEntries.map((entry) => (
                <JournalVideoCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="section-heading-row">
          <SectionHeader eyebrow="From the studio" title="Latest updates" />
          <CTAButton to="/updates" variant="ghost">
            All updates
          </CTAButton>
        </div>
        <div className="journal-grid">
          {standardEntries.map((entry) => (
            <JournalCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </ScrollReveal>
    </>
  )
}
