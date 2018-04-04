import React from "react";
import Link from "gatsby-link";
import "./BlogListing.css";

class BlogListing extends React.Component {
  getBlogList() {
    const blogList = [];
    this.props.postEdges.forEach(postEdge => {
      blogList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        month: postEdge.node.frontmatter.date.split(' ')[0],
        day: postEdge.node.frontmatter.date.split(' ')[1],
        year: postEdge.node.frontmatter.date.split(' ')[2]
      });
    });
    return blogList;
  }
  render() {
    const blogList = this.getBlogList();
    return (
      <div className="blog-listing">
        {/* Your blog list here. */
        blogList.map(blog => (
          <div className="blog">
            <Link to={blog.path} key={blog.title}>
              <div className="blog-group">
                <div className="blog-date">
                  <div className="blog-date-month">{blog.month}</div>
                  <div className="blog-date-day">{blog.day}</div>
                  <div className="blog-date-year">{blog.year}</div>
                </div>
                <div className="blog-text">
                  <h2>{blog.title}</h2>
                  <p>{blog.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogListing;
