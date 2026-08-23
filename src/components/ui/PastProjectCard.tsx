import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties } from 'react'
import type { PastProject } from '../../data/pastProjects'
import { TagList } from './TagList'

type PastProjectCardProps = {
  project: PastProject
  index?: number
}

export function PastProjectCard({ project, index = 0 }: PastProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const themeStyle = {
    '--past-project-accent': project.theme.accent,
    '--past-project-accent-soft': project.theme.accentSoft,
    '--past-project-accent-dark': project.theme.accentDark,
  } as CSSProperties

  return (
    <motion.article
      className="past-project-card"
      style={themeStyle}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -10% 0px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
    >
      <div className="past-project-card__visual">
        <img
          className="past-project-card__cover"
          src={project.imageUrl}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="past-project-card__body">
        <div className="past-project-card__meta">
          <span>{project.platform}</span>
          <span>{project.authorLabel}</span>
        </div>

        <div className="past-project-card__heading">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="past-project-card__highlight">
            <strong>{project.highlight}</strong>
            <span>{project.highlightLabel}</span>
          </div>
        </div>

        <TagList tags={project.tags} />

        <a className="past-project-card__link" href={project.href} target="_blank" rel="noreferrer">
          View on CurseForge
        </a>
      </div>
    </motion.article>
  )
}
