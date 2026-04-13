import type { ReactNode } from 'react'
import { IconRobot } from './icons/IconRobot'
import { IconMusicNote } from './icons/IconMusicNote'
import { IconDna } from './icons/IconDna'
import { IconHistogram } from './icons/IconHistogram'
import { IconBolt } from './icons/IconBolt'
import { IconFace } from './icons/IconFace'
interface Fact { icon: ReactNode; title: string; text: string }

const facts: Fact[] = [
  { icon: <IconFace size={18} />,      title: 'Humans get fooled',            text: 'In our Lebaran 2026 blind listening run (57 respondents), ~90% were fooled by AI-generated clips — and ~20% even flagged a real human voice as AI. The “Liar’s Dividend” is real.' },
  { icon: <IconDna size={18} />,       title: 'EfficientNet-B4 is 1792-d',    text: 'Before the two-logit head (bonafide/spoof), EfficientNet-B4 produces a 1792-d embedding — expressive enough for spectrogram artifacts, still deployable with ONNX Runtime on CPU.' },
  { icon: <IconHistogram size={18} />, title: 'Threshold = 0.93 (EER-tuned)', text: 'We use sigmoid(logit₁) as a spoof score in [0,1], with a decision threshold 0.93 tuned to align FAR≈FRR (EER) on the FoR for-2sec split.' },
  { icon: <IconMusicNote size={18} />, title: '2–4 kHz is the artifact zone', text: 'Band attribution highlights a recurring high-mid region (2–4 kHz): vocal texture where many TTS systems leave consistent spectral traces.' },
  { icon: <IconBolt size={18} />,      title: 'CPU-only demo target: <15s',   text: 'The full run (DSP → ONNX inference → Grad-CAM → NLP explanation) is designed to complete under ~15 seconds on CPU-only Hugging Face Spaces.' },
  { icon: <IconRobot size={18} />,     title: 'The app always explains',      text: 'Stage 4 uses a 3-layer fallback (Qwen → Gemma → rule-based). Even if HF API calls timeout, users still receive a readable 3–5 sentence “why”.' },
]

export default function Facts() {
  return (
    <section id="facts" className="rv px-8 py-20 max-w-page mx-auto">
      <div className="mb-[46px]">
        <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-3 block">
          Fun Facts
        </span>
        <h2 className="font-serif-i text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight leading-[0.93] text-white">
          Things we discovered<br />
          <em className="not-italic text-white/20 font-normal">along the way.</em>
        </h2>
        <p className="mt-3 text-[15px] text-white/40 font-light max-w-[510px] leading-[1.75]">
          Highlights pulled straight from our project README — the kind of details that make the system feel real.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-[13px]">
        {facts.map((f) => (
          <div
            key={f.title}
            className="border border-bd rounded-[10px] px-[17px] py-[19px] transition-all duration-200 hover:border-[rgba(185,154,46,0.18)] hover:bg-[rgba(185,154,46,0.07)] cursor-default"
          >
            <div className="text-[17px] mb-[9px]">{f.icon}</div>
            <div className="text-[14px] font-medium text-white mb-1.5">{f.title}</div>
            <div className="text-[13px] text-mt font-light leading-[1.72]">{f.text}</div>
          </div>
        ))}
      </div>

      {/* Figure 4 — interactive Chart.js embed */}
      <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-8 rv">
        <div className="relative bg-[#0a0a0a]">
          <span className="absolute top-3 left-3 z-10 font-mono-c text-[9px] bg-[rgba(185,154,46,0.07)] border border-[rgba(185,154,46,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
            Fig. 4
          </span>
          <iframe
            title="Figure 4 — Model performance: metrics, ROC curve, and confusion matrix"
            src="/figures/figure4_model_performance.html"
            className="w-full min-h-[520px] border-0 block"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
          Figure 4 — AUC-ROC, accuracy, F1, confusion matrix, and ROC curve (FoR for-2sec split)
        </p>
      </div>
    </section>
  )
}
