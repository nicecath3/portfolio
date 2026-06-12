'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/app/web/layout/navbar/support';

import './navbar.scss';

export const NavBar = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px', // 화면 중간쯤 왔을때 활성화
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav_style">
      <div className="nav_container">
        <a href="#" className="nav_logo">
          <span>KGR.portfolio</span>
        </a>

        <div className="nav_items">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav_item ${active.includes(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
