import { ArrowRight, Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { JournalEntry } from '../../models/JournalEntry'

type JournalCardProps = {
  entry: JournalEntry
}

export function JournalCard({ entry }: JournalCardProps) {
  return (
    <Link
      aria-label={`Open ${entry.title}`}
      className="journal-card"
      id={entry.slug}
      to={entry.route}
    >
      <span className="journal-card__icon" aria-hidden="true">
        <Newspaper size={18} />
      </span>
      <span className="journal-card__body">
        <span className="journal-card__meta">
          {entry.category} · {entry.displayDate} · {entry.readTime}
        </span>
        <span className="journal-card__title">{entry.title}</span>
        <span className="journal-card__excerpt">{entry.excerpt}</span>
      </span>
      <ArrowRight className="journal-card__arrow" aria-hidden="true" size={20} />
    </Link>
  )
}
