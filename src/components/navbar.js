import { Link } from 'gatsby';
import * as React from 'react';

const Navbar = () => {
  return (
    <div className="nav-container-flex">
      <nav>
        <div className="nav-list-container">
          <ul className="logo">
            <NavLinkLi to="/">Phabby's World</NavLinkLi>
          </ul>
          <ul className="menu-list">
            <NavLinkLi to="/books/book-1">Book 1</NavLinkLi>
            <NavLinkLi to="/books/book-2">Book 2</NavLinkLi>
            <NavLinkLi to="/docs/characters">Characters</NavLinkLi>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const NavLinkLi = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};
