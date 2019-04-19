import React from "react";
import { Link } from "gatsby";

const Navbar = props => {
    const shorter = window.innerWidth <= 380;

    return (
        <div className="nav">
            <Link to="/" className="nav-link nav-logo">
                {shorter ? "CB" : "Christian Broms"}
            </Link>
            <div className="nav-links">
                <Link to="/projects" className="nav-link">
                    Projects
                </Link>
                <Link to="/about" className="nav-link">
                    About & Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
