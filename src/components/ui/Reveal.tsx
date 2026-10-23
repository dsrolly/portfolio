import type { CSSProperties, ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  /** Delay in milliseconds, used to stagger siblings. */
  delay?: number
  className?: string
}

/** Marks content to fade and rise into view. Behaviour lives in useReveal + CSS. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: RevealProps) {
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties
  return (
    <Tag className={`reveal ${className}`.trim()} data-reveal style={style}>
      {children}
    </Tag>
  )
}
