'use client';

import { useState } from 'react';
import { SectionHeader } from '@/app/web/components/sectionHeader';
import './contact.scss';
import {
  ContactLeftInfo,
  verifyEmail,
} from '@/app/web/components/contact/support';
import { sendMessage } from '@/app/web/api/contact';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.name === 'email' && emailError && setEmailError(false);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (verifyEmail(form.email)) {
      sendMessage(form)
        .then(() => {
          setSent(true);
        })
        .catch(() => {
          alert('메세지 전송에 실패하였습니다.');
        });
    } else {
      setEmailError(true);
    }
  };

  return (
    <section id="contact" style={{ padding: '120px 24px' }}>
      <div className="contact_container">
        <SectionHeader title="Contact" />

        <div className={'grid-container'}>
          <div>
            <p className={'container_left_p'}>
              새로운 프로젝트나 기회에 대해 이야기 나누고 싶으시면 언제든지
              연락해 주세요. 함께 좋은 것을 만들어봐요.
            </p>

            <div className={'container_left_flex_column'}>
              {ContactLeftInfo.map((item) => (
                <div
                  key={item.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  <span style={{ color: 'var(--accent-cyan)', width: '20px' }}>
                    {item.icon}
                  </span>

                  <div>
                    <div className={'contact_left_mono_label'}>
                      {item.label}
                    </div>

                    {item.label === 'github' ? (
                      <a
                        href={'https://github.com/nicecath3?tab=repositories'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact_left_mono_text"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact_left_mono_text">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-glow contact_right_card">
            {sent ? (
              <div className={'send_success'}>
                <div className={'accent_title'}>✓</div>
                <p className={'mono_accent'}>메시지가 전송되었습니다!</p>
                <p className={'mono_muted'}>빠르게 답변 드리겠습니다.</p>
              </div>
            ) : (
              <div className={'contact_right_write'}>
                <div>
                  <label className={'mono_label_block'}>name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="이름"
                    className={'contact_right_input'}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label className={'mono_label_block'}>email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className={'contact_right_input'}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {emailError && (
                    <label
                      className={'mono_label_block'}
                      style={{ color: 'red' }}
                    >
                      이메일 형식을 확인해주세요.
                    </label>
                  )}
                </div>

                <div>
                  <label className={'mono_label_block'}>message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="안녕하세요!"
                    rows={5}
                    className={'contact_right_input'}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className={'contact_right_btn'}
                  disabled={
                    !form.name || !form.email || !form.message || emailError
                  }
                >
                  보내기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
