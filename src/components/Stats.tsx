const stats = [
  { value: '94.7%',  label: 'Detection accuracy' },
  { value: '<300ms', label: 'End-to-end latency'  },
  { value: '12K+',   label: 'Training samples'    },
  { value: '5.8%',   label: 'Equal error rate'    },
]

export default function Stats() {
  return (
    <div className="bg-surf border-t border-b border-bd py-[46px] px-8 rv">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-page mx-auto">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-[22px] px-[18px] text-center ${
              i < stats.length - 1 ? 'max-md:border-b max-md:border-bd md:border-r md:border-bd' : ''
            } ${i % 2 === 0 ? 'max-md:border-r max-md:border-bd' : ''}`}
          >
            <div className="font-serif-i text-[2.9rem] leading-none text-y mb-1.5 tracking-[-2px]">
              {s.value}
            </div>
            <div className="text-[12px] text-mt font-light">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
