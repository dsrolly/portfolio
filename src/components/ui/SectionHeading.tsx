import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  id: string
  lead?: string
}

export function SectionHeading({ index, label, title, id, lead }: SectionHeadingProps) {
  return (
    <header className="section-head">
      <Reveal as="p" className="eyebrow">
        <span>{index}</span> {label}
      </Reveal>
      <Reveal as="h2" delay={60} className="section-title">
        <span id={`${id}-title`}>{title}</span>
      </Reveal>
      {lead ? (
        <Reveal as="p" delay={120} className="section-lead">
          {lead}
        </Reveal>
      ) : null}
    </header>
  )
}
