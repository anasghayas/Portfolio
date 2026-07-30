import { motion } from 'framer-motion';
import { skills, competitiveProgramming } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const categories = Object.keys(skills);

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
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-[var(--border)]">
      <SectionHeading number="02" title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Technical Skills grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-2 space-y-8"
        >
          {categories.map((category) => (
            <motion.div variants={itemVariants} key={category} className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <span 
                    key={skill} 
                    className="font-mono text-xs border border-[var(--border)] bg-[#fcfaf7] px-3 py-1.5 text-[var(--text-primary)] shadow-[var(--shadow-sm)] hover:border-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CP Info panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-[var(--border)] p-6 bg-[#fcfaf7]/50 backdrop-blur-sm space-y-6 shadow-[var(--shadow-sm)]"
        >
          <div className="font-mono font-bold text-xs text-[var(--text-primary)] border-b border-[var(--border)] pb-2 uppercase tracking-wider">
            COMPETITIVE_PROG.CFG
          </div>

          <div className="space-y-4">
            {Object.keys(competitiveProgramming).map((platform) => {
              const data = competitiveProgramming[platform];
              return (
                <div key={platform} className="flex items-center justify-between font-mono text-xs">
                  <span className="uppercase text-[var(--text-muted)] font-bold">{platform}</span>
                  <div className="text-right flex items-center gap-2">
                    <span className="font-bold text-[var(--text-primary)]">{data.rating}</span>
                    {data.title && (
                      <span 
                        className="px-1.5 py-0.5 text-[9px] uppercase font-bold border rounded-sm"
                        style={{ color: data.color, borderColor: data.color, backgroundColor: `${data.color}0a` }}
                      >
                        {data.title}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
