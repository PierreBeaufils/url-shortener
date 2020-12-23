import './navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <a href="/" class="logo"><h2>Shortly</h2></a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
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
