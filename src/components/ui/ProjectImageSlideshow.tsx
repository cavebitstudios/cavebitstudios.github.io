import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import type { ProjectImage } from '../../data/projectImages'

type ProjectImageSlideshowProps = {
  images: ProjectImage[]
  fallbackItems: string[]
  projectTitle: string
}

const SLIDE_DELAY = 5200

function getInitialReducedMotion() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export function ProjectImageSlideshow({ images, fallbackItems, projectTitle }: ProjectImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(getInitialReducedMotion)
  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1

  const safeActiveIndex = hasImages ? Math.min(activeIndex, images.length - 1) : 0
  const activeImage = images[safeActiveIndex]

  const slideLabel = useMemo(() => {
    if (!activeImage) {
      return ''
    }

    return fallbackItems[safeActiveIndex] ?? activeImage.caption
  }, [activeImage, safeActiveIndex, fallbackItems])

  useEffect(() => {
    if (!hasMultipleImages || isPaused) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, SLIDE_DELAY)

    return () => window.clearInterval(timer)
  }, [hasMultipleImages, images.length, isPaused])

  function showPreviousImage() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length)
  }

  function showNextImage() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
  }

  if (!hasImages) {
    return (
      <div className="gallery-grid">
        {fallbackItems.map((item) => (
          <figure key={item} className="gallery-tile">
            <figcaption>{item}</figcaption>
          </figure>
        ))}
      </div>
    )
  }

  return (
    <div className="project-slideshow">
      <figure className="project-slideshow__stage">
        <img
          key={activeImage.src}
          className="project-slideshow__image"
          src={activeImage.src}
          alt={activeImage.alt}
          decoding="async"
          loading="lazy"
        />

        {hasMultipleImages ? (
          <div className="project-slideshow__toolbar" aria-label={`${projectTitle} slideshow controls`}>
            <button type="button" onClick={showPreviousImage} aria-label="Previous image">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((currentValue) => !currentValue)}
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
              {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            </button>
            <button type="button" onClick={showNextImage} aria-label="Next image">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        ) : null}

        <figcaption className="project-slideshow__caption">
          <span>
            {String(safeActiveIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
          <strong>{slideLabel}</strong>
        </figcaption>
      </figure>

      {hasMultipleImages ? (
        <div className="project-slideshow__thumbs" aria-label={`${projectTitle} images`}>
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={
                index === safeActiveIndex
                  ? 'project-slideshow__thumb project-slideshow__thumb--active'
                  : 'project-slideshow__thumb'
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${fallbackItems[index] ?? image.caption}`}
              aria-pressed={index === safeActiveIndex}
            >
              <img src={image.src} alt="" loading="lazy" decoding="async" />
              <span>{fallbackItems[index] ?? image.caption}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
