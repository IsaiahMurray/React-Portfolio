import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#jumbotron">
            Isaiah Murray
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#jumbotron">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link js-scroll-trigger" href="#about">
                About
              </a>
              <a className="nav-item nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-item nav-link" href="#project-div">
                Projects
              </a>
              <a className="nav-item nav-link" href="#form-container">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
