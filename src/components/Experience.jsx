import { motion } from 'framer-motion';
import { education, leadership } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  // Static mock dates/roles for leadership items to fit a resume timeline layout
  const leadershipDetails = [
    {
      role: "Workshop Instructor",
      organization: "BIT Mesra",
      description: leadership[0],
      duration: "2025"
    },
    {
      role: "Club Organizer",
      organization: "IET & IEEE",
      description: leadership[1],
      duration: "2025"
    },
    {
      role: "NSS Volunteer",
      organization: "National Service Scheme",
      description: leadership[2],
      duration: "2024 - Present"
    }
  ];

  return (
    <section id="experience" className="border-b border-[var(--border)]">
      <SectionHeading number="05" title="Experience" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Left Column: Education */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
            ACADEMIC_RECORD.TXT
          </div>

          <div className="border border-[var(--border)] p-6 bg-[#fcfaf7]/50 backdrop-blur-sm space-y-4 shadow-[var(--shadow-sm)]">
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">INSTITUTION</span>
              <h4 className="font-mono text-sm font-bold text-[var(--text-primary)]">{education.university}</h4>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">DEGREE</span>
              <p className="font-sans text-sm text-[var(--text-secondary)]">{education.degree}</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">DISCIPLINE</span>
              <p className="font-mono text-xs text-[var(--text-primary)] font-bold">{education.field}</p>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-[var(--border)] border-dashed">
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">TIMELINE</span>
                <p className="font-mono text-xs text-[var(--text-primary)] font-bold">{education.duration}</p>
              </div>
              <div className="text-right space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">CGPA</span>
                <p className="font-mono text-sm font-bold text-[var(--accent)]">{education.cgpa} / 10.0</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Leadership / Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-3 space-y-6"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
            LEADERSHIP_VOLUNTEER.CFG
          </div>

          <div className="space-y-6 relative pl-4 border-l border-[var(--border)] border-dashed ml-2">
            {leadershipDetails.map((item, index) => (
              <motion.div 
                variants={itemVariants} 
                key={index} 
                className="space-y-2 relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-[var(--border)] bg-[#fcfaf7] group-hover:bg-[var(--accent)] transition-colors duration-200"></div>

                <div className="flex justify-between items-start font-mono text-xs">
                  <h4 className="font-bold text-[var(--text-primary)]">
                    {item.role} — <span className="text-[var(--text-secondary)] font-normal text-[11px]">{item.organization}</span>
                  </h4>
                  <span className="text-[var(--text-muted)] text-[10px] tracking-wider shrink-0">{item.duration}</span>
                </div>

                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
