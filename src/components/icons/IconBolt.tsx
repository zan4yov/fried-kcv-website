import type { IconProps } from './types'

export function IconBolt({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <polygon points="11,2 5,10 9,10 7,16 13,8 9,8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(255,255,255,0.1)"/>
    </svg>
  )
}
