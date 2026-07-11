import type { CSSProperties } from 'react'
import type { GameProject } from '../models/GameProject'

type ProjectThemeProperties = CSSProperties & {
  '--project-accent': string
  '--project-accent-soft': string
  '--project-accent-dark': string
  '--project-panel': string
  '--project-line': string
  '--project-glow': string
}

export function getProjectThemeStyle(game: GameProject): ProjectThemeProperties {
  return {
    '--project-accent': game.theme.accent,
    '--project-accent-soft': game.theme.accentSoft,
    '--project-accent-dark': game.theme.accentDark,
    '--project-panel': game.theme.panel,
    '--project-line': game.theme.line,
    '--project-glow': game.theme.glow,
  }
}
