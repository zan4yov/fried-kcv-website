import type { ReactNode } from 'react'
import { IconRobot } from './icons/IconRobot'
import { IconMusicNote } from './icons/IconMusicNote'
import { IconDna } from './icons/IconDna'
import { IconHistogram } from './icons/IconHistogram'
import { IconBolt } from './icons/IconBolt'
import { IconFace } from './icons/IconFace'
import { IconBarChart } from './icons/IconBarChart'

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

      {/* Figure 4 */}
      <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-8 rv">
        <div
          className="aspect-video flex items-center justify-center flex-col gap-2 p-6 relative min-h-[190px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,rgba(240,224,64,.02) 0,rgba(240,224,64,.02) 1px,transparent 1px,transparent 12px),repeating-linear-gradient(-45deg,rgba(240,224,64,.02) 0,rgba(240,224,64,.02) 1px,transparent 1px,transparent 12px)',
          }}
        >
          <span className="absolute top-3 left-3 font-mono-c text-[9px] bg-[rgba(240,224,64,0.07)] border border-[rgba(240,224,64,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
            Fig. 4
          </span>
          <IconBarChart size={28} />
          <p className="font-mono-c text-[10px] tracking-widest text-mt2 text-center relative z-10 uppercase">
            Model Performance Results
            <small className="block mt-0.5 text-[9px] text-[#2e2e2e]">Replace with your evaluation charts / confusion matrix from the article</small>
          </p>
        </div>
        <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
          Figure 4 — Detection accuracy, EER curve, and confusion matrix across test splits
        </p>
      </div>
    </section>
  )
}
