import { Video, Mail, MailPlus, SpeechIcon, Camera, GitBranch } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { siteConfig } from '../data/site'

const contactRoutes = [
  {
    title: 'Discord',
    body: 'Join CaveBit Studios Discord Server.',
    action: siteConfig.discordLabel,
    href: siteConfig.discordUrl,
    icon: SpeechIcon,
    external: true,
  },
  {
    title: 'Instagram',
    body: 'Follow CaveBit Studios on Instagram.',
    action: "@cavebitstudios on Instagram",
    href: 'https://www.instagram.com/cavebitstudios',
    icon: Camera,
    external: true,
  },
  {
    title: 'YouTube',
    body: 'Visit CaveBit Studios on YouTube.',
    action: '@CaveBitStudiosYT',
    href: 'https://www.youtube.com/@CaveBitStudiosYT',
    icon: Video,
    external: true,
  },
  {
    title: 'GitHub',
    body: 'My GitHub page for public project repositories.',
    action: siteConfig.githubLabel,
    href: siteConfig.githubUrl,
    icon: GitBranch,
    external: true,
  },
  {
    title: 'Email',
    body: 'Main email to get in touch for business-related topics.',
    action: siteConfig.pressEmail,
    href: `mailto:${siteConfig.pressEmail}`,
    icon: Mail,
  },
  {
    title: 'Personal Email',
    body: 'My personal email to get in touch for general topics.',
    action: siteConfig.generalEmail,
    href: `mailto:${siteConfig.generalEmail}`,
    icon: MailPlus,
  },
]

export function ContactPage() {
  return (
    <ScrollReveal className="page-hero page-hero--with-content section-shell contact-page" id="contact">
      <p className="eyebrow">Contact</p>
      <h1>Get in touch</h1>

      <div className="asset-grid contact-grid page-hero__content">
        {contactRoutes.map((route) => {
          const Icon = route.icon

          return (
            <article key={route.title}>
              <div className="panel-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{route.title}</h3>
              <p>{route.body}</p>
              <a
                className="contact-link"
                href={route.href}
                target={route.external ? '_blank' : undefined}
                rel={route.external ? 'noreferrer' : undefined}
              >
                {route.action}
              </a>
            </article>
          )
        })}
      </div>
    </ScrollReveal>
  )
}
