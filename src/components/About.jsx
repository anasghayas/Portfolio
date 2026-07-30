import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="border-b border-[var(--border)]">
      <SectionHeading number="01" title="About" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
      >
        {/* Bio Text */}
        <div className="md:col-span-2 space-y-6 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
          <p>{personalInfo.about}</p>
        </div>

        {/* Info Card / Dossier Panel */}
        <div className="border border-[var(--border)] p-6 bg-[#fcfaf7]/50 backdrop-blur-sm font-mono text-xs space-y-4 shadow-[var(--shadow-sm)]">
          <div className="font-bold text-[var(--text-primary)] border-b border-[var(--border)] pb-2 uppercase tracking-wider">
            SYSTEM_METADATA.LOG
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">LOCATION:</span>
              <span className="text-[var(--text-primary)] font-bold">{personalInfo.location}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">EMAIL:</span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-[var(--accent)] hover:underline font-bold"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">PHONE:</span>
              <span className="text-[var(--text-primary)] font-bold">{personalInfo.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">DISCIPLINE:</span>
              <span className="text-[var(--text-primary)] font-bold">MATH & COMPUTING</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
