import type { IconProps } from './types'

export function IconDna({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path d="M6 2 C6 5 12 5 12 9 C12 13 6 13 6 16"  stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M12 2 C12 5 6 5 6 9 C6 13 12 13 12 16" stroke="rgba(255,255,255,0.3)"  strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="7.5" y1="4.5"  x2="10.5" y2="4.5"  stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="7.5" y1="9"    x2="10.5" y2="9"    stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="7.5" y1="13.5" x2="10.5" y2="13.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}
