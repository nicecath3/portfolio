import {
  experienceProject,
  experienceType,
} from '@/app/web/components/experience/support';

interface propsType {
  exp: experienceType;
}

export const ExperienceCard = (props: propsType) => {
  const { exp } = props;

  return (
    <div className="experience-card border-glow">
      <div>
        <span className="experience-card__number">{exp.id}</span>
        <span className="experience-card__type">{exp.type}</span>
      </div>

      <div>
        <div className="experience-card__header">
          <div>
            <h3 className="experience-card__company">{exp.company}</h3>
          </div>
          <span className="experience-card__period">{exp.period}</span>
        </div>

        {experienceProject
          .filter((f) => f.id === exp.id)
          .map((project, pIdx, arr) => {
            return (
              <div
                style={{
                  marginBottom: pIdx === arr.length - 1 ? '0' : '30px',
                }}
                key={pIdx}
              >
                <p className="experience-card__desc">{project.name}</p>

                <ul className="experience-card__tasks">
                  {project.tasks.map((task) => (
                    <li key={task} className="experience-card__task">
                      <span className="experience-card__task-bullet">▹</span>
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="tech-tags" style={{ marginTop: '16px' }}>
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
