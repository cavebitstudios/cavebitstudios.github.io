export type JournalSection = {
  heading?: string
  paragraphs: string[]
}

export type JournalEntryInput = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readTime: string
  sections?: JournalSection[]
}

export class JournalEntry {
  readonly slug: string
  readonly title: string
  readonly date: string
  readonly category: string
  readonly excerpt: string
  readonly readTime: string
  readonly sections: JournalSection[]

  constructor(input: JournalEntryInput) {
    this.slug = input.slug
    this.title = input.title
    this.date = input.date
    this.category = input.category
    this.excerpt = input.excerpt
    this.readTime = input.readTime
    this.sections = input.sections ?? []
  }

  get displayDate() {
    return this.date
  }

  get route() {
    return `/updates/${this.slug}`
  }
}
