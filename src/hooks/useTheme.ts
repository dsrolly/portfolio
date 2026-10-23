import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'
const KEY = 'ds-portfolio-theme'

function readInitial(): Theme {
  try {
    const stored = localStorage.getItem(KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* storage can be blocked; fall back to dark */
  }
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0b0d' : '#f5f6f8')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
