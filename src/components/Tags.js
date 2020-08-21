import React from "react";
import "../style/main.scss";

const uuidv4 = require("uuid/v4");

const Tags = (props) => {
	const tags = props.tags.map((value) => (
		<div
			className={`tags ${value.toLowerCase().replace(" ", "-")}`}
			key={uuidv4()}
		>
			<div className="tag-text">{value}</div>
		</div>
	));

	return <div>{tags}</div>;
};

export default Tags;
