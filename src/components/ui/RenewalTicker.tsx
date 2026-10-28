import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Sample alerts, the kind SubGuard sends. They are illustrations, not real data.
const alerts = [
  { name: 'Netflix', when: 'renews tomorrow' },
  { name: 'Spotify', when: 'renews in 3 days' },
  { name: 'Google One', when: 'renews today' },
  { name: 'Gym membership', when: 'renews in 7 days' },
]

/** A small Android-style notification that cycles through sample renewal alerts. */
export function RenewalTicker() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setIndex((v) => (v + 1) % alerts.length), 3400)
    return () => window.clearInterval(id)
  }, [reduced])

  const alert = alerts[index]

  return (
    <div className="ticker">
      <p className="sr-only">Sample renewal alert from my SubGuard app.</p>
      <div className="ticker-card" aria-hidden="true">
        <span className="ticker-icon">SG</span>
        <div className="ticker-text">
          <span className="ticker-app">
            SubGuard <i>· now</i>
          </span>
          <span key={index} className="ticker-msg">
            <b>{alert.name}</b> {alert.when}
          </span>
        </div>
      </div>
      <p className="ticker-cap" aria-hidden="true">
        sample alert from my app
      </p>
    </div>
  )
}
