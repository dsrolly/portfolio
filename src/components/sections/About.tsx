import { about, profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about" index="01" label="About" title="Learning by shipping real software" />
        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" delay={i * 80}>
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal as="dl" delay={120} className="facts">
            {about.facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
            <div className="fact">
              <dt>Languages</dt>
              <dd>{profile.languages.join(', ')}</dd>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
