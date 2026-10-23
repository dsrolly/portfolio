import { useState } from 'react'
import type { MouseEvent } from 'react'
import { profile } from '../../data/profile'
import { Icon } from './Icon'

interface CvButtonProps {
  variant?: 'ghost' | 'primary'
  label?: string
}

/**
 * Downloads the CV PDF. Before downloading it checks the file exists, so a missing PDF
 * produces a clear message with an email fallback instead of a dead download.
 */
export function CvButton({ variant = 'ghost', label = 'Download CV' }: CvButtonProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle')

  const onClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setState('loading')
    try {
      const res = await fetch(profile.cv.href, { method: 'HEAD' })
      const type = res.headers.get('content-type') ?? ''
      if (!res.ok || !type.includes('pdf')) throw new Error('CV unavailable')
      const a = document.createElement('a')
      a.href = profile.cv.href
      a.download = profile.cv.fileName
      document.body.appendChild(a)
      a.click()
      a.remove()
      setState('idle')
    } catch {
      setState('error')
    }
  }

  return (
    <span className="cv-wrap">
      <a
        className={`btn btn-${variant}`}
        href={profile.cv.href}
        download={profile.cv.fileName}
        onClick={onClick}
        aria-busy={state === 'loading'}
      >
        <Icon name="download" />
        {state === 'loading' ? 'Preparing…' : label}
      </a>
      {state === 'error' ? (
        <span className="cv-error" role="alert">
          The CV could not be loaded right now. Please{' '}
          <a href={`mailto:${profile.email}?subject=CV%20request`}>email me</a> and I will send it.
        </span>
      ) : null}
    </span>
  )
}
