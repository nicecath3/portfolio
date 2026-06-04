import { SectionHeader } from '../sectionHeader';
import './experience.scss';
import {
  experiences,
  experienceType,
} from '@/app/web/components/experience/support';
import { ExperienceCard } from '@/app/web/components/experience/experienceCard';

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: '120px 24px' }}>
      <div className="section-container">
        <SectionHeader title="경력" />
        <div className="experience-list">
          {experiences.map((exp: experienceType) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
