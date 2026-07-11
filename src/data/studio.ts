import { StudioPillar } from '../models/StudioPillar'

export const studioPillars = [
  new StudioPillar({
    title: 'Gameplay',
    signal: '01',
    description: 'An idea that will lead to hours of fun gameplay is the core of each game.',
  }),
  new StudioPillar({
    title: 'Atmosphere',
    signal: '02',
    description: 'Art, sound, and thoughtfully crafted environments built around the game itself.',
  }),
  new StudioPillar({
    title: 'Direction',
    signal: '03',
    description: 'Each project will be designed for a different genre, keeping all types of players included.',
  }),
]

export const studioStats = [
  { value: '01', label: 'gameplay' },
  { value: '02', label: 'atmosphere' },
  { value: '03', label: 'direction' },
]
