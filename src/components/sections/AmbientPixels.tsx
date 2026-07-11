import type { CSSProperties } from 'react'

const pixelPositions = [
  [8, 12],
  [14, 62],
  [22, 84],
  [31, 28],
  [37, 72],
  [45, 8],
  [51, 48],
  [58, 91],
  [64, 20],
  [69, 68],
  [74, 38],
  [80, 86],
  [86, 14],
  [91, 55],
  [18, 36],
  [42, 58],
  [6, 78],
  [96, 31],
]

export function AmbientPixels() {
  return (
    <div className="ambient-pixels" aria-hidden="true">
      {pixelPositions.map(([top, left], index) => (
        <span
          key={`${top}-${left}`}
          style={{
            '--pixel-top': `${top}%`,
            '--pixel-left': `${left}%`,
            '--pixel-delay': `${index * -0.62}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  )
}
