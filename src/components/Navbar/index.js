import './navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <a href="/" className="logo"><h2>Shortly</h2></a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li><a href="/" className="menu-link">Features</a></li>
        <li><a href="/" className="menu-link">Pricing</a></li>
        <li><a href="/" className="menu-link">Resources</a></li>
        <li><a href="/" className="menu-link">Login</a></li>
        <li><a href="/" className="menu-link button">Sign Up</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
