import type { IconProps } from './types'

export function IconRobot({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="6" width="12" height="9" rx="2" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" fill="rgba(255,255,255,0.05)"/>
      <rect x="6" y="9" width="2" height="2" rx="0.5" fill="rgba(255,255,255,0.45)"/>
      <rect x="10" y="9" width="2" height="2" rx="0.5" fill="rgba(255,255,255,0.45)"/>
      <path d="M7 13h4" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="9" y1="6" x2="9" y2="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="9" cy="2.5" r="1" fill="rgba(255,255,255,0.4)"/>
      <line x1="3" y1="9.5" x2="1" y2="9.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="15" y1="9.5" x2="17" y2="9.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}
