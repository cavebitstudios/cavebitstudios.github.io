import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Outlet, useLocation } from 'react-router-dom'
import { AmbientPixels } from '../sections/AmbientPixels'
import { findGameBySlug, focusedGame } from '../../data/games'
import { getProjectThemeStyle } from '../../data/projectTheme'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

function getRouteProjectSlug(pathname: string) {
  const match = pathname.match(/^\/games\/([^/]+)/)

  return match?.[1]
}

export function AppLayout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const routeProject = findGameBySlug(getRouteProjectSlug(location.pathname))
  const activeProject = routeProject ?? focusedGame

  return (
    <div className="app-shell app-shell--project project-theme" style={getProjectThemeStyle(activeProject)}>
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
