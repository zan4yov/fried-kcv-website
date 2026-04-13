import type { IconProps } from './types'

export function IconFolder({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true" className={className}>
      <rect x="2" y="6" width="24" height="18" rx="2" stroke="rgba(185,154,46,0.45)" strokeWidth="1.5" fill="rgba(185,154,46,0.07)"/>
      <path d="M2 11h24" stroke="rgba(185,154,46,0.35)" strokeWidth="1.2"/>
      <rect x="6" y="15" width="5" height="5" rx="1" fill="rgba(185,154,46,0.25)"/>
      <rect x="13" y="15" width="9" height="2" rx="1" fill="rgba(185,154,46,0.2)"/>
      <rect x="13" y="19" width="6" height="1.5" rx="0.75" fill="rgba(185,154,46,0.15)"/>
      <path d="M2 8l3-2h6l2 2" stroke="rgba(185,154,46,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
