import React from "react";
import { graphql } from "gatsby";
import { parse } from "node-html-parser";

// import AnchorLink from "react-anchor-link-smooth-scroll";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";

import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import PostLink from "../components/PostLink";

import "../style/main.scss";

const slugify = require("slugify");
const uuidv4 = require("uuid/v4");

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeButtons: [false, false, true],
      spansSet: false,
      currentView: 2,
    };
  }

  componentDidMount() {
    const { html } = this.props.data.thisPage;
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
          sectionTrees.push(currentTree[index]);
          index += 1;
        }
        currentTree.push(
          parse(`<div class='project-post-section' id='${slug}'></div>`)
        );
      } else if (
        root.childNodes[i].tagName &&
        root.childNodes[i].tagName === "p" &&
        root.childNodes[i].firstChild.tagName === "img"
      ) {
        // remove img gifs from their p parents
        root.childNodes[i] = root.childNodes[i].firstChild;
      }
      currentTree[index].firstChild.appendChild(root.childNodes[i]);
    }

    const style = document.createElement("style");
    document.body.appendChild(style);

    this.setState({ style: style, sections: sections, trees: sectionTrees });
  }

  componentDidUpdate() {
    if (!this.state.spansSet) {
      // collect the spans that mark sections to hide
      let spans = Array.from(document.getElementsByTagName("span"));
      spans = spans.filter((elt) => {
        return elt.className.includes("five") || elt.className.includes("ten");
      });

      // get the element just before the span
      for (const span of spans) {
        let eltToWrap = span.previousSibling ? span.previousSibling : span;

        // conditions where the element before is actually the parent
        if (
          eltToWrap.parentElement.tagName === "LI" ||
          (eltToWrap.parentElement.firstElementChild &&
            ["A", "STRONG", "EM"].includes(
              eltToWrap.parentElement.firstElementChild.tagName
            ))
        ) {
          eltToWrap = eltToWrap.parentElement;
        }

        const wrapper = document.createElement("span");
        wrapper.className = span.className;

        eltToWrap.parentNode.insertBefore(wrapper, eltToWrap);
        wrapper.appendChild(eltToWrap);
      }
      this.setState({ spansSet: true });
    }
  }

  adjustTime(num, actual) {
    const content = document.getElementsByClassName("project-post-content")[0];

    content.style.opacity = 0;

    // document.documentElement.style.setProperty("--body", "var(--accent)");
    window.setTimeout(function() {
      content.style.transition = "opacity var(--duration) ease-in";
      content.style.opacity = 1;
      window.setTimeout(function() {
        content.style.transition = "none";
      }, 600);
    }, 50);

    if (num === "one") {
      this.setState({ timeButtons: [true, false, false], currentView: 0 });
    } else if (num === "five") {
      this.setState({ timeButtons: [false, true, false], currentView: 1 });
    } else if (num === "ten") {
      this.setState({ timeButtons: [false, false, true], currentView: 2 });
    }
  }

  render() {
    const { frontmatter } = this.props.data.thisPage;
    const nextPage = this.props.data.nextPage;

    let content = <div />;

    // get content length
    const len = this.state.trees
      ? this.state.trees[this.state.currentView].text
          .split(" ")
          .filter((val) => val !== "").length
      : 0;

    const timeframe = (
      <div className="project-details-content">
        <div className="details-title">
          {frontmatter.timeframe !== "" ? "Timeframe" : ""}
        </div>
        <div className="details-text">{frontmatter.timeframe}</div>
      </div>
    );

    const projectType = (
      <div className="project-details-content" key={uuidv4()}>
        <div className="details-title">
          {frontmatter.project_type !== "" ? "Project Type" : ""}
        </div>
        <div className="details-text">{frontmatter.project_type}</div>
      </div>
    );

    const toolsList = frontmatter.tools.map((value, index) => (
      <span key={uuidv4()}>{`${value}${
        index !== frontmatter.tools.length - 1 ? "," : ""
      } `}</span>
    ));

    const tools = (
      <div className="project-details-content">
        <div className="details-title">
          {frontmatter.tools.length > 0 ? "Tools" : ""}
        </div>
        <div className="details-text">{toolsList}</div>
      </div>
    );

    const readingTime = (
      <div className="project-details-content">
        <div className="details-title">Adjust Reading Time</div>
        <div className="details-text">
          <span
            className={`tag-button ${
              this.state.timeButtons[0] ? "enabled" : ""
            }`}
            key={uuidv4()}
            onClick={() => {
              this.adjustTime("one", frontmatter.times[0]);
            }}
          >
            {`${frontmatter.times[0]} MIN`}
          </span>
          <span
            className={`tag-button ${
              this.state.timeButtons[1] ? "enabled" : ""
            }`}
            key={uuidv4()}
            onClick={() => {
              this.adjustTime("five", frontmatter.times[1]);
            }}
          >
            {`${frontmatter.times[1]} MIN`}
          </span>
          <span
            className={`tag-button ${
              this.state.timeButtons[2] ? "enabled" : ""
            }`}
            key={uuidv4()}
            onClick={() => {
              this.adjustTime("ten", frontmatter.times[2]);
            }}
          >
            {`${frontmatter.times[2]} MIN`}
          </span>
          <div className="post-length">{`${len} words`}</div>
        </div>
      </div>
    );

    content = (
      <div className="project-container">
        <div className="project-post">
          <Fade bottom distance="100px">
            <div className="project-head">
              <h1 className="page-head">{frontmatter.title}</h1>
              <p className="page-head">{frontmatter.subtitle}</p>
              <div className="page-head">
                <Tags tags={frontmatter.tags} />
              </div>

              <div style={{ padding: 20 }}>
                <Img
                  className="project-image-container"
                  fluid={frontmatter.image.childImageSharp.fluid}
                  alt=""
                />
              </div>

              <div className="project-details-container">
                {tools}
                {timeframe}
                {projectType}
                <div
                  className="project-details-content"
                  style={{ maxWidth: 390 }}
                >
                  <div className="details-title">Synopsis</div>
                  <div className="details-text">{frontmatter.synopsis}</div>
                </div>

                {/*  <div className="project-details-content">
                    <div className="details-title">Sections</div>
                    <div className="details-text">{sections}</div>
                  </div>*/}
                {readingTime}
              </div>
            </div>
          </Fade>

          <div
            className="project-post-content"
            dangerouslySetInnerHTML={{
              __html: this.state.trees
                ? this.state.trees[this.state.currentView]
                : "",
            }}
          ></div>
          <div style={{ marginTop: 150, marginBottom: 50 }}>
            <h1>Next Project&mdash;</h1>
            <PostLink post={nextPage} pos={0} visible={true} />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <SEO
          title={`${frontmatter.title} - CB`}
          description={frontmatter.synopsis}
          image={frontmatter.image.childImageSharp.fluid}
        />
        <Navbar />
        {content}
        <Footer />
      </div>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query($path: String!, $next: String!) {
    thisPage: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tags
        subtitle
        synopsis
        timeframe
        project_type
        tools
        times
        image {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    # query the next page's frontmatter data used to display the post link
    nextPage: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        path
        title
        subtitle
        tags
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
