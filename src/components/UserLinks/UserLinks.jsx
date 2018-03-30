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
        <a href="https://twitter.com/willmerchan">
          <TwitterIcon/>
        </a>
        <a href="https://github.com/WillMerchan">
          <GitHubIcon/>
        </a>
        <a href="https://www.linkedin.com/in/willmerchan/">
          <LinkedInIcon/>
        </a>
        <a href="mailto:willmerchan@gmail.com">
          <EmailIcon/>
        </a>
      </div>
    )
  }
}

export default UserLinks;
