import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="border border-[var(--border)] bg-[#fcfaf7]/50 backdrop-blur-sm p-6 hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start w-full"
      >
        {/* Image Area / Placeholder */}
        <div 
          onClick={() => project.image && setIsModalOpen(true)}
          className={`w-full md:w-[280px] shrink-0 aspect-[16/9] bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center overflow-hidden relative group shadow-[var(--shadow-sm)] ${project.image ? 'cursor-zoom-in' : 'select-none'}`}
        >
          {project.image ? (
            <>
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-[10px] bg-opacity-40">
                <span className="bg-black/60 px-2 py-1 border border-white/20 uppercase tracking-wider">CLICK TO EXPAND</span>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)] font-mono text-xs text-center px-4">
              <span>[ {project.name.toUpperCase()} ]</span>
              <span className="mt-2 text-[9px] opacity-70">SCREENSHOTS_COMING_SOON</span>
            </div>
          )}
        </div>

      {/* Info Area */}
      <div className="flex-1 flex flex-col justify-between gap-6">
        <div className="space-y-3">
          {/* Header metadata */}
          <div className="flex justify-between items-center font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            <span>{project.category}</span>
            <span>{project.date}</span>
          </div>

          <h3 className="font-mono text-base md:text-lg font-bold text-[var(--text-primary)]">
            {project.name} — <span className="text-[var(--text-secondary)] font-normal text-sm md:text-base">{project.subtitle}</span>
          </h3>

          <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer info: Tech stack & Links */}
        <div className="space-y-4 pt-2">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="font-mono text-[9px] uppercase border border-[var(--border)] bg-[#fcfaf7] px-2 py-0.5 text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-6 font-mono text-xs font-bold pt-3 border-t border-[var(--border)] border-dashed">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                [ GITHUB ]
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                [ LIVE DEMO ]
              </a>
            )}
          </div>
        </div>
      </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#fcfaf7] border-2 border-[var(--text-primary)] p-2 shadow-2xl flex flex-col cursor-default"
            >
              {/* Close button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-10 right-0 font-mono text-xs uppercase text-white hover:text-[var(--accent)] tracking-widest flex items-center gap-1 cursor-pointer bg-transparent border-none"
              >
                [ CLOSE ]
              </button>
              
              <div className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto" 
                />
              </div>
              
              {/* Modal Caption */}
              <div className="p-3 font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider flex justify-between items-center border-t border-[var(--border)] mt-2">
                <span>{project.name} — {project.subtitle}</span>
                <span>ESC / CLICK OUTSIDE TO CLOSE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
