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
  { icon: <IconDna size={18} />,       title: 'EfficientNet-B4 + Grad-CAM',    text: 'Treating spectrograms like images lets EfficientNet-B4 capture subtle visual-like audio patterns. Grad-CAM then highlights which time–frequency regions drove the verdict, addressing the black-box problem.' },
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

      {/* Figure 4, interactive Chart.js embed */}
      <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-8 rv">
        <div className="relative bg-[#0a0a0a]">
          <span className="absolute top-3 left-3 z-10 font-mono-c text-[9px] bg-[rgba(185,154,46,0.07)] border border-[rgba(185,154,46,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
            Fig. 4
          </span>
          <iframe
            title="Figure 4, model performance: metrics, ROC curve, and confusion matrix"
            src="/figures/figure4_model_performance.html"
            className="w-full min-h-[520px] border-0 block"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
          Figure 4, AUC-ROC, accuracy, F1, confusion matrix, and ROC curve (FoR for-2sec split)
        </p>
      </div>
    </section>
  )
}
