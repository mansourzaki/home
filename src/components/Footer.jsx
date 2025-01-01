import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        {/* <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Mansour Alhaddad
          </span>
        </a>{" "}
        using <i className="fab fa-react" /> */}
        <p>
          <small className="text-muted">
          Project forked and edited from <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>{" "}
         repo
          </small>
        </p>
      </Container>
      <p className="text-muted">
        <small>© 2024 Mansour Alhaddad. Open sourced with love under MIT License</small>
      </p>
    </footer>
  );
};

export default Footer;
