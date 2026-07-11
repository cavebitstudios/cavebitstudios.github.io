import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { findJournalEntryBySlug } from '../data/journal'
import { NotFoundPage } from './NotFoundPage'

export function JournalArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = findJournalEntryBySlug(slug)

  if (!entry) {
    return <NotFoundPage />
  }

  return (
    <div className="journal-article-page">
      <header className="journal-article-hero section-shell">
        <Link className="journal-article__back" to="/updates">
          <ArrowLeft aria-hidden="true" size={18} />
          <span>All updates</span>
        </Link>
        <p className="eyebrow">{entry.category}</p>
        <h1>{entry.title}</h1>
        <p className="journal-article__meta">
          {entry.displayDate} · {entry.readTime} read
        </p>
        <p className="journal-article__intro">{entry.excerpt}</p>
      </header>

      {entry.sections.length > 0 ? (
        <article
          aria-label={`${entry.title} article`}
          className="journal-article-content section-shell"
        >
          {entry.sections.map((section, sectionIndex) => (
            <ScrollReveal
              className="journal-article-section"
              delay={Math.min(sectionIndex * 0.04, 0.16)}
              key={`${entry.slug}-section-${sectionIndex}`}
            >
              {section.heading ? <h2>{section.heading}</h2> : null}
              <div className="journal-article-section__copy">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${entry.slug}-paragraph-${sectionIndex}-${paragraphIndex}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </article>
      ) : null}
    </div>
  )
}
