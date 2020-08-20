import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "../style/main.scss";

const About = (props) => {
    return (
        <div>
            <SEO title={`About - CB`} />
            <Navbar />
            <Fade bottom distance="100px">
                <div className="project-container">
                    <div
                        className="project-post"
                        style={{ minHeight: "100vh" }}
                    >
                        <div
                            className="project-post-content"
                            style={{ padding: 20, maxWidth: 800 }}
                        >
                            <h2>About</h2>
                            <p>
                                I'm a student at{" "}
                                <a href="https://cmu.edu">
                                    Carnegie Mellon University
                                </a>{" "}
                                majoring in{" "}
                                <a href="https://www.cmu.edu/interdisciplinary/programs/bha.html">
                                    Cognitive Science and Art
                                </a>
                                , with an additional Major in{" "}
                                <a href="https://hcii.cmu.edu/academics/hci-undergraduate">
                                    Human-Computer Interaction
                                </a>
                                .
                            </p>

                            <p>
                                My work involves creating technology that probes
                                how we interpret text and digital spaces. I
                                enjoy the full process of designing,
                                prototyping, and interating. Much of what I do
                                is centered around interaction design,
                                information architecture, and building clean
                                user interfaces. I don't stop there, though, as
                                I love to explore a little bit of everything
                                through a wide range of diverse kinds of
                                projects, from{" "}
                                <a href="https://archive.christianbroms.com/project/encyc-of-phil/">
                                    generative text
                                </a>{" "}
                                to{" "}
                                <a href="https://archive.christianbroms.com/project/colma-st/">
                                    photography
                                </a>{" "}
                                to building{" "}
                                <a href="https://archive.christianbroms.com/project/pizza-oven/">
                                    useful brick arches
                                </a>
                                .
                            </p>

                            <p>
                                Find more of my work on{" "}
                                <a href="https://github.com/cbroms">GitHub</a>.
                            </p>

                            <p>
                                Also check out my other websites:
                                <ul>
                                    <li>
                                        <a href="https://archive.christianbroms.com">
                                            My Archive
                                        </a>
                                        , where I keep all the projects I've
                                        worked on
                                    </li>
                                    <li>
                                        <a href="https://thoughts.christianbroms.com">
                                            Thoughts
                                        </a>
                                        , where I post things I've written
                                    </li>
                                </ul>
                            </p>
                            <h2>Contact</h2>
                            <p>
                                <a href="mailto:hello@broms.cc">
                                    hello@broms.cc
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            <Footer />
        </div>
    );
};

export default About;
