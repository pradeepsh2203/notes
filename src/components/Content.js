import React from "react";
import "../css/content.css";

function Content(props) {
	return (
		<div className="grid">
			<div className="gridContent col-span-1">
				{props.notes.map((note) => (
					<p
						className={
							note.selected === true ? "notes selected" : "notes"
						}
						id={note.id}
						key={note.id}
						onClick={props.handleClick}
					>
						{note.title}
					</p>
				))}
			</div>
			<div className="gridContent col-span-2">
				<p>Edit your notes</p>
				{props.id === -1 ? (
					<h1 className="nothingSelected">
						Please select something to edit
					</h1>
				) : (
					<textarea
						value={props.description}
						placeholder="Your Notes comes here"
						className="text"
						onChange={(event) => {
							props.handleChange(event.target.value, props.id);
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default Content;
