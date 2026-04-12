import type { IconProps } from './types'

export function IconRefresh({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M2 7a5 5 0 0 1 9-3"  stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M12 7a5 5 0 0 1-9 3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
      <polyline points="9,2 11,4 9,6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="5,8 3,10 5,12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
