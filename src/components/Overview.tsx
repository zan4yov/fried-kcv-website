const goals = [
  { n: '01', title: 'Spectrogram-first spoof detection',    desc: 'Treat each clip as a visual task: 128-bin Mel → 224² RGB-style tensor → EfficientNet-B4 with a two-logit head, tuned to the FoR for-2sec split with an EER-aligned threshold at 0.93.' },
  { n: '02', title: 'Show your work with Grad-CAM',        desc: 'Surface class-discriminative regions on the Mel image, Jet overlay at 50% opacity, and four-band frequency attribution so users see why the model hesitated or flagged spoof.' },
  { n: '03', title: 'Ship a CPU-friendly demo',            desc: 'Package the full four-stage stack inside Gradio on Hugging Face Spaces with ONNX Runtime so classmates can upload a file without GPUs and still get a verdict under ~15 seconds.' },
  { n: '04', title: 'Narrate every run',                   desc: 'Pipe logits, confidence, and band weights into Qwen 2.5-7B-Instruct (async HF API), then Gemma 2B, then a deterministic fallback so the explanation column never comes back empty.' },
  { n: '05', title: 'Stay honest on limitations',           desc: 'Document codec quirks, HF rate limits, and the Liar’s Dividend findings from our blind listening study so the UI reads as research-grade, not magic.' },
]

export default function Overview() {
  return (
    <section id="overview" className="rv px-8 py-20 max-w-page mx-auto">
      <div className="mb-[46px]">
        <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-3 block">
          Background &amp; Goals
        </span>
        <h2 className="font-serif-i text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight leading-[0.93] text-white">
          Why this project<br />
          <em className="not-italic text-white/20 font-normal">matters.</em>
        </h2>
        <p className="mt-3 text-[15px] text-white/40 font-light max-w-[680px] leading-[1.75]">
          A video appears in a family WhatsApp group, showing a disaster, crisis, or shocking event. A calm voice explains what is happening. It sounds convincing. It sounds real. Within minutes, the message spreads.
        </p>
      </div>

      {/* Why this matters */}
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-[36px] lg:gap-[52px] items-start">
        <div className="min-w-0">
          <div className="space-y-[15px]">
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              In today’s digital era, misinformation no longer relies only on text or manipulated images. With AI-generated voices, fake content becomes far more persuasive, especially for older generations who often perceive voice notes as a personal “digital handshake.”
            </p>
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              We observed this phenomenon through a Lebaran-season blind listening Simple Quiz involving 57 respondents, where 89.3% were Boomers or older adults. When presented with two deepfake audio clips, nearly 90% of participants believed they were real. Surprisingly, when listening to a genuine human recording, around 20% suspected it was AI-generated.
            </p>
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              This reversal reflects what is known as the Liar’s Dividend: deepfakes do not only make false information believable, they also make real information appear suspicious. As a result, detecting synthetic audio becomes increasingly important.
            </p>
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              To address this challenge, Fake67 transforms raw audio into both a prediction and a human-readable explanation. The system first converts waveform audio into a spectrogram using Digital Signal Processing (DSP). The spectrogram is then analyzed by EfficientNet-B4 to classify the audio as bonafide or spoof. Grad-CAM highlights the most influential regions of the spectrogram, and finally an LLM, Qwen 2.5, generates a clear explanation of the evidence in plain language.
            </p>
          </div>

          {/* Figure 1 */}
          <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-6 rv">
            <div className="relative p-3 md:p-4 bg-[#0d0d0d]">
              <span className="absolute top-4 left-4 z-10 font-mono-c text-[9px] bg-[rgba(185,154,46,0.07)] border border-[rgba(185,154,46,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
                Fig. 1
              </span>
              <img
                src="/figures/figure1_system_overview.svg"
                alt="Figure 1, Fake67 four-stage detection pipeline: WAV/FLAC through Audio DSP, CV inference, Grad-CAM, and NLP explanation"
                className="w-full h-auto block rounded-lg"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
              Figure 1, Fake67 four-stage system overview (audio DSP → EfficientNet-B4 → Grad-CAM → NLP)
            </p>
          </div>
        </div>

        {/* Quiz images, separated cards (bigger + clearer) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase">
              Quiz results
            </span>
            <span className="text-[12px] text-white/35 font-light">
              Click to open full-size
            </span>
          </div>

          {[
            {
              src: '/figures/figure0_age_distribution.jpeg',
              label: 'Respondent age',
              alt: 'Age distribution of listening quiz respondents (57 responses)',
              caption: 'Age distribution (57 responses)',
            },
            {
              src: '/figures/figure0_audio01_results.jpeg',
              label: 'AUDIO01',
              alt: 'Quiz results for AUDIO01: respondents selecting Human vs Deepfake voice',
              caption: 'AUDIO01, perceived as Human vs Deepfake',
            },
            {
              src: '/figures/figure0_audio02_results.jpeg',
              label: 'AUDIO02',
              alt: 'Quiz results for AUDIO02: respondents selecting Human vs Deepfake voice',
              caption: 'AUDIO02, perceived as Human vs Deepfake',
            },
            {
              src: '/figures/figure0_audio03_results.jpeg',
              label: 'AUDIO03',
              alt: 'Quiz results for AUDIO03: respondents selecting Human vs Deepfake voice',
              caption: 'AUDIO03, perceived as Human vs Deepfake',
            },
          ].map((img) => (
            <a
              key={img.label}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              className="block border border-bd rounded-2xl overflow-hidden bg-surf hover:border-[rgba(185,154,46,0.22)] transition-colors"
              title="Open full image"
            >
              <div className="relative p-3 md:p-4 bg-[#0d0d0d]">
                <span className="absolute top-3 left-3 z-10 font-mono-c text-[9px] tracking-widest uppercase bg-black/55 border border-white/10 text-white/80 px-2 py-0.5 rounded">
                  {img.label}
                </span>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block rounded-xl border border-bd bg-[#0a0a0a]"
                  loading="lazy"
                />
              </div>
              <div className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
                {img.caption}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Separate Project Goals section */}
      <div className="mt-16 pt-10 border-t border-bd">
        <div className="mb-[18px]">
          <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-2 block">
            Project Goals
          </span>
          <p className="text-[14px] text-white/40 font-light leading-[1.8] max-w-[680px]">
            What we set out to build, and the constraints we refused to compromise on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {goals.map((g) => (
            <div
              key={g.n}
              className="border border-bd rounded-[12px] p-4 flex gap-[14px] transition-all duration-200 hover:border-[rgba(185,154,46,0.18)] hover:bg-[rgba(185,154,46,0.07)] cursor-default"
            >
              <span className="font-mono-c text-[11px] text-y min-w-[18px] pt-0.5 flex-shrink-0">{g.n}</span>
              <div>
                <div className="text-[14px] font-medium text-white mb-1">{g.title}</div>
                <div className="text-[13px] text-mt font-light leading-[1.65]">{g.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
