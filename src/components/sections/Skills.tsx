import { useState } from 'react'
import { skillGroups } from '../../data/skills'
import type { SkillItem } from '../../types'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

interface Filter {
  id: string
  label: string
  /** Evidence entries that start with this text count as "used in this project". */
  key: string
}

const filters: Filter[] = [
  { id: 'all', label: 'Everything', key: '' },
  { id: 'subguard', label: 'SubGuard', key: 'SubGuard' },
  { id: 'voice2civic', label: 'Voice2Civic', key: 'Voice2Civic' },
  { id: 'hospital', label: 'Hospital system', key: 'Hospital Management System' },
  { id: 'relief', label: 'Disaster relief DB', key: 'Disaster Relief' },
]

const isLit = (item: SkillItem, f: Filter) =>
  f.id === 'all' || item.evidence.some((e) => e.startsWith(f.key))

const total = skillGroups.reduce((n, g) => n + g.items.length, 0)

export function Skills() {
  const [activeId, setActiveId] = useState('all')
  const active = filters.find((f) => f.id === activeId) ?? filters[0]
  const litCount = skillGroups.reduce((n, g) => n + g.items.filter((i) => isLit(i, active)).length, 0)

  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills"
          index="02"
          label="Skills"
          title="Tools I have actually used"
          lead="Pick a project and the tools it needed light up. Levels appear only where my CV states one."
        />

        <Reveal className="filters">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="filter"
              aria-pressed={f.id === activeId}
              onClick={() => setActiveId(f.id)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>
        <p className="skill-count" aria-live="polite">
          {active.id === 'all'
            ? `${total} tools and skills in total`
            : `${litCount} of ${total} used in ${active.label}`}
        </p>

        <div className="skill-cols">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} as="section" delay={gi * 60} className="skill-col">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className={isLit(item, active) ? 'is-lit' : 'is-dim'}>
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
