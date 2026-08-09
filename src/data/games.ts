import { GameProject } from '../models/GameProject'
import { siteConfig } from './site'

export const games = [
    new GameProject({
        slug: 'glyphrune',
        title: 'Glyphrune',
        eyebrow: 'Play Now on Steam!',
        status: 'released',
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
        releaseWindow: '8/7/2026',
        platforms: ['PC', 'Console planned', 'Mobile planned', 'Steam'],
        tags: ['Cards', 'RPG', 'Battle', 'Single-player'],
        features: [
          'Fight enemies through a tabletop card system.',
          'Unlock new areas and take on new regions.',
          'Earn cards and shape your deck along the way.',
          'Play each battle at your own pace.',
        ],
        gallery: ['Battle scene'],
        primaryAction: 'Visit on Steam',
        secondaryAction: 'Project updates',
        primaryActionTo: 'https://store.steampowered.com/app/4957150/Glyphrune',
        secondaryActionTo: '/updates',
        featured: true,
      }
    ),
    new GameProject(
        {
          slug: 'astromacy',
          title: 'Astromacy',
          eyebrow: 'In Development',
          status: 'in-development',
          genre: 'Sandbox',
          audience: 'players who love to explore planets, meet aliens, manage colonies, and create their own stories',
          logline: 'The Frontier awaits. What will you create?',
          description:
              'A single-player space exploration game where every decision you make matters. Supports a full modding community, so players can create and share their own universe.',
          coverTone: 'Space Exploration Sandbox',
          theme: {
            name: 'Astromacy',
            accent: '#4256d9',
            accentSoft: '#7aa4f1',
            accentDark: '#1a184a',
            panel: 'rgba(18,24,43,0.82)',
            line: 'rgba(66,91,217,0.34)',
            glow: 'rgba(35,45,151,0.34)',
          },
          assetFolder: 'astromacy',
          titleImage: 'astromacy-icon.png',
          galleryImages: [],
          releaseWindow: 'TBA',
          platforms: ['PC', 'Console', 'Steam'],
          tags: ["Exploration", 'Single-player', 'Sandbox', 'First-person', "Modding"],
          features: [
              "Fly in open space, explore planets, and make contact with alien governments and wildlife.",
              "Every choice you make matters: how you respect or threaten aliens and cultures determines overall relationships.",
              "Select what story you want to play: Supports a list of built-in games, and modded games created by others.",
              "Everything in the game is defined through files: Players can create their own universes and their own stories without needing to touch code!",
          ],
          gallery: [],
          primaryAction: "Learn more",
          secondaryAction: "Project updates",
          primaryActionTo: '/updates/project-astromacy',
          secondaryActionTo: '/updates',
          featured: true
        }
    ),
]

export const findGameBySlug = (slug: string | undefined) => games.find((game) => game.slug === slug)

export const focusedGame =
  findGameBySlug(siteConfig.focusedProjectSlug) ?? games.find((game) => game.featured) ?? games[0]
