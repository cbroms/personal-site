import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import SEO from "../components/SEO";

const FourOhFour = state => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ height: "80vh", padding: "100px 30px 0px 30px" }}>
                <h1>404 - There's nothing here.</h1>
                <p>
                    This page was likely moved or removed. How about{" "}
                    <Link to="/">a project</Link> instead?
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FourOhFour;
