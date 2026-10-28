import type { PointerEvent } from 'react'
import { profile } from '../../data/profile'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ArchitectureDiagram } from '../animations/ArchitectureDiagram'
import { CvButton } from '../ui/CvButton'
import { Icon } from '../ui/Icon'
import { RenewalTicker } from '../ui/RenewalTicker'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  const reduced = useReducedMotion()

  // A soft light follows the pointer across the hero. Skipped for reduced motion and touch screens.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== 'mouse') return
    const box = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - box.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - box.top}px`)
  }

  const [first, ...rest] = profile.name.split(' ')

  return (
    <section id="top" className="hero" aria-labelledby="hero-title" onPointerMove={onMove}>
      <div className="hero-spot" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <RenewalTicker />
          </Reveal>
          <Reveal as="h1" delay={60} className="hero-title">
            <span id="hero-title">
              <span className="ht-a">{first}</span> <em>{rest.join(' ')}</em>
            </span>
          </Reveal>
          <Reveal as="p" delay={120} className="hero-role">
            {profile.role}
          </Reveal>
          <Reveal as="p" delay={180} className="hero-headline">
            {profile.headline}
          </Reveal>
          <Reveal as="p" delay={240} className="hero-intro">
            {profile.intro}
          </Reveal>
          <Reveal as="p" delay={280} className="hero-interests">
            {profile.interests}
          </Reveal>

          <Reveal delay={340} className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              Explore My Projects <Icon name="arrow-right" />
            </a>
            <CvButton variant="ghost" />
          </Reveal>

          <Reveal delay={400} className="hero-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-inline">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-inline">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="link-inline">
              <Icon name="mail" /> Email me
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual">
          <ArchitectureDiagram label="Simplified architecture of SubGuard: Compose UI, ViewModel, data layer, and the services behind it" />
          <p className="hero-visual-note">SubGuard under the hood</p>
        </Reveal>
      </div>
    </section>
  )
}
