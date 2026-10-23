import { profile } from '../../data/profile'
import { ArchitectureDiagram } from '../animations/ArchitectureDiagram'
import { CvButton } from '../ui/CvButton'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal as="p" className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            Open to software development internships
          </Reveal>
          <Reveal as="h1" delay={60} className="hero-title">
            <span id="hero-title">{profile.name}</span>
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
          <p className="hero-visual-note">How SubGuard, my Android app, fits together</p>
        </Reveal>
      </div>
    </section>
  )
}
