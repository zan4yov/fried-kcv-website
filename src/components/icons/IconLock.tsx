import type { IconProps } from './types'

export function IconLock({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <rect x="4" y="9" width="12" height="9" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
      <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="10" cy="13.5" r="1.5" fill="rgba(255,255,255,0.55)"/>
    </svg>
  )
}
