import { motion } from 'motion/react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { studioPillars } from '../data/studio'

export function StudioPage() {
  return (
    <>
      <ScrollReveal className="page-hero page-hero--studio section-shell">
        <div className="studio-hero__content">
          <p className="eyebrow">Independent studio</p>
          <h1 className="sr-only">CaveBit Studios</h1>
          <motion.div
            className="studio-logo-showcase studio-logo-showcase--title"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="studio-logo-showcase__fireglow" />
            <img src="/cavebit_studios_logo_fire.png" alt="" />
          </motion.div>
          <p>Building a collection of memorable games with strong atmospheres.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="section-shell simple-panel studio-intro-panel">
        <p className="eyebrow">The studio</p>
        <h2>Solo developer. Focused projects.</h2>
        <p>Each project is built from the ground up, thoughtfully programmed and designed for hours of fun.</p>
      </ScrollReveal>

      <ScrollReveal className="section-shell studio-values-section">
        <SectionHeader eyebrow="Approach" title="What guides the work" />
        <div className="value-grid">
          {studioPillars.map((pillar) => (
            <article className="value-card" key={pillar.title}>
              <span>{pillar.signal}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </>
  )
}
