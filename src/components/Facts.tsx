import type { ReactNode } from 'react'
import { IconRobot } from './icons/IconRobot'
import { IconMusicNote } from './icons/IconMusicNote'
import { IconDna } from './icons/IconDna'
import { IconHistogram } from './icons/IconHistogram'
import { IconBolt } from './icons/IconBolt'
import { IconFace } from './icons/IconFace'
interface Fact { icon: ReactNode; title: string; text: string }

const facts: Fact[] = [
  { icon: <IconRobot size={18} />,     title: 'The word "hello" is hardest',  text: 'Voice generators have trained on billions of greetings — making AI-synthesized hellos nearly indistinguishable from real ones. We had to train specifically on greeting-heavy data to close this gap.' },
  { icon: <IconMusicNote size={18} />, title: '1980s music tech wins',        text: 'MFCC features — developed for music recognition in the 1980s — outperformed several newer deep learned representations as the single most discriminative feature in our benchmark tests.' },
  { icon: <IconDna size={18} />,       title: '128 dimensions per voice',     text: 'Our biometric model encodes each speaker as a 128-dimensional embedding vector where genuine speakers cluster together and synthetic voices diverge — more dimensions than many face recognition systems use.' },
  { icon: <IconHistogram size={18} />, title: '11 architectures, one winner', text: 'We benchmarked 11 model architectures before settling on CNN+LSTM. Logistic regression on raw spectral features ranked 4th overall — a reminder that simple baselines deserve evaluation before building complexity.' },
  { icon: <IconBolt size={18} />,      title: '40× smaller than GPT-2',       text: 'Our detection model is 40× smaller than GPT-2, yet solves a problem GPT-2 was never designed for. It fits comfortably in a Docker container on consumer hardware. Specialized beats general-purpose, every time.' },
  { icon: <IconFace size={18} />,      title: '80% of humans fail too',       text: 'Studies show humans perceive AI-generated voices as real ~80% of the time. Our system catches what human ears miss — which is simultaneously the point of this project and a slightly unsettling fact.' },
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
          Building this system taught us things no lecture ever mentioned.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-[13px]">
        {facts.map((f) => (
          <div
            key={f.title}
            className="border border-bd rounded-[10px] px-[17px] py-[19px] transition-all duration-200 hover:border-[rgba(240,224,64,0.18)] hover:bg-[rgba(240,224,64,0.07)] cursor-default"
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
          <span className="absolute top-3 left-3 z-10 font-mono-c text-[9px] bg-[rgba(240,224,64,0.07)] border border-[rgba(240,224,64,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
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
