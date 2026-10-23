import { useRef, useState } from 'react'
import { profile } from '../../data/profile'
import { Icon } from './Icon'

/** Copies the email address. Falls back to selecting the text if the clipboard API is blocked. */
export function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const copy = async () => {
    window.clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setFailed(false)
    } catch {
      setFailed(true)
      setCopied(false)
    }
    timer.current = window.setTimeout(() => {
      setCopied(false)
      setFailed(false)
    }, 2400)
  }

  return (
    <button type="button" className="btn btn-ghost" onClick={copy}>
      <Icon name={copied ? 'check' : 'copy'} />
      {copied ? 'Copied' : failed ? 'Copy failed: select it above' : 'Copy email'}
      <span className="sr-only" role="status">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  )
}
