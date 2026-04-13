import { useEffect, useState } from 'react'

const links = [
  { label: 'Overview', id: 'overview' },
  { label: 'Architecture', id: 'architecture' },
  { label: 'Team', id: 'team' },
  { label: 'Journey', id: 'journey' },
  { label: 'Fun Facts', id: 'facts' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[56px] flex items-center px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.93)] backdrop-blur-[16px] border-b border-bd'
          : ''
      }`}
    >
      <div className="max-w-page w-full mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-[9px] no-underline">
          <img
            src="/favicon.svg"
            alt="Fake67"
            width={28}
            height={28}
            className="w-7 h-7 rounded-md object-contain shrink-0 ring-1 ring-[rgba(185,154,46,0.25)]"
          />
          <span className="text-[13px] font-medium text-white/60">Fake67</span>
        </a>

        <div className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="na font-sans text-[13px] text-mt px-3 py-1.5 rounded-md hover:text-tx hover:bg-white/[0.04] transition-all"
              data-s={l.id}
            >
              {l.label}
            </a>
          ))}
        </div>

        <span className="font-mono-c text-[11px] text-mt2 tracking-wider">
          2026 · Final Project
        </span>
      </div>
    </nav>
  )
}
