import type { IconProps } from './types'

export function IconWarning({ size = 13, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true" className={className} style={style}>
      <path d="M6.5 1L12 11.5H1L6.5 1Z" stroke="rgba(240,224,64,0.7)" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(240,224,64,0.1)"/>
      <line x1="6.5" y1="5" x2="6.5" y2="8" stroke="rgba(240,224,64,0.8)" strokeWidth="1.1" strokeLinecap="round"/>
      <circle cx="6.5" cy="9.5" r="0.6" fill="rgba(240,224,64,0.8)"/>
    </svg>
  )
}
