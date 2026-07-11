import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
  { to: '/studio', label: 'About' },
  { to: '/updates', label: 'Updates' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
        <img src="/cavebit_studios_logo.png" alt="CaveBit Studios logo" />
        <span>
          <strong>CaveBit</strong>
          <small>Studios</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        <span className="sr-only">Toggle navigation</span>
      </button>

      <nav
        id="site-navigation"
        className={isOpen ? 'site-nav site-nav--open' : 'site-nav'}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setIsOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
