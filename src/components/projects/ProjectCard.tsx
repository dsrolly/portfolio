import { useState } from 'react'
import type { Project } from '../../types'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-details`

  return (
    <Reveal as="article" delay={delay} className="card">
      <p className="card-category">{project.category}</p>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-tagline">{project.tagline}</p>

      <p className="card-status">
        <span className="chip chip-status">{project.status}</span>
        {project.period ? <span className="card-period">{project.period}</span> : null}
      </p>

      <p className="card-overview">{project.overview}</p>

      <button
        type="button"
        className="expand"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Hide details' : 'Show details'}
        <span className={`expand-caret${open ? ' is-open' : ''}`} aria-hidden="true" />
      </button>

      <div id={panelId} className="card-details" hidden={!open}>
        <p className="card-role">{project.role}</p>
        <ul className="bullets">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {project.note ? <p className="card-note">{project.note}</p> : null}
      </div>

      <div className="chips">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      {project.links.length > 0 ? (
        <div className="card-links">
          {project.links.map((l) => (
            <a key={l.href} className="link-inline" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <Icon name="arrow-up-right" size={15} />
            </a>
          ))}
        </div>
      ) : null}
    </Reveal>
  )
}
