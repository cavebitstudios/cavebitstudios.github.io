import { JournalCard } from '../components/ui/JournalCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { journalEntries } from '../data/journal'

export function JournalPage() {
  return (
    <ScrollReveal className="page-hero page-hero--with-content section-shell">
      <p className="eyebrow">Studio journal</p>
      <h1>Updates</h1>
      <p>Development notes, project news, and studio announcements.</p>

      <div className="journal-list page-hero__content">
        {journalEntries.map((entry) => (
          <JournalCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </ScrollReveal>
  )
}
