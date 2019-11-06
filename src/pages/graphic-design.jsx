import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import GridLayout from '../components/GridLayout/GridLayout';

class GraphicDesignPage extends Component {
  render() {
    return (
      <div className="gd-container">
        <Helmet title={`Graphic Design | ${config.siteTitle}`} />
        <GridLayout/>
      </div>
    );
  }
}

export default GraphicDesignPage;
