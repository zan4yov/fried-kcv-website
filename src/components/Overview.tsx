import { IconMic } from './icons/IconMic'

const goals = [
  { n: '01', title: 'Detect synthetic speech accurately',   desc: 'Classify AI-generated audio via MFCC + Mel-spectrogram features and a CNN+LSTM model, targeting EER below 6%.' },
  { n: '02', title: 'Multi-modal biometric authentication', desc: 'Combine voice, facial, and behavioral biometric patterns for robust, hard-to-spoof identity verification.' },
  { n: '03', title: 'Real-time pipeline (<300ms)',          desc: 'Process audio end-to-end from raw input to grant/deny decision within 300ms for live authentication.' },
  { n: '04', title: 'Speaker-independent generalization',   desc: 'Detect deepfakes regardless of speaker identity by targeting synthesis artifacts, not voice-specific fingerprints.' },
  { n: '05', title: 'Noise-robust field performance',       desc: 'Maintain reliability under real-world acoustic conditions using RawBoost-inspired noise augmentation during training.' },
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
        <p className="mt-3 text-[15px] text-white/40 font-light max-w-[510px] leading-[1.75]">
          As AI voice synthesis becomes indistinguishable from real speech, authentication systems built on voice biometrics face an existential threat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[52px] items-start">
        <div>
          <div className="space-y-[15px]">
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              Generative AI tools can now clone a voice with <strong className="text-white/[0.72] font-medium">startling accuracy from as little as 3 seconds of audio</strong>. This audio can be scraped from a LinkedIn video, a webinar recording, or a voicemail — making spoofing attacks trivially accessible to bad actors.
            </p>
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              Modern voice cloning architectures — including flow-matching and hierarchical neural codecs — have moved far beyond early robotic TTS. Today's synthetic voices replicate cadence, intonation, and even micro-pauses of human speech, bypassing both human ears and legacy speaker verification.
            </p>
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              We built a <strong className="text-white/[0.72] font-medium">dual-layer defense</strong>: a deepfake speech detector that classifies audio as genuine or synthetic, combined with a biometric authentication pipeline that verifies real user identity — without adding perceptible latency to the experience.
            </p>
            <p className="text-[15px] text-white/[0.48] font-light leading-[1.85]">
              The core insight: synthetic voices leave <strong className="text-white/[0.72] font-medium">acoustic artifacts invisible to the human ear</strong> but statistically consistent across generation models — detectable through spectral analysis and deep neural networks trained on both real and AI-generated speech.
            </p>
          </div>

          {/* Figure 1 */}
          <div className="border border-bd rounded-xl overflow-hidden bg-surf mt-6 rv">
            <div
              className="aspect-video flex items-center justify-center flex-col gap-2 p-6 relative min-h-[190px]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg,rgba(240,224,64,.02) 0,rgba(240,224,64,.02) 1px,transparent 1px,transparent 12px),repeating-linear-gradient(-45deg,rgba(240,224,64,.02) 0,rgba(240,224,64,.02) 1px,transparent 1px,transparent 12px)',
              }}
            >
              <span className="absolute top-3 left-3 font-mono-c text-[9px] bg-[rgba(240,224,64,0.07)] border border-[rgba(240,224,64,0.18)] text-y px-2.5 py-0.5 rounded tracking-widest uppercase">
                Fig. 1
              </span>
              <IconMic size={28} />
              <p className="font-mono-c text-[10px] tracking-widest text-mt2 text-center relative z-10 uppercase">
                System Overview Diagram
                <small className="block mt-0.5 text-[9px] text-[#2e2e2e]">Replace with your image from the Medium article</small>
              </p>
            </div>
            <p className="text-xs text-mt px-4 py-2.5 border-t border-bd italic text-center">
              Figure 1 — High-level overview of the dual-layer detection &amp; authentication pipeline
            </p>
          </div>
        </div>

        <div>
          <span className="font-mono-c text-[10px] tracking-[0.18em] text-y uppercase mb-[14px] block">
            Project Goals
          </span>
          <div className="flex flex-col gap-[3px]">
            {goals.map((g) => (
              <div
                key={g.n}
                className="border border-bd rounded-[10px] p-4 flex gap-[14px] transition-all duration-200 hover:border-[rgba(240,224,64,0.18)] hover:bg-[rgba(240,224,64,0.07)] cursor-default"
              >
                <span className="font-mono-c text-[11px] text-y min-w-[18px] pt-0.5 flex-shrink-0">{g.n}</span>
                <div>
                  <div className="text-[14px] font-medium text-white mb-1">{g.title}</div>
                  <div className="text-[13px] text-mt font-light leading-[1.6]">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
