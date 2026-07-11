import type { GameProject } from '../models/GameProject'

export type ProjectImage = {
  src: string
  filename: string
  caption: string
  alt: string
}

const projectImageModules = import.meta.glob('../assets/*/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const imageExtensions = ['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif', 'svg']

function imageKey(folder: string, filename: string) {
  return `../assets/${folder}/${filename}`
}

function captionFromFilename(filename: string) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function makeProjectImage(game: GameProject, filename: string, src: string): ProjectImage {
  return {
    src,
    filename,
    caption: captionFromFilename(filename),
    alt: `${game.title} image`,
  }
}

function getExactProjectImage(game: GameProject, filename: string) {
  const src = projectImageModules[imageKey(game.assetFolder, filename)]

  return src ? makeProjectImage(game, filename, src) : undefined
}

function getProjectFolderImages(game: GameProject) {
  const folderPrefix = `../assets/${game.assetFolder}/`

  return Object.entries(projectImageModules)
    .filter(([key]) => key.startsWith(folderPrefix))
    .sort(([first], [second]) => first.localeCompare(second))
    .map(([key, src]) => makeProjectImage(game, key.replace(folderPrefix, ''), src))
}

export function getProjectTitleImage(game: GameProject) {
  const exactImage = getExactProjectImage(game, game.titleImage)

  if (exactImage) {
    return exactImage
  }

  for (const extension of imageExtensions) {
    const image = getExactProjectImage(game, `${game.assetFolder}.${extension}`)

    if (image) {
      return image
    }
  }

  return getProjectFolderImages(game)[0]
}

export function getProjectGalleryImages(game: GameProject) {
  const titleImage = getProjectTitleImage(game)
  const explicitImages = game.galleryImages
    .map((filename) => getExactProjectImage(game, filename))
    .filter((image): image is ProjectImage => Boolean(image))

  if (explicitImages.length > 0) {
    return explicitImages.filter((image) => image.src !== titleImage?.src)
  }

  return getProjectFolderImages(game).filter((image) => image.src !== titleImage?.src)
}
