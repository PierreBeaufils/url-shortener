import { useState } from 'react';
import './navbar.scss';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const setClassName = () => {
    if (showMenu) {
      return 'menu show'
    } return 'menu';
  }

  return (
    <header>
      <div className="header">
        <h2>Shortly</h2>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <div className="menu-line" />
          <div className="menu-line" />
          <div className="menu-line" />
        </div>
      </div>
      <div className={setClassName()}>
        <a href="/" className="menu-link">Features</a>
        <a href="/" className="menu-link">Pricing</a>
        <a href="/" className="menu-link">Resources</a>
        <div className="menu-link menu-separator" />
        <a href="/" className="menu-link">Login</a>
        <a href="/" className="menu-link button">Sign Up</a>
      </div>

    </header>
  );
}

export default Navbar;
