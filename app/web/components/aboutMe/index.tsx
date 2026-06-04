'use client';

import { useEffect, useState } from 'react';
import './aboutMe.scss';
import { CodeLine } from '@/app/web/components/aboutMe/code_line';
import {
  buttonColors,
  codeLines,
  roles,
} from '@/app/web/components/aboutMe/suppoprt';

export const AboutMe = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setTimeout(() => {
          setRoleIndex((roleIndex + 1) % roles.length);
          setTyping(true);
        });
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="about" className="about_me">
      <div className="about_me_container">
        <div>
          <h1 className={'about_me_title'}>
            <span className={'text1'}>안녕하세요,</span>
            <span className={'text2'}>김경률</span>
          </h1>

          <div className={'about_me_sub_title'}>
            <span className={'text1'}>{`I'm a `}</span>
            <span className="cursor-blink text2">{displayed}</span>
          </div>

          <p className={'about_me_context'}>
            사용자 경험을 중심으로 한 인터랙티브 웹 애플리케이션을 개발합니다.
            React와 Next.js로 성능 최적화된 서비스를 구축하는 것을 즐깁니다.
          </p>

          <div className={'about_me_btns'}>
            <a href="#projects" className={'about_me_project_button'}>
              개인 프로젝트
            </a>
            <a href="#contact" className={'about_me_contact_button'}>
              contact
            </a>
          </div>
        </div>

        <div className={'code_board'}>
          <div className="border-glow code_board_card">
            <div className={'code_board_card_bar'}>
              {buttonColors.map((c) => (
                <div
                  key={c}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: c,
                  }}
                />
              ))}
              <span className={'filename'}>developer.tsx</span>
            </div>

            <div className={'code_board_card_code'}>
              <CodeLine number={1} indent={0}>
                <span style={{ color: '#c678dd' }}>const</span>
                <span style={{ color: 'var(--accent-cyan)' }}> developer</span>
                <span style={{ color: '#56b6c2' }}> =</span>
                <span style={{ color: '#abb2bf' }}> {'{'}</span>
              </CodeLine>

              {codeLines.map((item, idx) => {
                const lastItem = codeLines.length === idx + 1;
                return (
                  <CodeLine number={idx + 2} indent={1} key={idx}>
                    <span style={{ color: '#e06c75' }}>{item.name}</span>
                    <span style={{ color: '#abb2bf' }}>: </span>
                    <span style={{ color: lastItem ? '#d19a66' : '#98c379' }}>
                      {item.value}
                    </span>
                    {!lastItem && <span style={{ color: '#abb2bf' }}>,</span>}
                  </CodeLine>
                );
              })}

              <CodeLine number={6} indent={0}>
                <span style={{ color: '#abb2bf' }}>{'}'}</span>
              </CodeLine>
            </div>
          </div>

          <div className={'available_status'}>
            <div className={'available_status_dot'} />
            <span className={'available_status_text'}>
              available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
