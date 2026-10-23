export type LinkKind = 'live' | 'download' | 'source' | 'repo'

export interface ProjectLink {
  label: string
  href: string
  kind: LinkKind
}

export interface ProjectImage {
  src: string
  alt: string
}

export type StoryVisual =
  | { type: 'image'; image: ProjectImage }
  | { type: 'architecture' }

export interface StoryStep {
  id: string
  label: string
  title: string
  body: string
  bullets?: string[]
  visual: StoryVisual
}

export interface Project {
  id: string
  title: string
  category: string
  tagline: string
  status: string
  period?: string
  role: string
  overview: string
  highlights: string[]
  stack: string[]
  links: ProjectLink[]
  /** Short honest note shown on the card (e.g. what is still being documented). */
  note?: string
  /** Only set for the featured case study that gets the pinned storytelling layout. */
  story?: StoryStep[]
}

export interface SkillItem {
  name: string
  /** Only use the wording from the CV (e.g. "Intermediate") or leave empty. */
  level?: string
  /** Projects that genuinely use this skill. */
  evidence: string[]
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface TimelineEntry {
  when: string
  title: string
  detail: string
}

export interface EducationEntry {
  level: string
  place: string
  period: string
  score?: string
  note?: string
}
