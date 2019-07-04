import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import "../style/main.scss";

const About = props => {
    return (
        <div>
            <SEO title={`About - CB`} />
            <Navbar />
            <Fade bottom distance="100px">
                <div className="project-container">
                    <div className="project-post">
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
                                    Human Computer Interaction
                                </a>
                                .
                            </p>

                            <p>
                                My work involves creating technology that probes
                                how we interpret text and digital spaces. I
                                design and develop websites, visualize data, and
                                create 3D interactive environments. Recently,
                                I've also been exploring machine learning and
                                AR/VR with Unreal Engine and Unity.
                            </p>

                            <p>
                                Find more of my work on{" "}
                                <a href="https://github.com/cbroms">GitHub</a>.
                            </p>

                            <p>
                                Check out some of my other websites:
                                <ul>
                                    <li>
                                        <a href="https://qualis.red">
                                            Qualis Red
                                        </a>
                                        , where I occasionally write
                                    </li>
                                    <li>
                                        <a href="https://flygeni.us">
                                            FlyGenius
                                        </a>
                                        , a flight time prediction service
                                    </li>
                                    <li>
                                        <a href="https://api.flygeni.us/docs">
                                            FlyGenius API
                                        </a>
                                        , an API for airport, airline, and route
                                        statistics
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
        </div>
    );
};

export default About;
