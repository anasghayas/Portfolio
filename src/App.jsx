import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1100px] mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        {/* Dummy sections so scroll works */}
        <section id="contact" className="h-screen flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">06. Contact (Coming Soon)</section>
      </main>
    </>
  )
}

export default App
