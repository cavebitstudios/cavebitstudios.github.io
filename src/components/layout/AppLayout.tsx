import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
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
  const reduceMotion = useReducedMotion()
  const pageProject = getPageProject(location.pathname)

  return (
    <div
      className={pageProject ? 'app-shell app-shell--project project-theme' : 'app-shell'}
      style={getProjectThemeStyle(pageProject)}
    >
      <AmbientPixels />
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  )
}
