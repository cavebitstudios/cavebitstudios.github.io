import { GitBranch, Mail, Send } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { siteConfig } from '../data/site'

const contactRoutes = [
  {
    title: 'General',
    body: 'Main email to get in touch for business-related topics.',
    action: siteConfig.generalEmail,
    href: `mailto:${siteConfig.generalEmail}`,
    icon: Mail,
  },
  {
    title: 'Personal',
    body: 'My non-professional personal contact for getting in touch.',
    action: siteConfig.pressEmail,
    href: `mailto:${siteConfig.pressEmail}`,
    icon: Send,
  },
  {
    title: 'GitHub',
    body: 'Public development work and repositories.',
    action: siteConfig.githubLabel,
    href: siteConfig.githubUrl,
    icon: GitBranch,
    external: true,
  },
]

export function ContactPage() {
  return (
    <ScrollReveal className="page-hero page-hero--with-content section-shell contact-page" id="contact">
      <p className="eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p>Email is the best way to reach CaveBit Studios.</p>

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
