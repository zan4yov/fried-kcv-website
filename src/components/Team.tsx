import { useState } from 'react'

type Member = {
  initial: string
  name: string
  role: string
  accent: string
  tasks: string[]
  /** File name without extension; place image at `public/team/{photoSlug}.jpg` */
  photoSlug: string
}

const members: Member[] = [
  {
    initial: 'F',
    name: 'Ferel',
    role: 'ML Engineer',
    accent: '#b99a2e',
    photoSlug: 'ferel',
    tasks: [
      'EfficientNet-B4 training, evaluation, and ONNX export',
      'Mel-spectrogram + librosa DSP pipeline aligned with Medium FR-AUD specs',
      'Model evaluation, benchmarking & hyperparameter tuning',
      'Dataset curation, augmentation & class balancing',
      'Research documentation & Medium article writeup',
    ],
  },
  {
    initial: 'S',
    name: 'Safa',
    role: 'Backend Engineer',
    accent: '#A78BFA',
    photoSlug: 'safa',
    tasks: [
      'Built a Grad-CAM XAI pipeline for saliency maps and Mel-frequency band attribution',
      'Integrated Qwen 2.5 for NLP explanations with a fallback system',
      'Developed the UI using Gradio with async interaction and clear UX flow',
      'Connected DSP, CV, XAI, and NLP into a single end-to-end pipeline',
      'Deployed the system on Hugging Face Spaces using ONNX Runtime',
    ],
  },
  {
    initial: 'R',
    name: 'Razan',
    role: 'Frontend & QA',
    accent: '#34D399',
    photoSlug: 'razan',
    tasks: [
      'React dashboard & live audio demo interface',
      'API integration & frontend state management',
      'Spectrogram + confidence visualization components',
      'End-to-end testing, QA pipeline & coverage',
      'Docker deployment, CI setup & documentation',
    ],
  },
]

function MemberPhoto({ slug, name, accent }: { slug: string; name: string; accent: string }) {
  const src = `/team/${slug}.jpg`
  const [showPhoto, setShowPhoto] = useState(true)

  return (
    <div className="relative w-full aspect-[4/5] max-h-[240px] rounded-xl overflow-hidden border border-bd bg-[rgba(255,255,255,0.02)]">
      {showPhoto ? (
        <img
          src={src}
          alt={`${name}, team portrait`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={() => setShowPhoto(false)}
        />
      ) : null}
      {!showPhoto ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center font-serif-i text-xl text-black/80"
            style={{ background: accent }}
          >
            {name.slice(0, 1)}
          </div>
          <span className="font-mono-c text-[9px] tracking-[0.18em] uppercase text-mt2">Photo placeholder</span>
          <span className="text-[10px] text-white/30 leading-snug">
            Add <span className="font-mono-c text-white/45">public/team/{slug}.jpg</span>
          </span>
        </div>
      ) : null}
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="rv px-8 py-20 max-w-page mx-auto">
      <div className="mb-[46px]">
        <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-3 block">
          The Team
        </span>
        <h2 className="font-serif-i text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight leading-[0.93] text-white">
          Three minds.<br />
          <em className="not-italic text-white/20 font-normal">One system.</em>
        </h2>
        <p className="mt-3 text-[15px] text-white/40 font-light max-w-[510px] leading-[1.75]">
          Each member owned a distinct domain. Together they shipped a complete, production-grade AI security pipeline.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {members.map((m) => (
          <div
            key={m.name}
            className="border border-bd rounded-xl px-[22px] py-6 flex flex-col gap-[18px] transition-all duration-200 hover:border-[rgba(185,154,46,0.18)] hover:bg-[rgba(185,154,46,0.07)]"
          >
            <MemberPhoto slug={m.photoSlug} name={m.name} accent={m.accent} />

            <div className="flex items-start gap-3">
              <div
                className="w-[42px] h-[42px] rounded-[9px] flex items-center justify-center font-serif-i text-[19px] text-black flex-shrink-0"
                style={{ background: m.accent }}
              >
                {m.initial}
              </div>
              <div className="min-w-0">
                <div className="font-serif-i text-[1.85rem] text-white leading-none tracking-[-0.5px] mb-[3px]">
                  {m.name}
                </div>
                <div className="font-mono-c text-[10px] tracking-[0.1em] uppercase" style={{ color: m.accent }}>
                  {m.role}
                </div>
              </div>
            </div>

            <div className="h-px bg-bd" />

            <ul className="list-none flex flex-col gap-1.5">
              {m.tasks.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13px] text-mt font-light leading-[1.5]">
                  <div className="w-1 h-1 rounded-[1px] flex-shrink-0 mt-[9px]" style={{ background: m.accent }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
