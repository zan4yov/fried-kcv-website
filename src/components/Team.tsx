const members = [
  {
    initial: 'F', name: 'Ferel', role: 'ML Engineer', accent: '#b99a2e',
    tasks: [
      'EfficientNet-B4 training, evaluation, and ONNX export',
      'Mel-spectrogram + librosa DSP pipeline aligned with Medium FR-AUD specs',
      'Model evaluation, benchmarking & hyperparameter tuning',
      'Dataset curation, augmentation & class balancing',
      'Research documentation & Medium article writeup',
    ],
    quote: '"Building the brain that tells real from fake, one epoch at a time."',
    quoteBorder: 'rgba(185,154,46,0.28)',
  },
  {
    initial: 'S', name: 'Safa', role: 'Backend Engineer', accent: '#A78BFA',
    tasks: [
      'Developed a Grad-CAM XAI pipeline including gradient computation, saliency map generation, and Mel-frequency band attribution',
      'Integrated Qwen 2.5 for the NLP explanation pipeline with a 3-layer fallback system (API, Gemma, rule-based)',
      'Designed and implemented the UI using Gradio, including component architecture, async streaming, and UX flow',
      'Built an end-to-end pipeline connecting DSP, CV, XAI, and NLP into a unified system',
      'Deployed and maintained the application on Hugging Face Spaces using ONNX Runtime, including secrets management and live debugging',
    ],
    quote: '"Every millisecond counts. Good backend is invisible until it fails."',
    quoteBorder: 'rgba(167,139,250,0.28)',
  },
  {
    initial: 'R', name: 'Razan', role: 'Frontend & QA', accent: '#34D399',
    tasks: [
      'React dashboard & live audio demo interface',
      'API integration & frontend state management',
      'Spectrogram + confidence visualization components',
      'End-to-end testing, QA pipeline & coverage',
      'Docker deployment, CI setup & documentation',
    ],
    quote: '"Making complex security feel effortless to whoever uses it."',
    quoteBorder: 'rgba(52,211,153,0.28)',
  },
]

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
            <div
              className="w-[42px] h-[42px] rounded-[9px] flex items-center justify-center font-serif-i text-[19px] text-black"
              style={{ background: m.accent }}
            >
              {m.initial}
            </div>

            <div>
              <div className="font-serif-i text-[1.85rem] text-white leading-none tracking-[-0.5px] mb-[3px]">
                {m.name}
              </div>
              <div className="font-mono-c text-[10px] tracking-[0.1em] uppercase" style={{ color: m.accent }}>
                {m.role}
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

            <div
              className="text-[13px] text-white/[0.28] italic leading-[1.6] pl-3 border-l-2"
              style={{ borderLeftColor: m.quoteBorder }}
            >
              {m.quote}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
