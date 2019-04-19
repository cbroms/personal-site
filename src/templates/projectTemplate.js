import React from "react";
import { graphql } from "gatsby";
import { parse } from "node-html-parser";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Navbar from "../components/Navbar";

const slugify = require("slugify");

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentFromTop: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    // const toTop = window.pageYOffset;
    // if (toTop < 100) {
    //   this.setState({ percentFromTop: toTop / 100 });
    // }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    const root = parse(html);

    let fullTree = parse("<div></div>");
    let currentTree = [];
    let index = 0;

    for (const i in root.childNodes) {
      if (
        (root.childNodes[i].tagName && root.childNodes[i].tagName === "h1") ||
        parseInt(i) === root.childNodes.length - 1
      ) {
        if (parseInt(i) === root.childNodes.length - 1) {
          currentTree[index].firstChild.appendChild(root.childNodes[i]);
        }
        if (currentTree.length > 0) {
          fullTree.firstChild.appendChild(currentTree[index]);
          index += 1;
        }

        const slug = slugify(root.childNodes[i].text);
        currentTree.push(
          parse(`<div class='project-post-section' id='${slug}'></div>`)
        );
      }

      currentTree[index].firstChild.appendChild(root.childNodes[i]);
    }

    this.setState({ tree: fullTree.toString() });
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter } = markdownRemark;

    // const titleStyle = {
    //   marginRight:
    //     this.state.percentFromTop * (parseInt(window.innerWidth / 2) + 400),
    //   position: this.state.percentFromTop >= 0.9 ? "fixed" : "",
    //   top: this.state.percentFromTop >= 0.9 ? 65 : "",
    //   fontSize:
    //     1 - this.state.percentFromTop * 2 > 1.5
    //       ? `${1 - this.state.percentFromTop * 2}rem`
    //       : "1.5rem"
    // };

    let content = <div />;

    if (this.state.tree) {
      content = (
        <div className="project-container">
          <div className="project-post">
            <div className="project-head">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>

              <AnchorLink offset="100" href="#Ideation">
                Ideation
              </AnchorLink>
              <AnchorLink offset="100" href="#Prototyping">
                Prototyping
              </AnchorLink>
            </div>

            <div
              className="project-post-content"
              dangerouslySetInnerHTML={{ __html: this.state.tree }}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        {content}
      </div>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
