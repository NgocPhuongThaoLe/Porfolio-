import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}