import { Link } from 'react-router-dom'
import { focusedGame } from '../../data/games'
import { siteConfig } from '../../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <strong>{siteConfig.studioName}</strong>
          <span>{siteConfig.studioTagline}</span>
        </div>
        <nav aria-label="Footer navigation">
          <Link to={focusedGame.route}>{focusedGame.title}</Link>
          <Link to="/games">Games</Link>
          <Link to="/studio">About</Link>
          <Link to="/updates">Updates</Link>
          <Link to="/press">Press</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <small>© {new Date().getFullYear()} CaveBit Studios.</small>
      </div>
    </footer>
  )
}
