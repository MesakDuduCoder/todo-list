import React from 'react';
import '../css/header.css';
import Hamburger from './Hamburger';

function Header() {
  return (
    <header className="header">
      <Hamburger />
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
}

export default Header;
