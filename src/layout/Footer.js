import React from "react";

const Footer = (props) => {
  return (
    <footer className="page-footer grey">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/petr-rikhter/movie-search"
          >
            Repo link
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
