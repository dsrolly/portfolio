import { profile } from '../../data/profile'
import { CopyEmail } from '../ui/CopyEmail'
import { CvButton } from '../ui/CvButton'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  const subject = encodeURIComponent('Hello Davinder, I found your portfolio')
  return (
    <section id="contact" className="section section-alt contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <span>06</span> Contact
        </Reveal>
        <Reveal as="h2" delay={60} className="contact-title">
          <span id="contact-title">Hiring for an internship, or building something? Let’s talk.</span>
        </Reveal>
        <Reveal as="p" delay={120} className="section-lead">
          I am looking for a software development internship where I can contribute to real projects. Email is the
          fastest way to reach me.
        </Reveal>

        <Reveal delay={180}>
          <a className="contact-email" href={`mailto:${profile.email}?subject=${subject}`}>
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={240} className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}?subject=${subject}`}>
            <Icon name="mail" /> Email me
          </a>
          <CopyEmail />
          <CvButton variant="ghost" label="Download CV" />
        </Reveal>

        <Reveal delay={300} className="hero-links contact-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-inline">
            <Icon name="linkedin" /> linkedin.com/in/dsrolly
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-inline">
            <Icon name="github" /> github.com/dsrolly
          </a>
        </Reveal>
      </div>
    </section>
  )
}
