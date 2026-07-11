import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Gamepad2 } from 'lucide-react'
import { getProjectTitleImage } from '../../data/projectImages'
import { getProjectThemeStyle } from '../../data/projectTheme'
import type { GameProject } from '../../models/GameProject'
import { TagList } from './TagList'

type ProjectCardProps = {
  game: GameProject
  index?: number
}

export function ProjectCard({ game, index = 0 }: ProjectCardProps) {
  const titleImage = getProjectTitleImage(game)
  const themeStyle = getProjectThemeStyle(game)
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="project-card project-theme"
      style={themeStyle}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -10% 0px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
    >
      <Link
        to={game.route}
        className={`project-card__media${titleImage ? ' project-card__media--image' : ''}`}
        aria-label={`Open ${game.title}`}
      >
        {titleImage ? (
          <img className="project-card__image" src={titleImage.src} alt={titleImage.alt} loading="lazy" decoding="async" />
        ) : (
          <div className="project-card__portal">
            <Gamepad2 aria-hidden="true" />
            <span>{game.coverTone}</span>
          </div>
        )}
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{game.eyebrow}</span>
          <span>{game.statusLabel}</span>
        </div>
        <h3>
          <Link to={game.route}>{game.title}</Link>
        </h3>
        <p>{game.logline}</p>
        <TagList tags={game.tags.slice(0, 4)} />
      </div>
    </motion.article>
  )
}
