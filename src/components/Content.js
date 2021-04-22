import React from "react";
import "../css/content.css";

function Content(props) {
	console.log("props");
	console.log(props);
	return (
		<div className="grid">
			<div className="gridContent col-span-1">
				{props.notes.map((note) => (
					<p
						className={
							note.selected === true ? "notes selected" : "notes"
						}
						key={note.id}
					>
						{note.title}
					</p>
				))}
			</div>
			<div className="gridContent col-span-2">
				<p>Edit your notes</p>
				<textarea value={props.description} className="text" />
			</div>
		</div>
	);
}

export default Content;
