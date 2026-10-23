import { useEffect, useState } from 'react'

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
    // ids is a constant list defined at module level in the caller
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}
