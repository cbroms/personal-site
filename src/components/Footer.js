import React from "react";

import { Link } from "gatsby";

import "../style/main.scss";

const Footer = props => (
    <div className="footer">
        <span className="footer-text">
            Copyright &copy; {new Date().getFullYear()} Christian Broms
        </span>
        <span className="footer-text">
            <Link to="/" className="footer-link">
                Projects
            </Link>
        </span>
        <span className="footer-text">
            <Link to="/about" className="footer-link">
                About & Contact
            </Link>
        </span>
        <span className="footer-text">
            <a href="https://github.com/CBR0MS" className="footer-link">
                GitHub
            </a>
        </span>
    </div>
);

export default Footer;
