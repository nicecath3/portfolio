import { useState } from 'react';
import { navItems } from '@/app/web/layout/navbar/support';

import './navbar.scss';

export const NavBar = () => {
  const [active, setActive] = useState('');

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
              onClick={() => setActive(item.href)}
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
