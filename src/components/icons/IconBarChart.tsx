import type { IconProps } from './types'

export function IconBarChart({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true" className={className}>
      <rect x="3"  y="17" width="4" height="7" rx="1" fill="rgba(240,224,64,0.35)"/>
      <rect x="9"  y="12" width="4" height="12" rx="1" fill="rgba(240,224,64,0.45)"/>
      <rect x="15" y="7"  width="4" height="17" rx="1" fill="rgba(240,224,64,0.55)"/>
      <rect x="21" y="3"  width="4" height="21" rx="1" fill="rgba(240,224,64,0.65)"/>
      <line x1="2" y1="25" x2="26" y2="25" stroke="rgba(240,224,64,0.25)" strokeWidth="1"/>
    </svg>
  )
}
