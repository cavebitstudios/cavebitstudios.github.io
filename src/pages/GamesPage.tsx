import { PastProjectCard } from '../components/ui/PastProjectCard'
import { ProjectCard } from '../components/ui/ProjectCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { games } from '../data/games'
import { pastProjects } from '../data/pastProjects'

export function GamesPage() {
  return (
    <>
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

      <ScrollReveal className="section-shell past-projects-section">
        <SectionHeader
          eyebrow="Earlier work"
          title="Past projects"
          body="Before CaveBit Studios, I released Minecraft mods under the name kitkait2001. Here are some of those projects."
        />

        <div className="past-project-grid">
          {pastProjects.map((project, index) => (
            <PastProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </ScrollReveal>
    </>
  )
}
