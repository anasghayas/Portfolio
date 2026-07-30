import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="achievements" className="border-b border-[var(--border)]">
      <SectionHeading number="04" title="Achievements" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 max-w-4xl"
      >
        {achievements.map((item, index) => (
          <motion.div 
            variants={itemVariants}
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border border-[var(--border)] bg-[#fcfaf7]/50 backdrop-blur-sm hover:shadow-[var(--shadow-sm)] transition-shadow duration-200"
          >
            <div className="space-y-1">
              <div className="font-mono text-sm font-bold text-[var(--text-primary)] flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[var(--text-muted)] text-[10px] select-none">LOG_0{index + 1}:</span>
                {item.title}
              </div>
              {item.detail && (
                <div className="font-sans text-xs text-[var(--text-secondary)] pl-0 sm:pl-10">
                  {item.detail}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 pl-0 sm:pl-10 font-mono text-xs shrink-0 self-start sm:self-center">
              <span className="text-[var(--text-muted)] text-[10px] sm:text-xs">{item.date}</span>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[var(--accent)] font-bold hover:underline"
                >
                  [ VERIFY ]
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
