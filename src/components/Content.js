import React from "react";

function Content() {
	return (
		<div className="grid">
			<div className="gridContent col-span-1">
				<p>The Notes titles has to be displayed here</p>
			</div>
			<div className="gridContent col-span-2">
				<textarea value="The note has to be displayed here and it is going to contain " />
			</div>
		</div>
	);
}

export default Content;
