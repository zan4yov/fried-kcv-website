import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { IconMic } from './icons/IconMic'
import { IconWaveSignal } from './icons/IconWaveSignal'
import { IconBrain } from './icons/IconBrain'
import { IconLineChart } from './icons/IconLineChart'
import { IconRobot } from './icons/IconRobot'

type PipelineItem =
  | { type: 'node'; icon: ReactNode; label: string; sub?: string; active: boolean; subYellow?: boolean }
  | { type: 'arrow' }

const PIPELINE_TO_LAYER_TAG: Record<string, string> = {
  'Audio input': 'Audio input',
  'Stage 1 · Audio DSP': 'Stage 1 · Audio DSP',
  'Stage 2 · CV inference': 'Stage 2 · CV inference',
  'Stage 3 · Grad-CAM': 'Stage 3 · Grad-CAM (XAI)',
  'Stage 4 · NLP': 'Stage 4 · NLP explanation',
}

const pipelineItems: PipelineItem[] = [
  { type: 'node', icon: <IconMic />, label: 'Audio input', active: false },
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
  {
    tag: 'Audio input',
    name: 'User-supplied clip',
    desc: 'The user uploads a WAV or FLAC file through the Gradio interface. We standardise on those formats so Stage 1 receives PCM audio without extra lossy compression artefacts before resampling to 16 kHz mono for the Mel pipeline.',
  },
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
  const [selectedLayerTag, setSelectedLayerTag] = useState<string | null>(null)

  const selectedLayer = useMemo(() => {
    if (!selectedLayerTag) return null
    return layers.find((l) => l.tag === selectedLayerTag) ?? null
  }, [selectedLayerTag])

  const onSelectStage = (pipelineLabel: string) => {
    const tag = PIPELINE_TO_LAYER_TAG[pipelineLabel]
    if (!tag) return
    setSelectedLayerTag(tag)
  }

  useEffect(() => {
    if (!selectedLayerTag) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedLayerTag(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [selectedLayerTag])

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
            The same four-stage story as on Medium: WAV/FLAC in, Mel tensor out of DSP, EfficientNet-B4 ONNX for the score, Grad-CAM for proof, NLP for a human-readable paragraph, wired together in Gradio on Hugging Face Spaces.
          </p>
        </div>

        {/* Pipeline */}
        <div className="rv flex items-center justify-center mb-3">
          <span className="font-mono-c text-[10px] tracking-[0.18em] uppercase text-y bg-[rgba(185,154,46,0.07)] border border-[rgba(185,154,46,0.18)] px-3 py-1 rounded">
            {selectedLayer?.tag ?? 'Tap a stage to see the explanation'}
          </span>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-1 my-[34px] rv">
          {pipelineItems.map((item, i) =>
            item.type === 'arrow' ? (
              <div key={i} className="text-mt2 text-sm flex-shrink-0 -mt-1">→</div>
            ) : (
              (() => {
                const mappedTag = PIPELINE_TO_LAYER_TAG[item.label]
                const isMapped = Boolean(mappedTag)
                const isActive = selectedLayerTag ? mappedTag === selectedLayerTag : false
                const isSubYellow = selectedLayerTag ? isActive : false
                const isAudioInput = item.label === 'Audio input'

                return (
              <div
                key={i}
                role={isMapped ? 'button' : undefined}
                tabIndex={isMapped ? 0 : undefined}
                aria-pressed={
                  isMapped ? selectedLayerTag === mappedTag : undefined
                }
                onClick={isMapped ? () => onSelectStage(item.label) : undefined}
                onKeyDown={
                  isMapped
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          onSelectStage(item.label)
                        }
                      }
                    : undefined
                }
                className={`border rounded-[10px] px-2.5 py-3.5 text-center min-w-[118px] ${
                  isAudioInput ? 'max-w-[min(280px,92vw)]' : 'max-w-[140px]'
                } md:min-w-[128px] md:max-w-none bg-bg ${
                  isMapped ? 'cursor-pointer select-none' : 'cursor-default'
                } transition-all hover:border-[rgba(185,154,46,0.22)] hover:bg-[rgba(185,154,46,0.08)] hover:-translate-y-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(185,154,46,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,10,10,0.0)] ${
                  isActive
                    ? 'border-[rgba(185,154,46,0.22)] bg-[rgba(185,154,46,0.07)]'
                    : 'border-bd'
                }`}
              >
                <div className="text-[18px] mb-[5px]">{item.icon}</div>
                <div className="text-[12px] md:text-[13px] font-medium text-white mb-0.5 leading-snug">{item.label}</div>
                {item.sub ? (
                  <div className={`font-mono-c text-[9px] md:text-[10px] tracking-[0.04em] leading-tight ${isSubYellow ? 'text-y' : 'text-mt'}`}>
                    {item.sub}
                  </div>
                ) : null}
              </div>
                )
              })()
            )
          )}
        </div>

        {/* Inline stage explanation bar (updates on tap) */}
        <div className="rv -mt-2 mb-[38px]">
          <div
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              selectedLayer ? 'border-[rgba(185,154,46,0.22)] bg-[rgba(185,154,46,0.06)]' : 'border-bd bg-bg/40'
            }`}
          >
            <div className="px-5 md:px-6 py-4 md:py-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="font-mono-c text-[10px] tracking-[0.16em] uppercase text-mt2">
                  {selectedLayer ? selectedLayer.tag : 'Tap a stage to see the explanation'}
                </div>
                <div className="mt-1 text-[15px] md:text-[16px] font-medium text-white/80 leading-snug">
                  {selectedLayer ? selectedLayer.name : 'Audio DSP → CV inference → Grad-CAM → NLP'}
                </div>
                <div className="mt-2 text-[13px] text-mt font-light leading-[1.75]">
                  {selectedLayer
                    ? selectedLayer.desc
                    : 'Select Audio input or Stage 1–4 in the pipeline above. Press Esc or use Clear to reset.'}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLayerTag(null)}
                className={`shrink-0 font-mono-c text-[10px] tracking-[0.16em] uppercase transition-colors border rounded-md px-2.5 py-1.5 ${
                  selectedLayer
                    ? 'text-mt2 hover:text-y border-bd hover:border-[rgba(185,154,46,0.22)] bg-bg'
                    : 'text-white/25 border-bd/60 bg-transparent cursor-default'
                }`}
                disabled={!selectedLayer}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Figure 2 */}
        <div className="border border-bd rounded-xl overflow-hidden bg-surf mb-[42px] rv">
          <div className="relative p-3 md:p-4 bg-[#0d0d0d]">
            <img
              src="/figures/figure2_system_pipeline.jpeg"
              alt="Figure 2, end-to-end system pipeline: audio DSP to CV inference, Grad-CAM, and NLP explanation"
              className="w-full h-auto block rounded-lg border border-bd bg-[#0a0a0a] object-contain max-h-[540px] md:max-h-[640px]"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
            Figure 2, end-to-end pipeline from WAV input → Mel spectrogram → EfficientNet inference → Grad-CAM and band attribution → LLM explanation
          </p>
        </div>

        {/* Technology stack (full width) */}
        <div className="rv border border-bd rounded-2xl bg-bg/60 p-5 md:p-8">
          <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-5 md:mb-6 block">
            Technology stack
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
            {techStack.map((group) => (
              <div key={group.label} className="min-w-0">
                <div className="font-mono-c text-[10px] tracking-[0.14em] text-mt2 uppercase mb-3">
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
        </div>
      </div>
    </div>
  )
}
