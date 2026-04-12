import type { IconProps } from './types'

export function IconMoon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M11.5 8.5A5.5 5.5 0 0 1 5 2a5.5 5.5 0 1 0 6.5 6.5Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="rgba(255,255,255,0.07)" strokeLinejoin="round"/>
    </svg>
  )
}
