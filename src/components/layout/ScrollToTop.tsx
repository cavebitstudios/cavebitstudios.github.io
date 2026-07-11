import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function shouldReduceMotion() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion() ? 'auto' : 'smooth' })
  }, [pathname])

  return null
}
