import { skillGroups } from '../../data/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills"
          index="02"
          label="Skills"
          title="Tools I have actually used"
          lead="Each skill is tied to the project that proves it. Levels appear only where my CV states one."
        />
        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} as="article" delay={gi * 60} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="skill-name">
                      {item.name}
                      {item.level ? <em className="skill-level">{item.level}</em> : null}
                    </span>
                    <span className="skill-evidence">{item.evidence.join(' · ')}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
