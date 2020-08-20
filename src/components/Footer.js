import React from "react";

import { Link } from "gatsby";

import "../style/main.scss";

const Footer = (props) => (
    <div className="footer">
        <span className="footer-text">
            Copyright &copy; 2017-{new Date().getFullYear()} Christian Broms
        </span>
        <span className="footer-text">
            <Link to="/" className="footer-link">
                Projects
            </Link>
        </span>
        <span className="footer-text">
            <a
                href="https://archive.christianbroms.com"
                className="footer-link"
            >
                Archived Projects
            </a>
        </span>
        <span className="footer-text">
            <Link to="/about" className="footer-link">
                About & Contact
            </Link>
        </span>
        <span className="footer-text">
            <a href="https://github.com/cbroms" className="footer-link">
                GitHub
            </a>
        </span>
    </div>
);

export default Footer;
