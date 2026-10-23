import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const ref = useScrollProgress<HTMLDivElement>()
  return (
    <div ref={ref} className="progress" role="presentation" aria-hidden="true">
      <div className="progress-bar" />
    </div>
  )
}
