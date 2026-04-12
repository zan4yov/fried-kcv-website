import Waveform from './Waveform'

const stats = [
  { label: 'Detection Accuracy', value: '94.7%',  sub: 'on ASVspoof benchmark'  },
  { label: 'Inference Latency',  value: '<300ms', sub: 'end-to-end pipeline'    },
  { label: 'Training Samples',   value: '12K+',   sub: 'real + synthetic audio' },
  { label: 'Equal Error Rate',   value: '5.8%',   sub: 'cross-dataset eval'     },
]

export default function Hero() {
  return (
    <section id="hero" className="pt-[140px] pb-24 px-8 max-w-page mx-auto relative">
      <div className="flex items-center gap-2.5 mb-7 anim-fu" style={{ animationDelay: '100ms' }}>
        <span className="font-mono-c text-[11px] tracking-[0.12em] text-y bg-[rgba(240,224,64,0.07)] border border-[rgba(240,224,64,0.18)] px-3 py-1 rounded uppercase">
          Final Project · Computer Science
        </span>
        <span className="font-mono-c text-[11px] text-mt2">· Ferel · Safa · Razan</span>
      </div>

      <h1
        className="font-serif-i text-[clamp(3rem,7.5vw,5.8rem)] leading-[0.9] tracking-[-2px] text-white mb-7 anim-fu"
        style={{ animationDelay: '200ms' }}
      >
        Deepfake Speech<br />
        <span className="text-y relative inline-block">
          Detection
          <span className="absolute bottom-[3px] left-0 right-0 h-[2px] bg-y opacity-30 rounded-sm" />
        </span>
        {' '}&amp;<br />Biometric Auth
      </h1>

      <p
        className="text-[17px] font-light text-white/45 leading-[1.8] max-w-[540px] mb-10 anim-fu"
        style={{ animationDelay: '300ms' }}
      >
        A dual-layer AI security system that identifies synthetic voices using spectral deep learning
        and verifies genuine user identity through multi-modal biometrics — all in real time.
      </p>

      <div className="flex gap-3 flex-wrap anim-fu" style={{ animationDelay: '400ms' }}>
        <a
          href="#overview"
          className="inline-flex items-center gap-2 bg-y text-black font-sans text-sm font-semibold px-6 py-2.5 rounded-md hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(240,224,64,0.2)]"
        >
          Read the Docs ↓
        </a>
        <a
          href="https://medium.com/@ferelibrahim01/04a015c8f885"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white/50 font-sans text-sm border border-bdh px-6 py-2.5 rounded-md hover:border-[rgba(240,224,64,0.28)] hover:text-white/80 transition-all"
        >
          Medium Article ↗
        </a>
      </div>

      <div
        className="mt-[52px] pt-[22px] border-t border-bd flex gap-[38px] flex-wrap anim-fu"
        style={{ animationDelay: '550ms' }}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-[3px]">
            <span className="font-mono-c text-[10px] tracking-[0.14em] text-mt2 uppercase">{s.label}</span>
            <span className="font-serif-i text-[2.2rem] text-y leading-none tracking-[-1px]">{s.value}</span>
            <span className="text-[12px] text-mt font-light">{s.sub}</span>
          </div>
        ))}
      </div>

      <Waveform />
    </section>
  )
}
