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
  { tag: 'Data · Week 2',           title: 'Severely imbalanced training data',  desc: 'Real audio samples were significantly outnumbered by synthetic ones in public datasets. SMOTE oversampling and custom augmentation fixed class imbalance — but we had to re-evaluate our entire baseline when early accuracy turned out to be misleadingly inflated.' },
  { tag: 'Performance · Week 4',    title: 'The 300ms latency wall',             desc: 'Running the deepfake detector and biometric verifier simultaneously in real time seemed impossible. We achieved it through INT8 model quantization, async pipeline design, and two weeks of profiling every microsecond of overhead.' },
  { tag: 'Generalization · Week 5', title: 'Model overfitting to seen speakers', desc: 'Early models scored 97% in training but collapsed on unseen speakers. We rebuilt feature engineering to focus on synthesis artifacts in the spectral domain rather than speaker-specific acoustic fingerprints. Cost us a week, but made the model actually useful.' },
  { tag: 'Infrastructure · Week 6', title: 'Cross-codec audio preprocessing',   desc: 'Audio compressed via different codecs (MP3, AAC, Opus) introduced noise our model mistook for synthesis artifacts. A preprocessing normalization layer solved it — after two frustrating weeks of chasing ghost false positives.', last: true },
]

const stories: Story[] = [
  { icon: <IconMoon size={14} />,    title: 'The 3 AM breakthrough',      desc: 'Ferel accidentally set the learning rate 10× too high during a late-night training run. The model converged faster and cleaner than every previous attempt. That "bug" became our final training configuration — and a lesson in why you shouldn\'t always trust your defaults.' },
  { icon: <IconMasks size={14} />,   title: 'When we fooled ourselves',   desc: 'During testing, we fed our own voices into the detector. The model flagged Safa\'s voice as synthetic. Her microphone\'s noise gate produced compression artifacts that matched our synthetic training data almost exactly. A humbling debugging session followed.' },
  { icon: <IconCoffee size={14} />,  title: 'The coffee shop stress test', desc: 'Our first live demo was held in a noisy café to stress-test ambient noise handling. Everything worked — until an espresso machine screamed at exactly the wrong frequency and triggered a false authentication reject. We added noise-aware thresholding that afternoon.' },
  { icon: <IconRefresh size={14} />, title: 'Three rewrites in two weeks', desc: 'The authentication pipeline was rewritten three times. Each felt like failure at the time. The third version was 10× cleaner, genuinely scalable, and shipped exactly on schedule. Sometimes you have to build the wrong thing twice to know what the right thing is.', last: true },
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
          <div className="font-mono-c text-[10px] tracking-[0.18em] uppercase mb-[18px] flex items-center gap-2.5" style={{ color: 'rgba(240,224,64,0.55)' }}>
            <IconWarning size={13} style={{ flexShrink: 0 }} />
            Obstacles we faced
            <span className="h-px flex-1 bg-bd" />
          </div>
          {obstacles.map((item) => (
            <div key={item.tag} className="group">
              <div className={`border-l-2 border-bd pl-4 relative cursor-default transition-[border-color] hover:border-[rgba(240,224,64,0.18)] ${item.last ? '' : 'pb-6'}`}>
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
              <div className={`border-l-2 border-bd pl-4 relative cursor-default transition-[border-color] hover:border-[rgba(240,224,64,0.18)] ${item.last ? '' : 'pb-6'}`}>
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
