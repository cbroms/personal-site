import React from "react";
import "../style/main.scss";

const uuidv4 = require("uuid/v4");

const Tags = props => {
    const tags = props.tags.map(value => (
        <span
            className={`tags ${value.toLowerCase().replace(" ", "-")}`}
            key={uuidv4()}
        >
            <div className="tag-text">{value}</div>
        </span>
    ));

    return <div style={{ padding: "0 20px" }}>{tags}</div>;
};

export default Tags;
