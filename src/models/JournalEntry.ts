export type JournalSection = {
  heading?: string
  paragraphs: string[]
  youtubeVideoId?: string
}

export type JournalEntryInput = {
  slug: string
  title: string
  date: string
  category: string
  focused_project: string | undefined
  excerpt: string
  readTime: string
  youtubeVideoId?: string
  sections?: JournalSection[]
}

export class JournalEntry {
  readonly slug: string
  readonly title: string
  readonly date: string
  readonly category: string
  readonly focused_project: string | undefined
  readonly excerpt: string
  readonly readTime: string
  readonly youtubeVideoId: string | undefined
  readonly sections: JournalSection[]

  constructor(input: JournalEntryInput) {
    this.slug = input.slug
    this.title = input.title
    this.date = input.date
    this.category = input.category
    this.focused_project = input.focused_project
    this.excerpt = input.excerpt
    this.readTime = input.readTime
    this.youtubeVideoId = input.youtubeVideoId
    this.sections = input.sections ?? []
  }

  get displayDate() {
    return this.date
  }

  get route() {
    return `/updates/${this.slug}`
  }
}
