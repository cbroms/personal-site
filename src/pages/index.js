import React, { useState } from "react";

import Navbar from "../components/Navbar";
import style from "../style/main.scss";

import { graphql } from "gatsby";
import PostLink from "../components/PostLink";

const uuidv4 = require("uuid/v4");

const Index = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
    const [loadedTags, setLoadedTags] = useState(false);
    const [allTags, setAllTags] = useState(true);
    const [tags, setTags] = useState(["Show All"]);
    const [activeTags, setActiveTags] = useState([]);

    if (!loadedTags) {
        let allTags = tags;
        edges.map(edge => {
            const newTags = edge.node.frontmatter.tags.filter(tag => {
                return !allTags.includes(tag);
            });
            allTags = allTags.concat(newTags);
            return false;
        });
        setTags(allTags);
        setLoadedTags(true);
        setActiveTags(["Show All"]);
    }

    console.log(activeTags);

    const tagButtons = tags.map(tag => {
        const tagClassSCSS = tag.toLowerCase().replace(" ", "-");
        const tagJoined = tag.toLowerCase().replace(" ", "");

        const setActive = tag =>
            setActiveTags(activeTags.filter(value => value !== tag));
        const setInactive = tag => setActiveTags(activeTags.concat(tag));

        return (
            <span
                className={`tag-button ${tagClassSCSS}`}
                style={
                    activeTags.includes(tag)
                        ? { backgroundColor: style[tagJoined] }
                        : {}
                }
                key={uuidv4()}
                onClick={() => {
                    tag === "Show All"
                        ? activeTags.includes(tag)
                            ? setAllTags(!allTags) && setActive(tag)
                            : setAllTags(!allTags) && setInactive(tag)
                        : activeTags.includes(tag)
                        ? setActive(tag)
                        : setInactive(tag);
                }}
            >
                {tag}
            </span>
        );
    });

    const goodEdges = edges.filter(edge => {
        const includedTags = edge.node.frontmatter.tags.map(tag => {
            return activeTags.includes(tag);
        });
        return includedTags.includes(true);
    });

    const posts = edges
        .filter(edge => allTags || goodEdges.includes(edge))
        .map((edge, index) => (
            <PostLink key={edge.node.id} post={edge.node} pos={index} />
        ));

    return (
        <div>
            <Navbar />
            <div className="project-container">
                {tagButtons}
                {posts}
            </div>
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___disp_order] }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
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
        }
    }
`;
