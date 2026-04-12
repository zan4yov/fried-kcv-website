import type { IconProps } from './types'

export function IconWaveSignal({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M3 17 L6 11 L9 14 L12 7 L15 10 L17 6" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17" cy="5" r="1.5" fill="rgba(255,255,255,0.55)"/>
      <circle cx="3" cy="17" r="1.5" fill="rgba(255,255,255,0.55)"/>
    </svg>
  )
}
