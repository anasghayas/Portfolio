import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-[var(--border)]">
      <SectionHeading number="03" title="Projects" />
      
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
