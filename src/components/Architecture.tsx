import type { ReactNode } from 'react'
import { IconMic } from './icons/IconMic'
import { IconWaveSignal } from './icons/IconWaveSignal'
import { IconBars } from './icons/IconBars'
import { IconBrain } from './icons/IconBrain'
import { IconLock } from './icons/IconLock'
import { IconCheck } from './icons/IconCheck'
import { IconLineChart } from './icons/IconLineChart'

type PipelineItem =
  | { type: 'node'; icon: ReactNode; label: string; sub: string; active: boolean; subYellow?: boolean }
  | { type: 'arrow' }

const pipelineItems: PipelineItem[] = [
  { type: 'node', icon: <IconMic />,        label: 'Audio Input',       sub: 'Raw waveform',       active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconWaveSignal />, label: 'Preprocessing',     sub: 'Normalize · Denoise', active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconBars />,       label: 'Feature Extract',   sub: 'MFCC · Mel-spec',    active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconBrain />,      label: 'Deepfake Detector', sub: 'CNN + LSTM',          active: true, subYellow: true },
  { type: 'arrow' },
  { type: 'node', icon: <IconLock />,       label: 'Biometric Auth',    sub: 'Speaker embed.',     active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconCheck />,      label: 'Decision Engine',   sub: 'Grant / Deny',       active: false },
]

const layers = [
  { tag: 'Layer 1 · Feature Front-End', name: 'MFCC + Mel-Spectrogram Extraction', desc: '40-dimensional MFCC coefficients and 128-band Mel-spectrograms from 1-second windows (25ms frames, 10ms hop). Captures timbral texture and temporal dynamics that synthetic vocoders consistently distort.' },
  { tag: 'Layer 2 · Spatial Patterns', name: 'Convolutional Neural Network (4-layer)', desc: 'Extracts local spectral patterns — phase inconsistencies, vocoder artifacts, and unnatural harmonic structures that distinguish AI-generated from genuine speech at the feature map level.' },
  { tag: 'Layer 3 · Temporal Context', name: 'Bidirectional LSTM (2-layer)', desc: 'Processes CNN output sequences to capture long-range temporal dependencies. Critical for detecting synthesis artifacts that manifest over multi-frame windows, not instantaneously.' },
  { tag: 'Output', name: 'Binary Classification + Confidence Score', desc: 'Sigmoid output layer produces a 0–1 probability (0 = genuine, 1 = synthetic) with threshold-adjustable sensitivity for different risk tolerance requirements.' },
]

const techStack = [
  { label: 'Machine Learning', chips: [{ name: 'PyTorch', y: true }, { name: 'librosa', y: true }, { name: 'scikit-learn', y: true }, { name: 'NumPy', y: false }, { name: 'HuggingFace', y: false }] },
  { label: 'Backend', chips: [{ name: 'FastAPI', y: true }, { name: 'PostgreSQL', y: false }, { name: 'Redis', y: false }, { name: 'WebSocket', y: false }] },
  { label: 'Frontend', chips: [{ name: 'React', y: true }, { name: 'TypeScript', y: false }, { name: 'Tailwind', y: false }, { name: 'Recharts', y: false }] },
  { label: 'Dataset', chips: [{ name: 'ASVspoof 2019', y: true }, { name: 'VCTK Corpus', y: false }, { name: 'In-the-Wild', y: false }] },
]

export default function Architecture() {
  return (
    <div id="architecture" className="bg-surf border-t border-b border-bd py-20 px-8">
      <div className="max-w-page mx-auto">
        <div className="mb-[46px] rv">
          <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-3 block">
            System Architecture
          </span>
          <h2 className="font-serif-i text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight leading-[0.93] text-white">
            How the pipeline<br />
            <em className="not-italic text-white/20 font-normal">works.</em>
          </h2>
          <p className="mt-3 text-[15px] text-white/40 font-light max-w-[510px] leading-[1.75]">
            A sequential, dual-layer pipeline that moves from raw audio to a verified identity decision in under 300ms.
          </p>
        </div>

        {/* Pipeline */}
        <div className="flex items-center justify-center flex-wrap gap-1 my-[34px] rv">
          {pipelineItems.map((item, i) =>
            item.type === 'arrow' ? (
              <div key={i} className="text-mt2 text-sm flex-shrink-0 -mt-1">→</div>
            ) : (
              <div
                key={i}
                className={`border rounded-[10px] px-3 py-3.5 text-center min-w-[112px] bg-bg cursor-default transition-all hover:border-[rgba(240,224,64,0.18)] hover:bg-[rgba(240,224,64,0.07)] hover:-translate-y-[3px] ${
                  item.active
                    ? 'border-[rgba(240,224,64,0.18)] bg-[rgba(240,224,64,0.05)]'
                    : 'border-bd'
                }`}
              >
                <div className="text-[18px] mb-[5px]">{item.icon}</div>
                <div className="text-[13px] font-medium text-white mb-0.5">{item.label}</div>
                <div className={`font-mono-c text-[10px] tracking-[0.04em] ${item.subYellow ? 'text-y' : 'text-mt'}`}>
                  {item.sub}
                </div>
              </div>
            )
          )}
        </div>

        {/* Figure 2 */}
        <div className="border border-bd rounded-xl overflow-hidden bg-surf mb-[42px] rv">
          <div className="relative p-3 md:p-4 bg-[#0d0d0d]">
            <span className="absolute top-4 left-4 z-10 font-mono-c text-[9px] bg-[rgba(240,224,64,0.07)] border border-[rgba(240,224,64,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
              Fig. 2
            </span>
            <img
              src="/figures/figure2_efficientnet_architecture.svg"
              alt="Figure 2 — EfficientNet-B4 architecture for spectrogram-based deepfake detection"
              className="w-full h-auto block rounded-lg"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
            Figure 2 — EfficientNet-B4 backbone and classifier head (ONNX inference path)
          </p>
        </div>

        {/* Two-column: layers + tech stack */}
        <div className="grid md:grid-cols-2 gap-8 rv">
          <div>
            <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-[14px] block">
              Detection Model Layers
            </span>
            {layers.map((l) => (
              <div key={l.tag} className="border border-bd rounded-[10px] p-4 mb-2 transition-[border-color] duration-200 hover:border-bdh">
                <div className="font-mono-c text-[9px] text-y tracking-[0.08em] mb-[5px] uppercase">{l.tag}</div>
                <div className="text-[14px] font-medium text-white/[0.78] mb-[5px]">{l.name}</div>
                <div className="text-[13px] text-mt font-light leading-[1.65]">{l.desc}</div>
              </div>
            ))}
          </div>

          <div>
            <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-[14px] block">
              Technology Stack
            </span>
            <div className="grid grid-cols-2 gap-8 md:gap-8 max-md:grid-cols-1 max-md:gap-[22px]">
              {techStack.map((group) => (
                <div key={group.label}>
                  <div className="font-mono-c text-[10px] tracking-[0.14em] text-mt2 uppercase mb-[11px]">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.chips.map((chip) => (
                      <span
                        key={chip.name}
                        className={`font-mono-c text-[11px] px-[11px] py-[5px] rounded-[5px] border cursor-default transition-all duration-200 ${
                          chip.y
                            ? 'border-[rgba(240,224,64,0.18)] text-y bg-[rgba(240,224,64,0.07)]'
                            : 'border-bd text-white/[0.48] hover:border-[rgba(240,224,64,0.18)] hover:text-y hover:bg-[rgba(240,224,64,0.07)]'
                        }`}
                      >
                        {chip.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Figure 3 */}
            <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-5">
              <div
                className="flex items-center justify-center flex-col gap-2 p-6 relative min-h-[150px]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg,rgba(240,224,64,.02) 0,rgba(240,224,64,.02) 1px,transparent 1px,transparent 12px),repeating-linear-gradient(-45deg,rgba(240,224,64,.02) 0,rgba(240,224,64,.02) 1px,transparent 1px,transparent 12px)',
                }}
              >
                <span className="absolute top-3 left-3 font-mono-c text-[9px] bg-[rgba(240,224,64,0.07)] border border-[rgba(240,224,64,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
                  Fig. 3
                </span>
                <IconLineChart size={28} />
                <p className="font-mono-c text-[10px] tracking-widest text-mt2 text-center relative z-10 uppercase">
                  Mel-Spectrogram Comparison
                  <small className="block mt-0.5 text-[9px] text-[#2e2e2e]">Replace with genuine vs. synthetic spectrogram from your article</small>
                </p>
              </div>
              <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
                Figure 3 — Genuine vs. synthetic speech spectrograms showing synthesis artifacts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
