import React, { Component } from "react";
import Link from "gatsby-link";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
        <nav className="nav">
          <Link to="/">Work</Link>
          <Link to="/blog">Blog</Link>
        </nav>      
    );
  }
}

export default Nav;
