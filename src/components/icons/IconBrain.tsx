import type { IconProps } from './types'

export function IconBrain({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="7" r="4" stroke="rgba(240,224,64,0.8)" strokeWidth="1.4"/>
      <path d="M4 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="rgba(240,224,64,0.8)" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="10" cy="7" r="1.5" fill="rgba(240,224,64,0.8)"/>
      <path d="M14 4l1.5-1.5M6 4L4.5 2.5M10 3V1" stroke="rgba(240,224,64,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}
