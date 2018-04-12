import React from "react";
import Helmet from "react-helmet";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const { transition } = this.props;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <div className="post-wrapper" style={transition && transition.style}>
            <div className="post-meta">
              <div>{post.date}</div>
              <div>{post.type === "blog" ? `${postNode.timeToRead} minutes to read` : post.category}</div>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <img className="post-cover" src={post.cover} alt={post.title}/>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-share-links">
              <div>Share with your friends</div>
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date(formatString: "MMMM DD, YYYY")
        category
        tags
        type
      }
      fields {
        slug
      }
    }
  }
`;
