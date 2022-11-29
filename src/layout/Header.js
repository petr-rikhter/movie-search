import React from "react";

const Header = (props) => {
  return (
    <nav
      className="blue lighten-3
    "
    >
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Movie search
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/petr-rikhter/movie-search">Repo link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
