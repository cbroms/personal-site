import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";
import "../style/main.scss";

const Index = props => (
    <div>
        <Navbar />
        Test!
    </div>
);

Index.propTypes = {
    children: PropTypes.any
};

export default Index;
