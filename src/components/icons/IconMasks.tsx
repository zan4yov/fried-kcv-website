import type { IconProps } from './types'

export function IconMasks({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <circle cx="5" cy="7" r="3.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="rgba(255,255,255,0.07)"/>
      <circle cx="9" cy="7" r="3.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)"/>
      <path d="M3.5 8.5 Q5 10 6.5 8.5"  stroke="rgba(255,255,255,0.4)"  strokeWidth="1" strokeLinecap="round"/>
      <path d="M7.5 8.5 Q9 10 10.5 8.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}
