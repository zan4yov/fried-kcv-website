import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import ProgressBar    from './components/ProgressBar'
import Nav            from './components/Nav'
import Hero           from './components/Hero'
import Overview       from './components/Overview'
import Architecture   from './components/Architecture'
import Team           from './components/Team'
import Stats          from './components/Stats'
import Journey        from './components/Journey'
import Facts          from './components/Facts'
import Cta            from './components/Cta'
import Footer         from './components/Footer'

export default function App() {
  useScrollReveal()

  useEffect(() => {
    const links = document.querySelectorAll<HTMLElement>('.na[data-s]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle('on', l.dataset.s === e.target.id))
        }
      }),
      { threshold: 0.28 }
    )
    ;['overview','architecture','team','journey','facts'].forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const Divider = () => <div className="h-px bg-bd max-w-page mx-auto"/>

  return (
    <>
      <ProgressBar/>
      <Nav/>
      <main>
        <Hero/>
        <Divider/>
        <Overview/>
        <Divider/>
        <Architecture/>
        <Divider/>
        <Team/>
        <Stats/>
        <Journey/>
        <Divider/>
        <Facts/>
        <Cta/>
      </main>
      <Footer/>
    </>
  )
}
