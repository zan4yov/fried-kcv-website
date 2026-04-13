import type { IconProps } from './types'

export function IconLineChart({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true" className={className}>
      <polyline points="3,22 8,15 13,18 18,10 24,6" stroke="rgba(185,154,46,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="3,22 8,19 13,21 18,16 24,13" stroke="rgba(185,154,46,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
      <circle cx="8" cy="15" r="1.8" fill="rgba(185,154,46,0.5)"/>
      <circle cx="18" cy="10" r="1.8" fill="rgba(185,154,46,0.5)"/>
      <line x1="3" y1="24" x2="25" y2="24" stroke="rgba(185,154,46,0.2)" strokeWidth="1"/>
      <line x1="3" y1="6" x2="3" y2="24" stroke="rgba(185,154,46,0.2)" strokeWidth="1"/>
    </svg>
  )
}
