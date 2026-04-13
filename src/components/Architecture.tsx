import type { ReactNode } from 'react'
import { IconMic } from './icons/IconMic'
import { IconWaveSignal } from './icons/IconWaveSignal'
import { IconBrain } from './icons/IconBrain'
import { IconLineChart } from './icons/IconLineChart'
import { IconRobot } from './icons/IconRobot'

type PipelineItem =
  | { type: 'node'; icon: ReactNode; label: string; sub: string; active: boolean; subYellow?: boolean }
  | { type: 'arrow' }

const pipelineItems: PipelineItem[] = [
  { type: 'node', icon: <IconMic />,        label: 'Audio input',        sub: 'WAV / FLAC',                    active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconWaveSignal />, label: 'Stage 1 · Audio DSP', sub: 'STFT · Mel · 224²',            active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconBrain />,      label: 'Stage 2 · CV inference', sub: 'EfficientNet-B4 · ONNX',   active: true, subYellow: true },
  { type: 'arrow' },
  { type: 'node', icon: <IconLineChart />, label: 'Stage 3 · Grad-CAM',   sub: 'XAI · 4-band Mel',            active: false },
  { type: 'arrow' },
  { type: 'node', icon: <IconRobot />,      label: 'Stage 4 · NLP',      sub: 'Qwen · Gemma · rules',        active: false },
]

const layers = [
  { tag: 'Stage 1 · Audio DSP', name: 'librosa preprocessing', desc: 'Load → resample 16 kHz mono → STFT → 128 Mel bins → dB normalisation → resize 224×224 → stack to a 3×224×224 float32 tensor aligned with ImageNet-pretrained backbones.' },
  { tag: 'Stage 2 · CV inference', name: 'EfficientNet-B4 + ONNX Runtime', desc: 'Spectrogram is classified as bonafide vs spoof with a two-logit head; sigmoid on the spoof logit yields a score in [0, 1] with an EER-tuned threshold at 0.93 on the FoR for-2sec split.' },
  { tag: 'Stage 3 · Grad-CAM (XAI)', name: 'Saliency on the last conv feature map', desc: 'Gradients of the predicted class w.r.t. late feature maps produce a heatmap (Jet overlay at 50%) plus four-band Mel attribution so users see which frequency regions drove the verdict.' },
  { tag: 'Stage 4 · NLP explanation', name: 'Instruction-tuned LLM with resilient fallbacks', desc: 'A structured prompt carries label, confidence, and band weights; Qwen 2.5-7B-Instruct is called async via the HF API, then Gemma 2B, then a local rule-based explainer so the UI never returns an empty story.' },
]

const techStack = [
  { label: 'Machine learning', chips: [{ name: 'PyTorch', y: true }, { name: 'ONNX Runtime', y: true }, { name: 'librosa', y: true }, { name: 'grad-cam', y: true }, { name: 'scikit-learn', y: false }] },
  { label: 'Explainability & APIs', chips: [{ name: 'Grad-CAM', y: true }, { name: 'HF Inference API', y: false }, { name: 'OpenAI-compatible client', y: false }] },
  { label: 'App & deployment', chips: [{ name: 'Gradio 4.44', y: true }, { name: 'Hugging Face Spaces', y: true }, { name: 'Python 3.10', y: false }] },
  { label: 'Dataset', chips: [{ name: 'FoR for-2sec', y: true }, { name: 'Fake-or-Real (FoR)', y: false }, { name: 'Kaggle', y: false }] },
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
            The same four-stage story as on Medium: WAV/FLAC in, Mel tensor out of DSP, EfficientNet-B4 ONNX for the score, Grad-CAM for proof, NLP for a human-readable paragraph — wired together in Gradio on Hugging Face Spaces.
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
                className={`border rounded-[10px] px-2.5 py-3.5 text-center min-w-[118px] max-w-[140px] md:min-w-[128px] md:max-w-none bg-bg cursor-default transition-all hover:border-[rgba(185,154,46,0.22)] hover:bg-[rgba(185,154,46,0.08)] hover:-translate-y-[3px] ${
                  item.active
                    ? 'border-[rgba(185,154,46,0.22)] bg-[rgba(185,154,46,0.07)]'
                    : 'border-bd'
                }`}
              >
                <div className="text-[18px] mb-[5px]">{item.icon}</div>
                <div className="text-[12px] md:text-[13px] font-medium text-white mb-0.5 leading-snug">{item.label}</div>
                <div className={`font-mono-c text-[9px] md:text-[10px] tracking-[0.04em] leading-tight ${item.subYellow ? 'text-y' : 'text-mt'}`}>
                  {item.sub}
                </div>
              </div>
            )
          )}
        </div>

        {/* Figure 2 */}
        <div className="border border-bd rounded-xl overflow-hidden bg-surf mb-[42px] rv">
          <div className="relative p-3 md:p-4 bg-[#0d0d0d]">
            <span className="absolute top-4 left-4 z-10 font-mono-c text-[9px] bg-[rgba(185,154,46,0.1)] border border-[rgba(185,154,46,0.22)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
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

        {/* Two-column: stages + tech stack */}
        <div className="grid md:grid-cols-2 gap-8 rv">
          <div>
            <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-[14px] block">
              Pipeline stages (detail)
            </span>
            {layers.map((l) => (
              <div key={l.tag} className="border border-bd rounded-[10px] p-4 mb-2 transition-[border-color] duration-200 hover:border-bdh bg-[rgba(185,154,46,0.04)]">
                <div className="font-mono-c text-[9px] text-y tracking-[0.08em] mb-[5px] uppercase">{l.tag}</div>
                <div className="text-[14px] font-medium text-white/[0.78] mb-[5px]">{l.name}</div>
                <div className="text-[13px] text-mt font-light leading-[1.65]">{l.desc}</div>
              </div>
            ))}
          </div>

          <div>
            <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-[14px] block">
              Technology stack
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
                            ? 'border-[rgba(185,154,46,0.22)] text-y bg-[rgba(185,154,46,0.08)]'
                            : 'border-bd text-white/[0.48] hover:border-[rgba(185,154,46,0.22)] hover:text-y hover:bg-[rgba(185,154,46,0.08)]'
                        }`}
                      >
                        {chip.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Figure 3 — interactive Mel comparison (canvas) */}
            <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-5">
              <div className="relative bg-[#0a0a0a]">
                <span className="absolute top-3 left-3 z-10 font-mono-c text-[9px] bg-[rgba(185,154,46,0.1)] border border-[rgba(185,154,46,0.22)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
                  Fig. 3
                </span>
                <iframe
                  title="Figure 3 — Mel spectrogram comparison: genuine vs AI-generated TTS"
                  src="/figures/figure3_mel_spectrogram_comparison.html"
                  className="w-full min-h-[420px] border-0 block"
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
                Figure 3 — Genuine vs. synthetic Mel spectrograms with band attribution and Grad-CAM-style highlight (2–4 kHz artifact zone)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
