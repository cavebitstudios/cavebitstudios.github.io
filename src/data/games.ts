import { GameProject } from '../models/GameProject'
import { siteConfig } from './site'

export const games = [
  new GameProject({
    slug: 'glyphrune',
    title: 'Glyphrune',
    eyebrow: 'In development',
    status: 'in-development',
    genre: 'Strategy',
    audience: 'players who enjoy light tabletop RPG systems',
    logline: 'Choose the road ahead.',
    description:
      'A solo medieval tabletop battle game about building a deck, facing new regions, and choosing the road ahead.',
    coverTone: 'Medieval tabletop strategy',
    theme: {
      name: 'Glyphrune',
      accent: '#d96f42',
      accentSoft: '#f1b37a',
      accentDark: '#4a2418',
      panel: 'rgba(43, 25, 18, 0.82)',
      line: 'rgba(217, 111, 66, 0.34)',
      glow: 'rgba(151, 70, 35, 0.34)',
    },
    assetFolder: 'glyphrune',
    titleImage: 'glyphrune.png',
    galleryImages: [],
    releaseWindow: 'TBA',
    platforms: ['PC', 'Console planned', 'Mobile planned', 'Steam'],
    tags: ['Cards', 'RPG', 'Battle', 'Single-player'],
    features: [
      'Fight enemies through a tabletop card system.',
      'Unlock new areas and take on new regions.',
      'Earn cards and shape your deck along the way.',
      'Play each battle at your own pace.',
    ],
    gallery: ['Battle scene'],
    primaryAction: 'Project updates',
    secondaryAction: 'Press kit',
    primaryActionTo: '/updates',
    secondaryActionTo: '/press',
    featured: true,
  }),
]

export const findGameBySlug = (slug: string | undefined) => games.find((game) => game.slug === slug)

export const focusedGame =
  findGameBySlug(siteConfig.focusedProjectSlug) ?? games.find((game) => game.featured) ?? games[0]
