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
                                I'm an an undergraduate student at{" "}
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
                                My work involves creating both{" "}
                                <a href="https://archive.christianbroms.com/project/wikiviz/">
                                    digital spaces
                                </a>{" "}
                                and{" "}
                                <a href="https://archive.christianbroms.com/project/gaze-narratives/">
                                    technology that probes how we interpret
                                    digital spaces
                                </a>
                                . I'm a designer and a developer, and enjoy
                                working on many parts of a project from{" "}
                                <a href="https://christianbroms.com/project/eggs">
                                    research
                                </a>
                                ,{" "}
                                <a href="https://christianbroms.com/project/snippets">
                                    ideation
                                </a>
                                ,{" "}
                                <a href="https://archive.christianbroms.com/project/pith-rainflame-pages/">
                                    design
                                </a>
                                ,{" "}
                                <a href="https://archive.christianbroms.com/project/zoom-morsels/">
                                    exectution
                                </a>{" "}
                                and{" "}
                                <a href="https://archive.christianbroms.com/project/flygenius-v2/">
                                    iteration
                                </a>
                                . I've worked on projects that are{" "}
                                <a href="https://archive.christianbroms.com/project/v4js/">
                                    pure code
                                </a>{" "}
                                or{" "}
                                <a href="https://archive.christianbroms.com/project/storytelling/">
                                    purely visual
                                </a>
                                , but generally my work falls{" "}
                                <a href="https://archive.christianbroms.com/project/whispers/">
                                    somewhere
                                </a>{" "}
                                <a href="https://archive.christianbroms.com/project/dark-patterns/">
                                    in
                                </a>{" "}
                                <a href="https://christianbroms.com/project/stratus">
                                    between
                                </a>
                                , generally designing experiences and building
                                the technology to create them. You can find a
                                more exaustive list of my projects on{" "}
                                <a href="https://archive.christianbroms.com">
                                    my archive
                                </a>{" "}
                                and on{" "}
                                <a href="https://github.com/cbroms">
                                    my GitHub
                                </a>
                                .
                            </p>

                            <p>
                                Some of my other websites:
                                <ul>
                                    <li>
                                        <a href="https://github.com/cbroms">
                                            github.com/cbroms
                                        </a>
                                        , where I keep all my projects' code
                                    </li>
                                    <li>
                                        <a href="https://archive.christianbroms.com">
                                            archive.christianbroms.com
                                        </a>
                                        , where I keep all my projects
                                    </li>
                                    <li>
                                        <a href="https://thoughts.christianbroms.com">
                                            thoughts.christianbroms.com
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
