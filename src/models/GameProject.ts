export type ProjectStatus = 'in-development' | 'concept' | 'released'

export type GameProjectTheme = {
  name: string
  accent: string
  accentSoft: string
  accentDark: string
  panel: string
  line: string
  glow: string
}

export type GameProjectInput = {
  slug: string
  title: string
  eyebrow: string
  status: ProjectStatus
  genre: string
  audience: string
  logline: string
  description: string
  coverTone: string
  releaseWindow: string
  platforms: string[]
  tags: string[]
  features: string[]
  gallery: string[]
  primaryAction: string
  secondaryAction: string
  primaryActionTo?: string
  secondaryActionTo?: string
  featured?: boolean
  theme?: GameProjectTheme
  assetFolder?: string
  titleImage?: string
  galleryImages?: string[]
  youtubeVideoId?: string
}

export class GameProject {
  readonly slug: string
  readonly title: string
  readonly eyebrow: string
  readonly status: ProjectStatus
  readonly genre: string
  readonly audience: string
  readonly logline: string
  readonly description: string
  readonly coverTone: string
  readonly releaseWindow: string
  readonly platforms: string[]
  readonly tags: string[]
  readonly features: string[]
  readonly gallery: string[]
  readonly primaryAction: string
  readonly secondaryAction: string
  readonly primaryActionTo: string
  readonly secondaryActionTo: string
  readonly featured: boolean
  readonly theme: GameProjectTheme
  readonly assetFolder: string
  readonly titleImage: string
  readonly galleryImages: string[]
  readonly youtubeVideoId: string | undefined

  constructor(input: {
    audience: string;
    featured: boolean;
    primaryAction: string;
    eyebrow: string;
    releaseWindow: string;
    primaryActionTo: string;
    description: string;
    coverTone: string;
    title: string;
    secondaryActionTo: string;
    platforms: string[];
    tags: string[];
    assetFolder: string;
    titleImage: string;
    logline: string;
    features: string[];
    genre: string;
    secondaryAction: string;
    theme: {
      line: string;
      accentSoft: string;
      name: string;
      accentDark: string;
      panel: string;
      accent: string;
      glow: string
    };
    slug: string;
    gallery: string[];
    status: ProjectStatus;
    galleryImages: [];
    youtubeVideoId?: string;
  }) {
    this.slug = input.slug
    this.title = input.title
    this.eyebrow = input.eyebrow
    this.status = input.status
    this.genre = input.genre
    this.audience = input.audience
    this.logline = input.logline
    this.description = input.description
    this.coverTone = input.coverTone
    this.releaseWindow = input.releaseWindow
    this.platforms = input.platforms
    this.tags = input.tags
    this.features = input.features
    this.gallery = input.gallery
    this.primaryAction = input.primaryAction
    this.secondaryAction = input.secondaryAction
    this.primaryActionTo = input.primaryActionTo ?? '/updates'
    this.secondaryActionTo = input.secondaryActionTo ?? '/press'
    this.featured = input.featured ?? false
    this.theme = input.theme ?? defaultGameTheme
    this.assetFolder = input.assetFolder ?? this.slug.replace(/^project-/, '')
    this.titleImage = input.titleImage ?? `${this.assetFolder}.png`
    this.galleryImages = input.galleryImages ?? []
    this.youtubeVideoId = input.youtubeVideoId
  }

  get statusLabel() {
    const statusMap: Record<ProjectStatus, string> = {
      'in-development': 'In development',
      concept: 'Concept',
      released: 'Released',
    }

    return statusMap[this.status]
  }

  get metaLine() {
    return `${this.genre} · ${this.releaseWindow}`
  }

  get route() {
    return `/games/${this.slug}`
  }

  get actionLabel() {
    return this.status === 'released' ? 'Play now' : this.primaryAction
  }
}

export const defaultGameTheme: GameProjectTheme = {
  name: 'CaveBit',
  accent: '#7cf7ff',
  accentSoft: '#d5b7ff',
  accentDark: '#1bc3d9',
  panel: 'rgba(18, 12, 38, 0.78)',
  line: 'rgba(210, 186, 255, 0.22)',
  glow: 'rgba(124, 91, 190, 0.28)',
}
