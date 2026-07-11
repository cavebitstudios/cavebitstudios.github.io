import { CTAButton } from '../components/ui/CTAButton'

export function NotFoundPage() {
  return (
    <section className="page-hero section-shell">
      <p className="eyebrow">404</p>
      <h1>Nothing here.</h1>
      <p>Back to CaveBit Studios.</p>
      <div className="hero-section__actions">
        <CTAButton to="/">Home</CTAButton>
        <CTAButton to="/games" variant="secondary">Games</CTAButton>
      </div>
    </section>
  )
}
