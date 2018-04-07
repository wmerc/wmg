import React from "react";
import Link from "gatsby-link";
import "./PostListing.css";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="post-listing">
        {/* Your post list here. */
        postList.map(post => (
          <div className="post" key={post.title}>
            <Link to={post.path}>
              <img src={post.cover} alt={post.title} />
              <div className="post-title">
                <h3>{post.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
