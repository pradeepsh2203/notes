import React from "react";
import Plus from "../images/logos/Plus";
import Info from "../images/logos/Info";
import Watch from "../images/logos/Watch";
import Delete from "../images/logos/Delete";
import Dots from "../images/logos/Dots";

function InfoClicked() {
	var info =
		"Hello Myself Pradeep Sharma I am trying to build this project\n which is going to help user to mantain his/her notes on the go\n they could add a note or delete an exisiting one  or edit a note all in one place";
	alert(info);
	// console.log("Clicked");
}
function Time() {
	var d = new Date();
	var answer = `Date : ${d.getDate()}
Month : ${d.getMonth()}
Year : ${d.getFullYear()}
Hour : ${d.getHours()}
Minute : ${d.getMinutes()}
Second : ${d.getSeconds()}`;
	window.alert(answer);
}
function Invalid() {
	alert("This button has no function, Yet!!!.");
}

function Accessibility(props) {
	return (
		<div className="features">
			<Plus width="30px" height="30px" handleClick={props.handleAdd} />
			<Info width="26px" height="26px" handleClick={InfoClicked} />
			<Watch width="26px" height="26px" handleClick={Time} />
			<Delete
				width="26px"
				height="26px"
				handleClick={props.handleDelete}
			/>
			<Dots width="26px" height="26px" handleClick={Invalid} />
		</div>
	);
}

export default Accessibility;
