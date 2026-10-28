import { useEffect, useRef } from 'react'
import { timeline } from '../../data/journey'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
  const wrap = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  // The orange line "draws" down the page as you read, and each milestone lights up once passed.
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const items = Array.from(el.querySelectorAll<HTMLElement>('.tl-item'))

    if (reduced) {
      items.forEach((it) => it.classList.add('is-reached'))
      el.style.setProperty('--p', '1')
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.62
      items.forEach((it) => it.classList.toggle('is-reached', it.getBoundingClientRect().top < line))
      const box = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (line - box.top) / box.height))
      el.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reduced])

  return (
    <section id="journey" className="section section-alt" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading
          id="journey"
          index="04"
          label="Journey"
          title="From coursework to shipped apps"
          lead="Milestones from my CV, with dates only where I have them."
        />
        <div className="timeline-wrap" ref={wrap}>
          <span className="tl-track" aria-hidden="true">
            <span className="tl-fill" />
          </span>
          <ol className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.title} as="li" delay={i * 50} className="tl-item">
                <p className="tl-when">{t.when}</p>
                <div className="tl-body">
                  <h3>{t.title}</h3>
                  <p>{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
