import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  id: string
  lead?: string
}

/** Running head (label, rule, number) above a serif title whose last word is set in italics. */
export function SectionHeading({ index, label, title, id, lead }: SectionHeadingProps) {
  const cut = title.lastIndexOf(' ')
  const head = cut > 0 ? title.slice(0, cut + 1) : ''
  const tail = cut > 0 ? title.slice(cut + 1) : title

  return (
    <header className="section-head">
      <Reveal className="runhead">
        <span>{label}</span>
        <span className="runhead-rule" aria-hidden="true" />
        <span className="runhead-num">{index}</span>
      </Reveal>
      <Reveal as="h2" delay={60} className="section-title">
        <span id={`${id}-title`}>
          {head}
          <em>{tail}</em>
        </span>
      </Reveal>
      {lead ? (
        <Reveal as="p" delay={120} className="section-lead">
          {lead}
        </Reveal>
      ) : null}
    </header>
  )
}
