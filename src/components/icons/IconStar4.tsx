import type { IconProps } from './types'

export function IconStar4({ size = 13, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true" className={className} style={style}>
      <path d="M6.5 1L7.5 5.5L12 6.5L7.5 7.5L6.5 12L5.5 7.5L1 6.5L5.5 5.5Z" stroke="rgba(100,210,160,0.7)" strokeWidth="1.1" strokeLinejoin="round" fill="rgba(100,210,160,0.12)"/>
    </svg>
  )
}
