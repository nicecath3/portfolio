import { projectType } from '@/app/web/components/propject/support';

interface propsType {
  project: projectType;
}

export const ProjectCard = (props: propsType) => {
  const { project } = props;

  return (
    <div className="border-glow project_card">
      <div>
        <span className={'project_number'}>{project.id}</span>
        <div className={'project_lines'}>{project.lines} lines</div>
      </div>

      <div>
        <div className={'project_title_wrap'}>
          <h3 className={'project_title'}>{project.title}</h3>
          {project.inDevelopment && (
            <span className={'project_inDevelopment'}>in development</span>
          )}
        </div>

        <p className={'project_desc'}>{project.description}</p>

        <div className={'project_tags'}>
          {project.stack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={'project_links'}>
        {!!project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={'project_link_github'}
          >
            <span>⌥</span> github
          </a>
        )}

        {!!project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={'project_link_live'}
          >
            <span>↗</span> live
          </a>
        )}
      </div>
    </div>
  );
};
