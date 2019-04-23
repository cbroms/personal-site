import React from "react";
import { graphql } from "gatsby";
import { parse } from "node-html-parser";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Navbar from "../components/Navbar";

import "../style/main.scss";

const slugify = require("slugify");
const uuidv4 = require("uuid/v4");

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // if (typeof window !== 'undefined') {
    //   window.addEventListener("scroll", this.handleScroll);
    // }

    const { markdownRemark } = this.props.data;
    const { html } = markdownRemark;

    const root = parse(html);

    let fullTree = parse("<div></div>");
    let currentTree = [];
    let sections = [];
    let index = 0;

    // parse html from markdown into sections formed from the h1 tags
    for (const i in root.childNodes) {
      if (
        (root.childNodes[i].tagName && root.childNodes[i].tagName === "h1") ||
        parseInt(i) === root.childNodes.length - 1
      ) {
        // create slugs for the section links
        const slug = slugify(root.childNodes[i].text);

        if (parseInt(i) === root.childNodes.length - 1) {
          currentTree[index].firstChild.appendChild(root.childNodes[i]);
        } else {
          sections.push({ title: root.childNodes[i].text, slug: slug });
        }
        if (currentTree.length > 0) {
          fullTree.firstChild.appendChild(currentTree[index]);
          index += 1;
        }
        currentTree.push(
          parse(`<div class='project-post-section' id='${slug}'></div>`)
        );
      }

      currentTree[index].firstChild.appendChild(root.childNodes[i]);
    }
    this.setState({ sections: sections, tree: fullTree.toString() });
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter } = markdownRemark;

    let content = <div />;

    if (this.state.tree) {
      const tags = frontmatter.tags.map(value => (
        <span className="project-tags" key={uuidv4()}>
          {value}
        </span>
      ));

      const sections = this.state.sections.map(value => (
        <AnchorLink offset="100" href={`#${value.slug}`} key={uuidv4()}>
          {value.title}
        </AnchorLink>
      ));

      content = (
        <div className="project-container">
          <div className="project-post">
            <div className="project-head">
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.subtitle}</p>
              <div>{tags}</div>

              {sections}
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
        tags
        subtitle
      }
    }
  }
`;
