import type { IconProps } from './types'

export function IconCoffee({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M2 5h8v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="rgba(255,255,255,0.07)"/>
      <path d="M10 6h1a2 2 0 0 1 0 4h-1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4.5 2.5 Q5 1 5.5 2.5"   stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M6.5 2.5 Q7 1 7.5 2.5"   stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}
