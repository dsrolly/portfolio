import { education } from '../../data/journey'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education" index="05" label="Education" title="Academic background" />
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.level} as="article" delay={i * 60} className="edu-card">
              <p className="edu-period">{e.period}</p>
              <h3>{e.level}</h3>
              <p className="edu-place">{e.place}</p>
              {e.score ? <p className="edu-score">{e.score}</p> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
