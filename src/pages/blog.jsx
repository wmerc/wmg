import React from "react";
import Helmet from "react-helmet";
import BlogListing from "../components/BlogListing/BlogListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { transition } = this.props;
    return (
      <div className="index-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <SEO postEdges={postEdges} />
        <div style={transition && transition.style}>
          <BlogListing postEdges={postEdges} />
      	</div>
      </div>
    );
  }
}

export default BlogPage;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      filter: {frontmatter: {type: {eq: "blog"}}}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(formatString: "MMM DD YYYY")
          }
        }
      }
    }
  }
`;
