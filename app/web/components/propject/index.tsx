import { ProjectCard } from '@/app/web/components/propject/project_card';
import './project.scss';
import { SectionHeader } from '@/app/web/components/sectionHeader';
import { projects } from '@/app/web/components/propject/support';

export const Projects = () => {
  return (
    <section id="projects" className="grid_bg">
      <div className="section_container">
        <SectionHeader title="개인 프로젝트" />

        <div className={'projects_list'}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
