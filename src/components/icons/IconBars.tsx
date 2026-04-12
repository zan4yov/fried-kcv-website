import type { IconProps } from './types'

export function IconBars({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <rect x="2" y="13" width="3" height="5" rx="1" fill="rgba(255,255,255,0.55)"/>
      <rect x="7" y="9" width="3" height="9" rx="1" fill="rgba(255,255,255,0.55)"/>
      <rect x="12" y="5" width="3" height="13" rx="1" fill="rgba(255,255,255,0.55)"/>
      <rect x="17" y="2" width="1" height="16" rx="0.5" fill="rgba(255,255,255,0.2)"/>
    </svg>
  )
}
