import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const currentYear = new Date().getFullYear();
  
  // Format current date for a dossier stamp: e.g., "JUL 30, 2026"
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase();

  return (
    <section id="contact" className="py-20 flex flex-col justify-between min-h-[70vh]">
      <div>
        <SectionHeading number="06" title="Contact" />
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12 max-w-3xl mt-10"
        >
          <div className="space-y-4">
            <h3 className="font-mono text-base font-bold text-[var(--text-primary)] uppercase tracking-wider">
              // COLLABORATION_PROPOSAL
            </h3>
            <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed">
              I am currently open to internships and junior developer opportunities! Whether you want to discuss full-stack engineering, show off a cool competitive programming challenge, or just talk shop — feel free to drop me an email.
            </p>
          </div>

          {/* Large typographic Email link */}
          <div className="py-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-lg md:text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] bg-[#fcfaf7]/50 backdrop-blur-sm px-6 py-4 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] inline-block tracking-wider"
            >
              [ {personalInfo.email.toUpperCase()} ]
            </a>
          </div>

          {/* Socials & Resume CTA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-[var(--border)] border-dashed">
            {/* Social links row */}
            <div className="flex flex-wrap gap-4 font-mono text-xs font-bold tracking-wider">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                [ GITHUB ]
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                [ LINKEDIN ]
              </a>
              <a 
                href={personalInfo.socials.codeforces} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                [ CODEFORCES ]
              </a>
              <a 
                href={personalInfo.socials.leetcode} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                [ LEETCODE ]
              </a>
            </div>

            {/* Resume button */}
            <a 
              href="/AnasGhayas_Resume.pdf" 
              download="AnasGhayas_Resume.pdf"
              className="font-mono text-xs font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] border border-[var(--accent)] bg-[var(--accent-light)] px-4 py-2 hover:shadow-sm transition-all"
            >
              [ DOWNLOAD RESUME.PDF ]
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="pt-20 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest mt-auto select-none">
        <div>
          DESIGNED & BUILT BY ANAS GHAYAS © {currentYear}
        </div>
        <div>
          STAMP // {formattedDate}
        </div>
      </div>
    </section>
  );
}
