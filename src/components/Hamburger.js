import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/hamburger.css';

function Hamburger() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = () => {
      if (navbarOpen) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);
  return (
    <nav className=".navbar" ref={ref}>
      <button
        className="toggle"
        type="button"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? 'close' : 'open'}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        <li>
          <Link to="/" onClick={() => setNavbarOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setNavbarOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/profile" onClick={() => setNavbarOpen(false)}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Hamburger;
