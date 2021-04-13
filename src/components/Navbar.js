import React from "react";
import SearchBox from "./SearchBox";
import Accessibility from "./Accessibility";
import "../css/navbar.css";

function Navbar() {
	return (
		<div className="flexbox">
			<SearchBox />
			<Accessibility />
			<div className="email">pradeepsharma.sharma095@gmail.com</div>
		</div>
	);
}

export default Navbar;
