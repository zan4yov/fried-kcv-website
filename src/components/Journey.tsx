import type { ReactNode } from 'react'
import { IconWarning } from './icons/IconWarning'
import { IconStar4 } from './icons/IconStar4'
import { IconMoon } from './icons/IconMoon'
import { IconMasks } from './icons/IconMasks'
import { IconCoffee } from './icons/IconCoffee'
import { IconRefresh } from './icons/IconRefresh'

interface Obstacle { tag: string; title: string; desc: string; last?: boolean }
interface Story { icon: ReactNode; title: string; desc: string; last?: boolean }

const obstacles: Obstacle[] = [
  { tag: 'Dataset',     title: 'Choosing the right audio split', desc: 'We needed clear bonafide vs spoof labels with enough synthesis variety to avoid overfitting. We chose the Kaggle Fake-or-Real (FoR) dataset and used the for-2sec split for uniform preprocessing, consistent Mel dimensions, and a realistic “WhatsApp voice note” context.' },
  { tag: 'Model',       title: 'The “AUC ≠ usable” wake-up call', desc: 'We learned that a strong AUC does not guarantee a good decision boundary. Threshold-based accuracy collapsed when the model became overly aggressive. The fix wasn’t changing the model, it was calibrating how we interpret its spoof scores.' },
  { tag: 'Calibration', title: 'Sweeping thresholds for stability', desc: 'We systematically explored thresholds and found meaningful operating points (~0.969 EER-optimal; ~0.967 risk-aware), then finalized decision_threshold = 0.93 as a stable, balanced setting with ~0.86 accuracy and ~0.86 F1.' },
  {
    tag: 'Resources',
    title: 'Free tiers and Colab cutting out mid-run',
    desc: 'We stacked Colab, HF datasets, APIs, and Spaces on free tiers where we could. Colab Free often dropped or idled mid-training (often around 30 to 60 minutes in), right when EfficientNet-B4 was still chewing epochs on FoR. Frequent checkpoints to Drive and resuming from `best_model.pth` turned a crash into a pause, not a full redo.',
  },
  { tag: 'Deployment',  title: 'From Colab notebook to a real app', desc: 'Moving to Hugging Face Spaces forced engineering discipline: modular files (UI “Commander”, DSP “Translator”, CV “Engine Room”, NLP “Narrator”), exporting `best_model.pth`, converting to ONNX for portability, and shipping a demo that feels usable.', last: true },
]

const stories: Story[] = [
  { icon: <IconMoon size={14} />,    title: 'The “truth gap” moment', desc: 'We started mid-March and accidentally hit the perfect timing: Lebaran WhatsApp hoaxes. The blind listening quiz made the threat feel immediate, not theoretical, and set the bar for why the system must be explainable.' },
  { icon: <IconMasks size={14} />,   title: 'From black box to reasoning', desc: 'GradCAM changed the product: instead of blindly trusting the label, users see which time–frequency regions influenced the decision, making the system feel transparent rather than magical.' },
  { icon: <IconCoffee size={14} />,  title: 'From numbers to meaning', desc: 'We added a Qwen 2.5 NLP layer so non-technical users can understand the result. It converts label, confidence, and band distribution into a clear explanation, the final step that makes the UI accessible.' },
  { icon: <IconRefresh size={14} />, title: 'Never return an empty explanation', desc: 'The deployment uses a three-level fallback: Qwen 2.5 (timeout-guarded) → Gemma 2B → rule-based local text. Even with network failures, the app always produces a four-sentence explanation.', last: true },
]

export default function Journey() {
  return (
    <section id="journey" className="rv px-8 py-20 max-w-page mx-auto">
      <div className="mb-[46px]">
        <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-3 block">
          Project Journey
        </span>
        <h2 className="font-serif-i text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight leading-[0.93] text-white">
          Obstacles &amp;<br />
          <em className="not-italic text-white/20 font-normal">breakthroughs.</em>
        </h2>
        <p className="mt-3 text-[15px] text-white/40 font-light max-w-[510px] leading-[1.75]">
          The path to a working system was anything but linear. Here's what we faced, and how we got through it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[46px]">
        {/* Obstacles */}
        <div>
          <div className="font-mono-c text-[10px] tracking-[0.18em] uppercase mb-[18px] flex items-center gap-2.5" style={{ color: 'rgba(185,154,46,0.55)' }}>
            <IconWarning size={13} style={{ flexShrink: 0 }} />
            Obstacles we faced
            <span className="h-px flex-1 bg-bd" />
          </div>
          {obstacles.map((item) => (
            <div key={item.tag} className="group">
              <div className={`border-l-2 border-bd pl-4 relative cursor-default transition-[border-color] hover:border-[rgba(185,154,46,0.18)] ${item.last ? '' : 'pb-6'}`}>
                <div className="absolute left-[-5px] top-[5px] w-[7px] h-[7px] rounded-[2px] bg-mt2 transition-colors group-hover:bg-y" />
                <p className="font-mono-c text-[9px] tracking-[0.1em] uppercase text-mt2 mb-1.5">{item.tag}</p>
                <p className="text-sm font-medium text-white mb-1.5">{item.title}</p>
                <p className="text-[13px] text-mt font-light leading-[1.72]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stories */}
        <div>
          <div className="font-mono-c text-[10px] tracking-[0.18em] uppercase mb-[18px] flex items-center gap-2.5" style={{ color: 'rgba(100,210,160,0.65)' }}>
            <IconStar4 size={13} style={{ flexShrink: 0 }} />
            Stories from the build
            <span className="h-px flex-1 bg-bd" />
          </div>
          {stories.map((item) => (
            <div key={item.title} className="group">
              <div className={`border-l-2 border-bd pl-4 relative cursor-default transition-[border-color] hover:border-[rgba(185,154,46,0.18)] ${item.last ? '' : 'pb-6'}`}>
                <div className="absolute left-[-5px] top-[5px] w-[7px] h-[7px] rounded-[2px] bg-mt2 transition-colors group-hover:bg-y" />
                <div className="mb-1.5">{item.icon}</div>
                <p className="text-sm font-medium text-white mb-1.5">{item.title}</p>
                <p className="text-[13px] text-mt font-light leading-[1.72]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
