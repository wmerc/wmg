import React, { Component } from "react";
import Link from "gatsby-link";
import "./Header.css";
import HeaderSVG from '../SVG/HeaderBackground';
import HeaderLogo from '../SVG/HeaderLogo';
import Nav from '../Nav/Nav';
import UserLinks from '../UserLinks/UserLinks';
import config from "../../../data/SiteConfig";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
      <header className="header">        
        <Link to="/">
          <HeaderLogo/>
        </Link>  
        <UserLinks config={config}/>     
      </header>
      <Nav/> 
      </div>
    );
  }
}

export default Header;
