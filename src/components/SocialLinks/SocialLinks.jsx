import React, { Component } from "react";
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const realPrefix = config.pathPrefix === "/" ? "/" : config.pathPrefix;
    const url = config.siteUrl + realPrefix + postPath;

    const iconSize = mobile ? 32 : 40;
    const filter = count => (count > 0 ? count : "0");

    return (
      <div className="social-links">
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
          <LinkedinIcon round size={iconSize} />
          
        </LinkedinShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount>
          <GooglePlusIcon round size={iconSize} />
        </GooglePlusShareButton>
      </div>
    );
  }
}

export default SocialLinks;
