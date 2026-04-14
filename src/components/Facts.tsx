import type { ReactNode } from 'react'
import { IconRobot } from './icons/IconRobot'
import { IconMusicNote } from './icons/IconMusicNote'
import { IconDna } from './icons/IconDna'
import { IconHistogram } from './icons/IconHistogram'
import { IconBolt } from './icons/IconBolt'
import { IconFace } from './icons/IconFace'
interface Fact { icon: ReactNode; title: string; text: string }

const facts: Fact[] = [
  { icon: <IconFace size={18} />,      title: 'The “truth gap” is measurable', text: 'Lebaran blind listening quiz (57 respondents; 89.3% older adults): on deepfakes 1 & 3, nearly 90% were fooled; on the real clip, ~20% flagged it as AI. That reversal is the Liar’s Dividend.' },
  { icon: <IconMusicNote size={18} />, title: 'Why “for-2sec” matters',        text: 'We used FoR for-2sec for uniform preprocessing, consistent Mel spectrogram dimensions, and a realistic baseline that matches short WhatsApp voice-note style audio.' },
  { icon: <IconHistogram size={18} />, title: 'AUC ≠ decision boundary',       text: 'A strong AUC-ROC doesn’t guarantee good threshold decisions. We had to sweep thresholds, identify operating points (~0.969 / ~0.967), then finalize decision_threshold = 0.93 for stable balanced decisions (~0.86 accuracy, ~0.86 F1).' },
  { icon: <IconDna size={18} />,       title: 'EfficientNet-B4 + GradCAM',    text: 'Treating spectrograms like images lets EfficientNet-B4 capture subtle visual-like audio patterns. GradCAM then highlights which time–frequency regions drove the verdict, addressing the black-box problem.' },
  { icon: <IconBolt size={18} />,      title: 'Saved twice: .pth + ONNX',      text: 'We export the best weights (`best_model.pth`) and also convert to ONNX for faster, more portable inference, a key step to move from notebook experiments to deployment.' },
  { icon: <IconRobot size={18} />,     title: 'Three-level explanation fallback', text: 'Stage 4 uses Qwen 2.5 with timeout, then Gemma 2B, then a local rule-based explainer that always returns a four-sentence explanation (prediction, confidence, dominant band, interpretation).' },
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

      {/* Figure 4, interactive Chart.js embed (glass frame + themed HTML inside) */}
      <div className="mt-10 rv relative max-w-[900px] mx-auto">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-90"
          style={{
            background:
              'linear-gradient(135deg, rgba(185,154,46,0.35) 0%, rgba(185,154,46,0.06) 42%, rgba(255,255,255,0.04) 55%, rgba(185,154,46,0.12) 100%)',
            filter: 'blur(0.5px)',
          }}
        />
        <div className="relative rounded-2xl border border-white/[0.08] bg-[rgba(10,10,10,0.65)] backdrop-blur-xl shadow-[0_32px_64px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(185,154,46,0.1),transparent_55%)] pointer-events-none" />
          <div className="relative">
            <iframe
              title="Figure 4, model performance: metrics, ROC curve, and confusion matrix"
              src="/figures/figure4_model_performance.html"
              className="w-full min-h-[560px] sm:min-h-[520px] border-0 block bg-transparent"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </div>
          <p className="relative text-[11px] text-mt font-light px-5 py-3 border-t border-white/[0.06] text-center leading-relaxed bg-black/25 backdrop-blur-sm">
            Figure 4, AUC-ROC, accuracy, F1, confusion matrix, and ROC curve (FoR for-2sec split)
          </p>
        </div>
      </div>
    </section>
  )
}
