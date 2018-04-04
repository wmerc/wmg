import React, { Component } from "react";
import Link from "gatsby-link";
import "./Header.css";
import HeaderLogo from '../SVG/HeaderLogo';
import Nav from '../Nav/Nav';
import UserLinks from '../UserLinks/UserLinks';
import config from "../../../data/SiteConfig";

class Header extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="header-wrapper">
      <header className="header">        
        <Link to="/">
          <HeaderLogo />
        </Link>  
        <UserLinks config={config} />     
      </header>
      <Nav location={location} /> 
      </div>
    );
  }
}

export default Header;
