import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TABS = [
  { path: '/', label: 'Home', dot: '#7aa2f7' },
  { path: '/projects', label: 'Projects', dot: '#9ece6a' },
  { path: '/contact', label: 'Contact', dot: '#ff9e64' },
];

function NavBar() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <nav className="tabbar" aria-label="Sections">
      <div className="tabbar__window-controls" aria-hidden="true">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
      </div>
      <div className="tabbar__tabs">
        {TABS.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`tab ${location.pathname === tab.path ? 'tab--active' : ''}`}
          >
            <span className="tab__dot" style={{ background: tab.dot }} />
            {tab.label}
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        aria-label="Toggle light and dark theme"
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default NavBar;
