import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Temporarily keeping the hero text here to see it below navbar */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-primary)',
          fontSize: '1.5rem',
        }}>
          ANAS GHAYAS_<span className="cursor-blink text-[var(--accent)]">|</span>
        </div>

        {/* Dummy sections so scroll works */}
        <section id="about" className="h-screen bg-[var(--bg-card)] flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">01. About (Coming Soon)</section>
        <section id="skills" className="h-screen flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">02. Skills (Coming Soon)</section>
        <section id="projects" className="h-screen bg-[var(--bg-card)] flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">03. Projects (Coming Soon)</section>
        <section id="achievements" className="h-screen flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">04. Achievements (Coming Soon)</section>
        <section id="experience" className="h-screen bg-[var(--bg-card)] flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">05. Experience (Coming Soon)</section>
        <section id="contact" className="h-screen flex items-center justify-center font-mono text-2xl text-[var(--text-primary)]">06. Contact (Coming Soon)</section>
      </main>
    </>
  )
}

export default App
