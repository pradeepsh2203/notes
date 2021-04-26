import React from "react";
import SearchBox from "./SearchBox";
import Accessibility from "./Accessibility";
import "../css/navbar.css";

function Navbar(props) {
	return (
		<div className="flexbox">
			<SearchBox handleSubmit={props.handleSubmit} />
			<Accessibility
				handleAdd={props.handleAdd}
				handleDelete={props.handleDelete}
			/>
			<div className="email">pradeepsharma.sharma095@gmail.com</div>
		</div>
	);
}

export default Navbar;
