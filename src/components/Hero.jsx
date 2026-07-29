import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.substring(firstName.length).trim();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8"
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-8">
          
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="font-mono text-sm uppercase text-[var(--text-muted)] tracking-wider">Status:</span>
            <span className="font-mono text-[10px] md:text-xs uppercase px-3 py-1 border border-[var(--text-primary)] rounded-[50%] inline-block transform -rotate-2">
              {personalInfo.status}
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold uppercase tracking-tighter leading-[0.9] text-[var(--text-primary)] mb-6">
              {firstName} <br/>
              {lastName}<span className="text-[var(--accent)]">_</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--text-secondary)] border-l-2 border-[var(--border)] pl-4 max-w-[400px]">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pt-4 w-full">
            <div className="flex flex-wrap gap-4 font-mono text-xs md:text-sm font-bold tracking-wider">
              <a href={`mailto:${personalInfo.email}`} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                [ EMAIL ]
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                [ GITHUB ]
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                [ LINKEDIN ]
              </a>
              <a href={personalInfo.socials.codeforces} target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                [ CODEFORCES ]
              </a>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                [ LEETCODE ]
              </a>
            </div>
            <div className="hidden md:block flex-1 border-t border-dashed border-[var(--border)]"></div>
          </motion.div>

        </div>

        {/* Photo Area */}
        <motion.div variants={itemVariants} className="relative w-[260px] md:w-[320px] shrink-0 mt-8 md:mt-0">
          <div className="absolute -top-8 right-0 font-mono text-[10px] md:text-xs uppercase text-[var(--text-muted)] tracking-widest flex items-center gap-1">
            <MapPin size={14} />
            {personalInfo.location}
          </div>
          
          <div className="bg-[#fcfaf7] border-2 border-[var(--text-primary)] p-3 pb-12 shadow-[var(--shadow-md)] transform rotate-3 hover:rotate-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300">
            <div className="w-full aspect-[4/5] bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center overflow-hidden relative group">
              <img 
                src="/profile.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover z-10" 
                onError={(e) => {
                  e.target.style.opacity = '0';
                  e.target.style.position = 'absolute';
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)] font-mono text-xs z-0 text-center px-4">
                <span>[ IMAGE PLACEHOLDER ]</span>
                <span className="mt-2 text-[10px] opacity-70">Add your photo to<br/>public/profile.jpg</span>
              </div>
            </div>
            {/* Signature / Frame text */}
            <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] opacity-50">
              AUTHORIZED SIGNATURE
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
