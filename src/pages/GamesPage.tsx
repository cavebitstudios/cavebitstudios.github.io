import { ProjectCard } from '../components/ui/ProjectCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { games } from '../data/games'

export function GamesPage() {
  return (
    <ScrollReveal className="page-hero page-hero--with-content section-shell">
      <p className="eyebrow">Project catalog</p>
      <h1>Games</h1>
      <p>Current projects and future releases from CaveBit Studios.</p>

      <div className="project-grid project-grid--wide page-hero__content">
        {games.map((game, index) => (
          <ProjectCard key={game.slug} game={game} index={index} />
        ))}
      </div>
    </ScrollReveal>
  )
}
