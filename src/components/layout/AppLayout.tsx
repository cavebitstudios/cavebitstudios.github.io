import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AmbientPixels } from '../sections/AmbientPixels'
import { findGameBySlug, focusedGame } from '../../data/games'
import { findJournalEntryBySlug } from '../../data/journal'
import { getProjectThemeStyle } from '../../data/projectTheme'
import type { GameProject } from '../../models/GameProject'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

function getPageProject(pathname: string): GameProject | undefined {
  if (pathname === '/' || pathname === '/games' || pathname === '/press') {
    return focusedGame
  }

  const [section, slug, extra] = pathname.split('/').filter(Boolean)

  if (extra) return undefined

  if (section === 'games' && slug) {
    return findGameBySlug(slug)
  }

  if (section === 'updates' && slug) {
    const entry = findJournalEntryBySlug(slug)
    return entry?.focused_project ? findGameBySlug(entry.focused_project) : undefined
  }

  return undefined
}

export function AppLayout() {
  const location = useLocation()
  const pageProject = getPageProject(location.pathname)

  useLayoutEffect(() => {
    const root = document.documentElement
    const themeColor = pageProject?.theme.accentDark ?? '#100925'
    const themeColorMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

    root.style.setProperty('--viewport-bg', themeColor)
    if (themeColorMeta) {
      themeColorMeta.content = themeColor
    }

    return () => {
      root.style.removeProperty('--viewport-bg')
      if (themeColorMeta) {
        themeColorMeta.content = '#100925'
      }
    }
  }, [pageProject])

  return (
    <div
      className={pageProject ? 'app-shell app-shell--project project-theme' : 'app-shell'}
      style={getProjectThemeStyle(pageProject)}
    >
      <AmbientPixels />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
