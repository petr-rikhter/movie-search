import React from "react";

function Header(props) {
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
            <a href="#">Repo link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
