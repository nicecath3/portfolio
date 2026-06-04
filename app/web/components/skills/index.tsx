'use client';

import { SectionHeader } from '@/app/web/components/sectionHeader';
import './skills.scss';
import { techTags } from '@/app/web/components/skills/support';

export const Skills = () => {
  return (
    <section id="skills" style={{ padding: '120px 24px' }}>
      <div className="section-container">
        <SectionHeader title="기술 스택" />

        <div
          className="border-glow"
          style={{
            background: 'var(--bg-card)',
            borderRadius: '8px',
            padding: '28px',
          }}
        >
          <div className={'tech-tags'}>
            {techTags.map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
