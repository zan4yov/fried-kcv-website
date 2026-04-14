const goals = [
  { n: '01', title: 'Spectrogram-first spoof detection',    desc: 'Treat each clip as a visual task: 128-bin Mel → 224² RGB-style tensor → EfficientNet-B4 with a two-logit head, tuned to the FoR for-2sec split with an EER-aligned threshold at 0.93.' },
  { n: '02', title: 'Show your work with GradCAM',        desc: 'Surface class-discriminative regions on the Mel image, Jet overlay at 50% opacity, and four-band frequency attribution so users see why the model hesitated or flagged spoof.' },
  { n: '03', title: 'Ship a CPU-friendly demo',            desc: 'Package the full four-stage stack inside Gradio on Hugging Face Spaces with ONNX Runtime so classmates can upload a file without GPUs and still get a verdict under ~15 seconds.' },
  { n: '04', title: 'Narrate every run',                   desc: 'Pipe logits, confidence, and band weights into Qwen 2.5-7B-Instruct (async HF API), then Gemma 2B, then a deterministic fallback so the explanation column never comes back empty.' },
  { n: '05', title: 'Stay honest on limitations',           desc: 'Document codec quirks, HF rate limits, and the Liar’s Dividend findings from our blind listening study so the UI reads as research-grade, not magic.' },
]

const quizFigures = [
  {
    src: '/figures/figure0_age_distribution.jpeg',
    label: 'Respondent age',
    alt: 'Age distribution of listening quiz respondents (57 responses)',
    caption: 'Age distribution (57 responses), majority over 40',
  },
  {
    src: '/figures/figure0_audio01_results.jpeg',
    label: 'AUDIO01',
    alt: 'Quiz results for AUDIO01: 82.5% human vs 17.5% deepfake',
    caption: 'AUDIO01 (AI clip): 82.5% labeled as human voice',
  },
  {
    src: '/figures/figure0_audio02_results.jpeg',
    label: 'AUDIO02',
    alt: 'Quiz results for AUDIO02: 80.7% human vs 19.3% deepfake',
    caption: 'AUDIO02 (real clip): 19.3% still labeled as deepfake',
  },
  {
    src: '/figures/figure0_audio03_results.jpeg',
    label: 'AUDIO03',
    alt: 'Quiz results for AUDIO03: 87.7% human vs 12.3% deepfake',
    caption: 'AUDIO03 (AI clip): 87.7% labeled as human voice',
  },
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
        <p className="mt-3 text-[15px] text-white/40 font-light max-w-[720px] leading-[1.75]">
          A video appears in a family WhatsApp group, showing a disaster, crisis, or shocking event. A calm voice explains what is happening. It sounds convincing. It sounds real. Within minutes, the message spreads.
        </p>
      </div>

      {/* Opening narrative, then quiz charts, then interpretation + Fake67 */}
      <div className="max-w-[720px] mb-8">
        <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
          In today’s digital era, misinformation no longer relies only on text or manipulated images. With AI-generated voices, fake content becomes far more persuasive, especially for older generations who often perceive voice notes as a personal “digital handshake.”
        </p>
      </div>

      {/* Quiz results (between narrative ¶1 and ¶2) */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase">
            Quiz results
          </span>
          <span className="text-[12px] text-white/35 font-light">
            Click any card to open the full-size chart
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {quizFigures.map((img) => (
            <a
              key={img.label}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              className="block border border-bd rounded-2xl overflow-hidden bg-surf hover:border-[rgba(185,154,46,0.22)] transition-colors"
              title="Open full image"
            >
              <div className="relative p-3 md:p-4 bg-[#0d0d0d]">
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

      <div className="max-w-[720px] space-y-[15px] mb-10">
        <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
          We captured this with a Lebaran-season blind listening Simple Quiz (57 responses), shown in the charts. The respondent pool skewed older: <strong className="text-white/[0.72] font-medium">87.7%</strong> were over 40. On two AI-generated clips, most listeners still chose “human voice”: <strong className="text-white/[0.72] font-medium">AUDIO01</strong> split <strong className="text-white/[0.72] font-medium">82.5%</strong> vs <strong className="text-white/[0.72] font-medium">17.5%</strong>, and <strong className="text-white/[0.72] font-medium">AUDIO03</strong> split <strong className="text-white/[0.72] font-medium">87.7%</strong> vs <strong className="text-white/[0.72] font-medium">12.3%</strong> (human vs deepfake). On the genuine clip, <strong className="text-white/[0.72] font-medium">AUDIO02</strong>, the chart reads <strong className="text-white/[0.72] font-medium">80.7%</strong> vs <strong className="text-white/[0.72] font-medium">19.3%</strong>, so nearly one in five listeners suspected real speech of being synthetic.
        </p>
        <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
          This reversal reflects what is known as the Liar’s Dividend: deepfakes do not only make false information believable, they also make real information appear suspicious. As a result, detecting synthetic audio becomes increasingly important.
        </p>
        <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
          To address this challenge, Fake67 transforms raw audio into both a prediction and a human-readable explanation. The system first converts waveform audio into a spectrogram using Digital Signal Processing (DSP). The spectrogram is then analyzed by EfficientNet-B4 to classify the audio as bonafide or spoof. GradCAM highlights the most influential regions of the spectrogram, and finally an LLM, Qwen 2.5, generates a clear explanation of the evidence in plain language.
        </p>
      </div>

      {/* Figure 1, pipeline overview (replaces prior SVG) */}
      <div className="border border-bd rounded-xl overflow-hidden bg-surf rv">
        <div className="relative p-3 md:p-5 bg-[#f5f5f5]">
          <img
            src="/figures/figure1_pipeline_overview.jpeg"
            alt="Figure 1, Fake67 pipeline flowchart: WAV/FLAC input, Stage 1 Audio DSP, parallel Stage 2 CV inference and Stage 3 GradCAM XAI, Stage 4 NLP explanation with Qwen and fallbacks, Gradio output on Hugging Face Spaces"
            className="w-full h-auto block rounded-lg border border-bd bg-white"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
          Figure 1, end-to-end Fake67 pipeline from audio input through DSP, CV, XAI, and NLP to Gradio on Hugging Face Spaces
        </p>
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
