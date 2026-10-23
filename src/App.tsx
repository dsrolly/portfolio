import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
