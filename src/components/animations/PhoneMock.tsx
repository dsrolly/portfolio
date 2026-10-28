import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const TARGET = 2077 // matches the figure shown on the SubGuard website
const BARS = [38, 52, 44, 70, 58, 82]
const UPCOMING = [
  { name: 'Google One', when: 'Today', amount: '₹79', hot: true },
  { name: 'Netflix', when: 'Tomorrow', amount: '', hot: false },
  { name: 'Spotify', when: 'In 3 days', amount: '', hot: false },
  { name: 'Gym', when: 'In 7 days', amount: '', hot: false },
]

function useCountUp(target: number, active: boolean, reduced: boolean) {
  const [value, setValue] = useState(reduced ? target : 0)

  useEffect(() => {
    if (reduced) {
      setValue(target)
      return
    }
    if (!active) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, reduced])

  return value
}

/**
 * A recreated SubGuard dashboard on a phone frame. Numbers count up, bars grow and a renewal
 * notification drops in, all once it scrolls into view. Data is sample data, and says so.
 */
export function PhoneMock() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [seen, setSeen] = useState(false)
  const [toast, setToast] = useState(false)
  const amount = useCountUp(TARGET, seen, reduced)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!seen || reduced) return
    let hide = 0
    const show = () => {
      setToast(true)
      hide = window.setTimeout(() => setToast(false), 2600)
    }
    const first = window.setTimeout(show, 1800)
    const loop = window.setInterval(show, 7000)
    return () => {
      window.clearTimeout(first)
      window.clearTimeout(hide)
      window.clearInterval(loop)
    }
  }, [seen, reduced])

  const grown = seen || reduced

  return (
    <figure className="phone-wrap" ref={ref}>
      <div
        className="phone"
        role="img"
        aria-label="Recreated SubGuard dashboard with sample data: monthly spend of 2,077 rupees across 4 plans, and upcoming renewals."
      >
        <span className="phone-notch" aria-hidden="true" />
        <div className="phone-screen" aria-hidden="true">
          <div className="ph-status">
            <span>9:41</span>
            <span>5G ▮▮▮</span>
          </div>

          <div className={`ph-toast${toast ? ' is-on' : ''}`}>
            <span className="ticker-icon">SG</span>
            <span>
              <b>Google One</b> renews today
            </span>
          </div>

          <p className="ph-label">Monthly spend</p>
          <p className="ph-amount">₹{amount.toLocaleString('en-IN')}</p>
          <p className="ph-sub">across 4 plans</p>

          <div className="ph-bars">
            {BARS.map((h, i) => (
              <span
                key={i}
                className={grown ? 'is-grown' : ''}
                style={{ '--h': `${h}%`, '--i': i } as CSSProperties}
              />
            ))}
          </div>

          <p className="ph-label">Upcoming</p>
          <ul className="ph-list">
            {UPCOMING.map((u) => (
              <li key={u.name} className={u.hot ? 'is-hot' : ''}>
                <span>{u.name}</span>
                <span className="ph-when">{u.when}</span>
                {u.amount ? <span className="ph-amt">{u.amount}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="phone-cap">Recreated from the app’s design · sample data</figcaption>
    </figure>
  )
}
