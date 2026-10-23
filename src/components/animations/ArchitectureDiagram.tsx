import { useId, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Node {
  id: string
  label: string
  sub: string
  x: number
  y: number
  w: number
  h: number
  desc: string
}

// Simplified view of SubGuard's structure. Edit text here if the real architecture changes.
const nodes: Node[] = [
  { id: 'ui', label: 'Compose UI', sub: 'Jetpack Compose', x: 180, y: 14, w: 160, h: 54, desc: 'Screens are built with Jetpack Compose and observe state exposed by ViewModels.' },
  { id: 'vm', label: 'ViewModel', sub: 'MVVM', x: 180, y: 108, w: 160, h: 54, desc: 'ViewModels hold UI state and call into the data layer, so screens stay free of data logic.' },
  { id: 'data', label: 'Data layer', sub: 'sources and services', x: 180, y: 202, w: 160, h: 54, desc: 'Brings together the services the app relies on behind one consistent interface for the ViewModels.' },
  { id: 'firebase', label: 'Firebase', sub: 'Auth · Firestore', x: 2, y: 318, w: 118, h: 62, desc: 'Email and Google sign-in with Firebase Authentication, and Cloud Firestore for signed-in users’ data.' },
  { id: 'datastore', label: 'DataStore', sub: 'settings', x: 134, y: 318, w: 118, h: 62, desc: 'Keeps user preferences such as reminder days.' },
  { id: 'retrofit', label: 'Retrofit', sub: 'exchange rates', x: 266, y: 318, w: 118, h: 62, desc: 'Fetches live currency exchange rates for multi-currency tracking.' },
  { id: 'work', label: 'WorkManager', sub: 'reminders', x: 398, y: 318, w: 118, h: 62, desc: 'Runs background work that delivers renewal reminders.' },
]

interface Edge {
  id: string
  from: string
  to: string
  d: string
}

const byId = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, Node>
const cx = (n: Node) => n.x + n.w / 2

const edges: Edge[] = [
  { id: 'e-ui-vm', from: 'ui', to: 'vm', d: `M${cx(byId.ui)} ${byId.ui.y + byId.ui.h} V${byId.vm.y}` },
  { id: 'e-vm-data', from: 'vm', to: 'data', d: `M${cx(byId.vm)} ${byId.vm.y + byId.vm.h} V${byId.data.y}` },
  ...(['firebase', 'datastore', 'retrofit', 'work'] as const).map((leaf) => {
    const sx = cx(byId.data)
    const sy = byId.data.y + byId.data.h
    const tx = cx(byId[leaf])
    const ty = byId[leaf].y
    return { id: `e-data-${leaf}`, from: 'data', to: leaf, d: `M${sx} ${sy} C${sx} ${sy + 34} ${tx} ${ty - 34} ${tx} ${ty}` }
  }),
]

const DEFAULT_CAPTION = 'Hover, tap or focus a block to see what it does.'

export function ArchitectureDiagram({ label }: { label: string }) {
  const uid = useId().replace(/:/g, '')
  const reduced = useReducedMotion()
  const [active, setActive] = useState<string | null>(null)
  const current = active ? byId[active] : null

  return (
    <figure className="arch" aria-label={label}>
      <svg viewBox="0 0 520 396" role="group" aria-label={label} className="arch-svg">
        <g className="arch-edges">
          {edges.map((e) => {
            const on = active !== null && (e.from === active || e.to === active)
            return (
              <path
                key={e.id}
                id={`${uid}-${e.id}`}
                d={e.d}
                className={`arch-edge${on ? ' is-on' : ''}`}
                fill="none"
              />
            )
          })}
        </g>

        {!reduced &&
          edges.map((e, i) => (
            <circle key={`dot-${e.id}`} r="2.6" className="arch-dot">
              <animateMotion dur={`${3 + (i % 3) * 0.6}s`} begin={`${i * 0.45}s`} repeatCount="indefinite">
                <mpath href={`#${uid}-${e.id}`} />
              </animateMotion>
            </circle>
          ))}

        {nodes.map((n) => (
          <g
            key={n.id}
            className={`arch-node${active === n.id ? ' is-active' : ''}`}
            tabIndex={0}
            aria-label={`${n.label} (${n.sub}). ${n.desc}`}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(n.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive((prev) => (prev === n.id ? null : n.id))}
          >
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="12" />
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 - 3} className="arch-label" textAnchor="middle">
              {n.label}
            </text>
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 15} className="arch-sub" textAnchor="middle">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="arch-caption" aria-live="polite">
        {current ? (
          <>
            <strong>{current.label}.</strong> {current.desc}
          </>
        ) : (
          DEFAULT_CAPTION
        )}
      </figcaption>
    </figure>
  )
}
