import { useState } from 'react'
import type { ProjectImage as ProjectImageType } from '../../types'

interface ProjectImageProps {
  image: ProjectImageType
  eager?: boolean
}

/**
 * Shows a screenshot and falls back to a clearly marked placeholder if it cannot load
 * (offline, blocked, file missing), so the layout never breaks.
 */
export function ProjectImage({ image, eager = false }: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="shot-placeholder" role="img" aria-label={`Screenshot unavailable: ${image.alt}`}>
        <span>Screenshot</span>
        <small>{image.alt}</small>
      </div>
    )
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
