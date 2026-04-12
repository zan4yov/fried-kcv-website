const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Team', href: '#team' },
  { label: 'Journey', href: '#journey' },
  { label: 'Fun Facts', href: '#facts' },
]

export default function Footer() {
  return (
    <footer className="max-w-page mx-auto px-8 py-12 border-t border-bd flex justify-between items-start flex-wrap gap-4">
      <div>
        <div className="flex items-center gap-[9px] mb-[7px]">
          <div className="w-7 h-7 bg-y rounded-md flex items-center justify-center font-mono-c text-[11px] font-medium text-black">
            DS
          </div>
          <span className="text-[13px] font-medium text-white/45">DeepSpeech Auth</span>
        </div>
        <div className="text-xs text-mt2">© 2026 Ferel · Safa · Razan — Final Year Project</div>
      </div>

      <div className="flex gap-[5px] flex-wrap">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[13px] text-mt no-underline px-2.5 py-1 rounded-[5px] transition-all duration-200 hover:text-y hover:bg-[rgba(240,224,64,0.07)]"
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://medium.com/@ferelibrahim01/04a015c8f885"
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-y no-underline px-2.5 py-1 rounded-[5px] transition-all duration-200 hover:bg-[rgba(240,224,64,0.07)]"
        >
          Medium ↗
        </a>
      </div>
    </footer>
  )
}
