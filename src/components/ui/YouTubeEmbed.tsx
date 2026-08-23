type YouTubeEmbedProps = {
  videoId: string
  title: string
  className?: string
}

export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=0&playsinline=1&rel=0`
  const classes = ['youtube-embed', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  )
}
