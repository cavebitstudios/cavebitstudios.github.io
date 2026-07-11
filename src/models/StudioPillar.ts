export type StudioPillarInput = {
  title: string
  description: string
  signal: string
}

export class StudioPillar {
  readonly title: string
  readonly description: string
  readonly signal: string

  constructor(input: StudioPillarInput) {
    this.title = input.title
    this.description = input.description
    this.signal = input.signal
  }
}
