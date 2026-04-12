import type { IconProps } from './types'

export function IconMic({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <rect x="7" y="1" width="6" height="10" rx="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
      <path d="M4 9a6 6 0 0 0 12 0" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="10" y1="15" x2="10" y2="19" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="7" y1="19" x2="13" y2="19" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}
