import type { IconProps } from './types'

export function IconMusicNote({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path d="M7 14V5l8-2v9" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5"  cy="14" r="2" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" fill="rgba(255,255,255,0.07)"/>
      <circle cx="13" cy="12" r="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="rgba(255,255,255,0.05)"/>
    </svg>
  )
}
