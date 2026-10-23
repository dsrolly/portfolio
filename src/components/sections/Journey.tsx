import { timeline } from '../../data/journey'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
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
    </section>
  )
}
