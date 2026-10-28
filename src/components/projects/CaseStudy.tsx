import { useEffect, useRef, useState } from 'react'
import type { Project, StoryStep } from '../../types'
import { ArchitectureDiagram } from '../animations/ArchitectureDiagram'
import { PhoneMock } from '../animations/PhoneMock'
import { Icon } from '../ui/Icon'
import { ProjectImage } from '../ui/ProjectImage'
import { Reveal } from '../ui/Reveal'
import type { IconName } from '../ui/Icon'

const linkIcon: Record<string, IconName> = {
  live: 'globe',
  download: 'download',
  source: 'github',
  repo: 'github',
}

function Visual({ step, eager }: { step: StoryStep; eager?: boolean }) {
  if (step.visual.type === 'architecture') {
    return <ArchitectureDiagram label="Simplified SubGuard architecture diagram" />
  }
  return <ProjectImage image={step.visual.image} eager={eager} />
}

/**
 * Featured case study. On wide screens the visual stays pinned (native CSS sticky,
 * normal scrolling) while the steps scroll past and swap the visual. On small screens
 * every step simply carries its own visual inline.
 */
export function CaseStudy({ project }: { project: Project }) {
  const steps = project.story ?? []
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 },
    )
    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <article className="case" aria-labelledby={`${project.id}-heading`}>
      <div className="case-top">
      <header className="case-head">
        <Reveal as="p" className="case-category">
          {project.category}
        </Reveal>
        <Reveal as="h3" delay={60} className="case-title">
          <span id={`${project.id}-heading`}>{project.title}</span>
          <span className="case-tagline">{project.tagline}</span>
        </Reveal>
        <Reveal as="p" delay={120} className="case-overview">
          {project.overview}
        </Reveal>
        <Reveal delay={160} className="case-meta">
          <span className="chip chip-status">{project.status}</span>
          <span className="case-role">{project.role}</span>
        </Reveal>
        <Reveal delay={200} className="chips">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </Reveal>
        <Reveal delay={240} className="case-links">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={linkIcon[l.kind] ?? 'arrow-up-right'} />
              {l.label}
            </a>
          ))}
        </Reveal>
      </header>
      {project.id === 'subguard' ? (
        <Reveal delay={160} className="case-phone">
          <PhoneMock />
        </Reveal>
      ) : null}
      </div>

      <div className="story">
        <div className="story-sticky" aria-label={`${project.title} visuals`}>
          {steps.map((step, i) => (
            <div key={step.id} className={`story-panel${i === active ? ' is-active' : ''}`} aria-hidden={i !== active}>
              <div className="shot">
                <Visual step={step} eager={i === 0} />
              </div>
            </div>
          ))}
          <p className="story-count" aria-hidden="true">
            {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </p>
        </div>

        <ol className="story-steps">
          {steps.map((step, i) => (
            <li
              key={step.id}
              className={`story-step${i === active ? ' is-active' : ''}`}
              data-index={i}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
            >
              <p className="eyebrow">
                <span>{String(i + 1).padStart(2, '0')}</span> {step.label}
              </p>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
              {step.bullets ? (
                <ul className="bullets">
                  {step.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <div className="story-inline shot">
                <Visual step={step} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </article>
  )
}
