import type { IconProps } from './types'

export function IconCheck({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
      <polyline points="6,10 9,13 14,7" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
