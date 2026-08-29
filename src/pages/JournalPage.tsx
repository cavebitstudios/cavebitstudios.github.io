import { JournalCard } from '../components/ui/JournalCard'
import { JournalVideoCard } from '../components/ui/JournalVideoCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { journalEntries } from '../data/journal'

export function JournalPage() {
  const videoEntries = journalEntries.filter((entry) => Boolean(entry.youtubeVideoId))
  const standardEntries = journalEntries.filter((entry) => !entry.youtubeVideoId)

  return (
    <ScrollReveal className="page-hero page-hero--with-content section-shell">
      <p className="eyebrow">Studio journal</p>
      <h1>Updates</h1>
      <p>Development notes, project news, and studio announcements.</p>

      <div className="journal-page__content page-hero__content">
        {videoEntries.length > 0 ? (
          <section className="journal-video-section" aria-labelledby="latest-youtube-videos">
            <h2 id="latest-youtube-videos">Latest Videos on YouTube</h2>
            <div className="journal-video-grid">
              {videoEntries.map((entry) => (
                <JournalVideoCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="journal-list">
          {standardEntries.map((entry) => (
            <JournalCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
