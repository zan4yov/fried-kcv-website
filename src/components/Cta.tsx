export default function Cta() {
  return (
    <section id="cta" className="pt-[110px] pb-[68px] px-8 text-center relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(240,224,64,0.07) 0%,transparent 65%)' }}
      />
      <div className="relative z-10 max-w-[600px] mx-auto">
        <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-[15px] block">
          Open Source · 2026
        </span>
        <h2 className="font-serif-i text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-2px] text-white mb-4">
          Read the full<br />write-up.
        </h2>
        <p className="text-base text-white/[0.36] font-light max-w-[380px] mx-auto leading-[1.75] mb-9">
          The complete technical breakdown is on Medium. Source code, model weights, and evaluation notebooks are on GitHub.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://medium.com/@ferelibrahim01/04a015c8f885"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/50 font-sans text-sm border border-bdh px-6 py-2.5 rounded-md hover:border-[rgba(240,224,64,0.28)] hover:text-white/80 transition-all active:bg-y active:text-black active:border-y active:font-semibold"
          >
            Read on Medium ↗
          </a>
          <a
            href="https://github.com/ibrahimferel/final-fried-kcv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/50 font-sans text-sm border border-bdh px-6 py-2.5 rounded-md hover:border-[rgba(240,224,64,0.28)] hover:text-white/80 transition-all active:bg-y active:text-black active:border-y active:font-semibold"
          >
            GitHub Repository ↗
          </a>
          <a
            href="https://huggingface.co/spaces/narcissablack/fake67-app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/50 font-sans text-sm border border-bdh px-6 py-2.5 rounded-md hover:border-[rgba(240,224,64,0.28)] hover:text-white/80 transition-all active:bg-y active:text-black active:border-y active:font-semibold"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </section>
  )
}
