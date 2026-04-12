import type { IconProps } from './types'

export function IconHistogram({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <rect x="2"  y="11" width="3" height="5" rx="0.8" fill="rgba(255,255,255,0.3)"/>
      <rect x="7"  y="7"  width="3" height="9" rx="0.8" fill="rgba(255,255,255,0.4)"/>
      <rect x="12" y="3"  width="3" height="13" rx="0.8" fill="rgba(255,255,255,0.55)"/>
      <line x1="1" y1="17" x2="17" y2="17" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    </svg>
  )
}
