import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="border border-[var(--border)] bg-[#fcfaf7]/50 backdrop-blur-sm p-6 hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-8 items-stretch"
    >
      {/* Image Area / Placeholder */}
      <div className="w-full md:w-[240px] shrink-0 aspect-[4/3] md:aspect-square bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center overflow-hidden relative group">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)] font-mono text-xs text-center px-4 select-none">
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
  );
}
