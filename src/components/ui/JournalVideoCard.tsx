import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { JournalEntry } from '../../models/JournalEntry'
import { findGameProject } from '../../data/journal'
import { getProjectThemeStyle } from '../../data/projectTheme'

type JournalVideoCardProps = {
  entry: JournalEntry
}

export function JournalVideoCard({ entry }: JournalVideoCardProps) {
  const focusedProj = findGameProject(entry.focused_project)
  const themeStyle = getProjectThemeStyle(focusedProj)
  const videoId = entry.youtubeVideoId

  if (!videoId) return null

  const thumbnailUrl = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/maxresdefault.jpg`
  const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`

  return (
    <Link
      aria-label={`Open ${entry.title}`}
      className={focusedProj ? 'journal-video-card project-theme' : 'journal-video-card'}
      to={entry.route}
      style={themeStyle}
    >
      <span className="journal-video-card__media">
        <img
          alt={`${entry.title} YouTube thumbnail`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackThumbnailUrl
          }}
          src={thumbnailUrl}
        />
        <span className="journal-video-card__play" aria-hidden="true">
          <Play fill="currentColor" size={20} />
        </span>
      </span>
      <span className="journal-video-card__body">
        <span className="journal-video-card__meta">
          YouTube · {entry.category} · {entry.displayDate}
        </span>
        <span className="journal-video-card__title">{entry.title}</span>
        <span className="journal-video-card__footer">
          Watch update
          <ArrowRight aria-hidden="true" size={18} />
        </span>
      </span>
    </Link>
  )
}
