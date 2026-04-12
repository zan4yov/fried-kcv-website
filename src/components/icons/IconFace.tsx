import type { IconProps } from './types'

export function IconFace({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" fill="rgba(255,255,255,0.05)"/>
      <circle cx="6.5"  cy="7.5" r="1" fill="rgba(255,255,255,0.45)"/>
      <circle cx="11.5" cy="7.5" r="1" fill="rgba(255,255,255,0.45)"/>
      <path d="M6.5 12 Q9 10.5 11.5 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M14 4 Q15 2.5 14.5 1.5"  stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}
