import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import type { Theme } from '../../hooks/useTheme'
import { Icon } from '../ui/Icon'

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
const ids = navItems.map((n) => n.id)

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header${scrolled || open ? ' is-solid' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`} onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${active === item.id ? ' is-active' : ''}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} aria-label="Mobile" hidden={!open}>
        <ul className="container">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
