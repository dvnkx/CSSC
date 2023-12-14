const Navbar = () => {
  return (
    <header className="header">
      <div className="header__content">
        <a href="#" className="logo">
          CSS Challenge
        </a>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#intro">
                Intro
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#css">
                CSS
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#footer">
                Footer
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
