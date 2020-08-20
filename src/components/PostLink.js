import React from "react";
import { navigate } from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Tags from "./Tags";

import "../style/main.scss";

const PostLink = (props) => {
    const { post } = props;

    const text = (
        <div className="project-link-flex second">
            <h1 className="link-title">{post.frontmatter.title}</h1>
            <p className="link-subtitle">{post.frontmatter.subtitle}</p>
            <Tags tags={post.frontmatter.tags} />
            <p className="project-link-pointer">Read case study &rarr;</p>
        </div>
    );

    const image = (
        <div className="project-link-flex first">
            <Img
                className="project-image-link-container"
                fluid={post.frontmatter.image.childImageSharp.fluid}
                alt=""
            />
        </div>
    );

    const position = props.pos % 2 === 0;

    return (
        <div style={{ width: "100vw" }}>
            <Fade
                left={position}
                right={!position}
                distance="100px"
                when={props.visible}
                collapse
            >
                <div
                    className="project-link-container"
                    onClick={() => navigate(post.frontmatter.path)}
                >
                    {image}
                    {text}
                </div>
            </Fade>
        </div>
    );
};

export default PostLink;
