export type PastProject = {
  slug: string
  title: string
  platform: string
  authorLabel: string
  description: string
  highlight: string
  highlightLabel: string
  tags: string[]
  href: string
  imageUrl: string
  imageAlt: string
  theme: {
    accent: string
    accentSoft: string
    accentDark: string
  }
}

export const pastProjects: PastProject[] = [
  {
    slug: 'roamers',
    title: 'Roamers',
    platform: 'Minecraft Mod',
    authorLabel: 'Released as kitkait2001',
    description:
      'A character simulation mod built around player-like NPCs that gather resources, build homes, farm, hunt, and interact with the player.',
    highlight: '880K+',
    highlightLabel: 'CurseForge Downloads',
    tags: ['Characters', 'Simulation', 'Building', 'Forge / NeoForge'],
    href: 'https://www.curseforge.com/minecraft/mc-mods/roamers',
    imageUrl: 'https://media.forgecdn.net/avatars/thumbnails/1082/398/256/256/638622718781687616.gif',
    imageAlt: 'Roamers Minecraft mod logo',
    theme: {
      accent: '#8db067',
      accentSoft: '#c5dc96',
      accentDark: '#26351f',
    },
  },
  {
    slug: 'the-otherworld',
    title: 'The Otherworld',
    platform: 'Minecraft Mod',
    authorLabel: 'Released as kitkait2001',
    description:
      'A fantasy RPG dimension project with distinct regions and races, custom settlements, quests, relationships, and exploration.',
    highlight: '5K+',
    highlightLabel: 'Curseforge Downloads',
    tags: ['RPG', 'Dimensions', 'NPCs', 'Quests'],
    href: 'https://www.curseforge.com/minecraft/mc-mods/the-otherworld-mod',
    imageUrl: 'https://media.forgecdn.net/avatars/thumbnails/962/220/256/256/638459025496901005.png',
    imageAlt: 'The Otherworld Minecraft mod logo',
    theme: {
      accent: '#b48ae8',
      accentSoft: '#e0c5ff',
      accentDark: '#322040',
    },
  },
]
