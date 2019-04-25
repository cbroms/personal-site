import React from "react";
import { Link } from "gatsby";

import "../style/main.scss";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shorter: true };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", this.updateDimensions);
        }
        this.updateDimensions();
    }

    componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }

    updateDimensions() {
        this.setState({
            shorter:
                typeof window !== "undefined" ? window.innerWidth <= 480 : true
        });
    }

    render() {
        return (
            <div className="nav">
                <Link to="/" className="nav-link nav-logo">
                    {this.state.shorter ? "CB" : "Christian Broms"}
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Projects
                    </Link>
                    <Link to="/about" className="nav-link">
                        About & Contact
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
