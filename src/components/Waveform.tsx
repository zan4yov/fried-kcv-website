import { useEffect, useRef } from 'react'

const heights = [7,14,22,32,44,52,46,34,22,14,9,16,28,42,50,54,44,30,18,10,8,18,32,44,52,54,42,28,16,9,10,22,36,46,52,44,30,18,10,7]
const durations = [0.62, 0.82, 1.02, 1.22, 1.42]

export default function Waveform() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = containerRef.current
    if (!c) return
    heights.forEach((h, i) => {
      const el = document.createElement('div')
      el.className = 'wb'
      el.style.cssText = `--h:${h}px;animation-duration:${durations[i % 5]}s;animation-delay:${(i * 0.042).toFixed(2)}s`
      c.appendChild(el)
    })
    return () => { if (c) c.innerHTML = '' }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 right-8 -translate-y-1/2 flex items-center gap-[3px] opacity-15 pointer-events-none hidden md:flex"
    />
  )
}
