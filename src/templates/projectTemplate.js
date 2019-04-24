import React from "react";
import { graphql } from "gatsby";
import { parse } from "node-html-parser";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";

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
    const { markdownRemark } = this.props.data;
    const { html } = markdownRemark;

    const root = parse(html);

    let sectionTrees = [];
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
          //fullTree.firstChild.appendChild(currentTree[index]);
          sectionTrees.push(currentTree[index]);
          index += 1;
        }
        currentTree.push(
          parse(`<div class='project-post-section' id='${slug}'></div>`)
        );
      }
      currentTree[index].firstChild.appendChild(root.childNodes[i]);
    }
    this.setState({ sections: sections, trees: sectionTrees });
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter } = markdownRemark;

    let content = <div />;

    if (this.state.trees) {
      const sectionTrees = this.state.trees.map(value => (
        <Fade bottom distance="100px">
          <div dangerouslySetInnerHTML={{ __html: value.toString() }} />
        </Fade>
      ));

      const tags = frontmatter.tags.map(value => (
        <span className="project-tags" key={uuidv4()}>
          {value}
        </span>
      ));

      const sections = this.state.sections.map(value => (
        <AnchorLink
          className="project-link"
          offset="100"
          href={`#${value.slug}`}
          key={uuidv4()}
        >
          {value.title}
        </AnchorLink>
      ));

      content = (
        <div className="project-container">
          <div className="project-post">
            <Fade bottom distance="100px">
              <div className="project-head">
                <h1 className="page-head">{frontmatter.title}</h1>
                <p className="page-head">{frontmatter.subtitle}</p>
                <div>{tags}</div>
                <div style={{ padding: 20 }}>
                  <Img
                    className="project-image-container"
                    fluid={frontmatter.image.childImageSharp.fluid}
                    alt=""
                  />
                </div>

                {sections}
              </div>
            </Fade>

            <div className="project-post-content">{sectionTrees}</div>
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
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
