import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Link from "gatsby-link";
import "./Nav.css";

class Nav extends Component {
  componentDidMount() {
    if(this.props.location.pathname==="/" || this.props.location.pathname.indexOf("/work/") === 0) {
      this.underline.classList.add("nav-underline--home");
    } else if(this.props.location.pathname==="/blog" || this.props.location.pathname.indexOf("/blog/") === 0) {
      this.underline.classList.add("nav-underline--blog");
    }
  }
	componentDidUpdate = (prevProps, prevState) => {
    if((prevProps.location.pathname === "/" || prevProps.location.pathname.indexOf("/work/") === 0) && this.props.location.pathname==="/blog") {
      this.underline.animate ([
          { transform: "translateX(10px)" },
          { transform: "translateX(72px)" },
        ], {
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        })
    } else if((prevProps.location.pathname === "/blog" || prevProps.location.pathname.indexOf("/blog/") === 0) && this.props.location.pathname === "/") {
      this.underline.animate ([
          { transform: "translateX(72px)" },
          { transform: "translateX(10px)" },
        ], {
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        })
    }
  }


    //   this.underline.animate ([
    //     { opacity: 1, top: "42px"},
    //     { opacity: 0, top:"48px"}
    //   ], {
    //     duration: 300,
    //     fill: "forwards",
    //     easing: "ease-out",
    //     iterations: 1
    //   })
    // }
    
  render() {
    return (
        <nav className="nav">
          <Link exact activeClassName="nav-active" to="/">Work</Link>
          <Link exact activeClassName="nav-active" to="/blog">Blog</Link>
          <div ref={(underline) => this.underline = ReactDOM.findDOMNode(underline)}/>
        </nav>      
    );
  }
}

export default Nav;
