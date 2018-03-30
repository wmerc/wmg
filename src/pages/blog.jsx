import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";

class BlogPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <Header/>
        <h2>Blog stff</h2>
      </div>
    );
  }
}

export default BlogPage;
