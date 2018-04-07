import React, { Component } from "react";
import "./UserLinks.css";
import TwitterIcon from "../SVG/TwitterIcon";
import GitHubIcon from "../SVG/GitHubIcon";
import EmailIcon from "../SVG/EmailIcon";
import LinkedInIcon from "../SVG/LinkedInIcon";

class UserLinks extends Component {
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        <a href="https://twitter.com/willmerchan" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/WillMerchan" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/willmerchan/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:willmerchan@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
      </div>
    )
  }
}

export default UserLinks;
