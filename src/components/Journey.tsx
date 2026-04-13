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
  { tag: 'Data',        title: 'Uniform 2-second constraints', desc: 'The FoR for-2sec split makes spectrogram dimensions consistent, but it also forces the pipeline to be honest about what it can and cannot infer from short clips. Getting stable signal from 2 seconds drove many preprocessing decisions.' },
  { tag: 'Deployment',  title: 'CPU-only inference on Spaces', desc: 'We optimized for a CPU-only Hugging Face Spaces environment: ONNX Runtime for EfficientNet-B4, careful tensor handling, and an end-to-end latency target of <15 seconds without relying on CUDA.', },
  { tag: 'NLP',         title: 'API timeouts & rate limits',   desc: 'HF Inference can stall or rate-limit. The explanation stage needed a 3-layer fallback (Qwen → Gemma → rule-based) so users always get a readable “why”, even when the network fails.' },
  { tag: 'Training',    title: 'Colab disconnects mid-run',    desc: 'Long training runs can die unexpectedly. Checkpointing and the two-phase fine-tuning plan (warm-up then unfreeze top blocks) let us resume safely and reach AUC-ROC 0.974 without starting over.', last: true },
]

const stories: Story[] = [
  { icon: <IconMoon size={14} />,    title: 'A pipeline that always answers', desc: 'We treated “empty explanation” as a product bug. The final system guarantees a 3–5 sentence paragraph every run by falling back from Qwen to Gemma to a local deterministic explainer.' },
  { icon: <IconMasks size={14} />,   title: 'Turning numbers into trust',     desc: 'Instead of only showing a label + confidence, we made Grad-CAM and four-band attribution first-class outputs. Users can see which frequency region drove the verdict, not just the final score.' },
  { icon: <IconCoffee size={14} />,  title: 'Keeping it portable',            desc: 'ONNX Runtime made it practical to ship EfficientNet-B4 inference inside a simple demo without GPUs. That decision forced discipline: consistent preprocessing, predictable tensor shapes, and careful runtime assumptions.' },
  { icon: <IconRefresh size={14} />, title: 'Stage-by-stage contracts',       desc: 'Treating each stage as a contract (DSP tensor → CV logits → XAI maps → NLP paragraph) made debugging and deployment sane. It also kept the story coherent for the README and Medium write-up.', last: true },
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
          The path to a working system was anything but linear. Here's what we faced — and how we got through it.
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
