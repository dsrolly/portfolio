import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { CaseStudy } from '../projects/CaseStudy'
import { ProjectCard } from '../projects/ProjectCard'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const featured = projects.find((p) => p.story)
  const others = projects.filter((p) => p !== featured)

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects"
          index="03"
          label="Projects"
          title="Work I have built"
          lead="One full case study for SubGuard, then the other projects I have worked on."
        />

        {featured ? <CaseStudy project={featured} /> : null}

        <div className="more-head">
          <Reveal as="h3">More projects</Reveal>
        </div>
        <div className="cards">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>

        <Reveal className="code-block">
          <div>
            <p className="eyebrow">Code &amp; releases</p>
            <h3>See the work on GitHub</h3>
            <p>
              SubGuard’s source repositories are private. The public releases repository hosts the downloadable APK,
              and my profile lists everything I publish.
            </p>
          </div>
          <div className="code-actions">
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> github.com/dsrolly
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/dsrolly/subguard-releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="download" /> subguard-releases
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
