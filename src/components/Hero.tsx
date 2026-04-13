import Waveform from './Waveform'

const stats = [
  { label: 'AUC-ROC',     value: '0.974', sub: 'FoR for-2sec · ranking quality' },
  { label: 'Accuracy',    value: '86.1%', sub: 'held-out eval at thr 0.93' },
  { label: 'F1 score',    value: '0.858', sub: 'precision / recall balance' },
  { label: 'Latency target', value: '<15s', sub: 'CPU-only HF Spaces demo' },
]

export default function Hero() {
  return (
    <section id="hero" className="pt-[140px] pb-24 px-8 max-w-page mx-auto relative">
      <div className="flex items-center gap-2.5 mb-7 anim-fu" style={{ animationDelay: '100ms' }}>
        <span className="font-mono-c text-[11px] tracking-[0.12em] text-y bg-[rgba(185,154,46,0.07)] border border-[rgba(185,154,46,0.18)] px-3 py-1 rounded uppercase">
          Final Project · Computer Science
        </span>
        <span className="font-mono-c text-[11px] text-mt2">· Ferel · Safa · Razan</span>
      </div>

      <h1
        className="font-serif-i text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.08] tracking-[-1.2px] text-white mb-7 anim-fu text-balance"
        style={{ animationDelay: '200ms' }}
      >
        Fake67: Explainable{' '}
        <span className="text-y">
          Deepfake Audio Detection
        </span>{' '}
        via Spectrograms Using EfficientNet-B4 and GradCAM
      </h1>

      <p
        className="text-[17px] font-light text-white/45 leading-[1.8] max-w-[540px] mb-8 anim-fu"
        style={{ animationDelay: '300ms' }}
      >
        Explainable deepfake audio detection via Mel spectrograms using EfficientNet-B4
        and Grad-CAM, with a 3-layer NLP fallback that always explains why.
      </p>

      <div
        className="mb-10 max-w-[640px] anim-fu rounded-xl overflow-hidden border border-[rgba(185,154,46,0.22)] bg-[rgba(185,154,46,0.06)] shadow-[0_0_48px_rgba(185,154,46,0.06)]"
        style={{ animationDelay: '350ms' }}
      >
        <div className="font-mono-c text-[10px] tracking-[0.14em] text-y/90 uppercase px-4 py-2.5 border-b border-[rgba(185,154,46,0.15)] bg-[rgba(185,154,46,0.05)]">
          Live demo · Gradio on Hugging Face Spaces
        </div>
        <img
          src="/demo-fried-kcv.gif"
          alt="Screen recording of the Fake67 Gradio app: upload WAV or FLAC, run pipeline, view verdict, spectrogram, Grad-CAM overlay, and NLP explanation"
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>

      <div className="flex gap-3 flex-wrap anim-fu" style={{ animationDelay: '400ms' }}>
        <a
          href="#overview"
          className="inline-flex items-center gap-2 text-white/50 font-sans text-sm border border-bdh px-6 py-2.5 rounded-md hover:border-[rgba(185,154,46,0.28)] hover:text-white/80 transition-all active:bg-y active:text-black active:border-y active:font-semibold"
        >
          Read the Docs ↓
        </a>
        <a
          href="https://medium.com/@ferelibrahim01/04a015c8f885"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white/50 font-sans text-sm border border-bdh px-6 py-2.5 rounded-md hover:border-[rgba(185,154,46,0.28)] hover:text-white/80 transition-all active:bg-y active:text-black active:border-y active:font-semibold"
        >
          Medium Article ↗
        </a>
      </div>

      <div
        className="mt-[52px] pt-[22px] border-t border-bd flex gap-[38px] flex-wrap anim-fu"
        style={{ animationDelay: '550ms' }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-[3px] rounded-lg border border-bd px-4 py-3 min-w-[140px] flex-1 bg-[rgba(185,154,46,0.05)]"
          >
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
