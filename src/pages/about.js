import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import "../style/main.scss";

const About = props => (
    <div>
        <Navbar />
        <Fade bottom distance="100px">
            <div className="project-container">
                <div className="project-post">
                    <div
                        className="project-post-content"
                        style={{ padding: 20, maxWidth: 800 }}
                    >
                        <h2>About</h2>
                        I'm a student at{" "}
                        <a href="https://cmu.edu">
                            Carnegie Mellon University
                        </a>{" "}
                        majoring in Cognitive Science and Art, with an
                        additional Major in Human Computer Interaction.
                        <br />
                        <br />
                        My work involves creating technology that probes how we
                        interpret text and digital spaces. I design and develop
                        websites, visualize data, and create 3D interactive
                        environments. Recently, I've been exploring machine
                        learning and AR/VR with Unreal Engine and Unity.
                        <br />
                        <br />
                        Find more of my work on{" "}
                        <a href="https://github.com/CBR0MS">GitHub</a>.
                        <h2>Contact</h2>
                        <a href="mailto:hello@broms.cc">hello@broms.cc</a>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
);

export default About;
