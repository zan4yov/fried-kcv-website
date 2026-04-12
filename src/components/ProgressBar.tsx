import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-y z-[999]"
      style={{ width: `${width}%`, transition: 'width 80ms' }}
    />
  )
}
