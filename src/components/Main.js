import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleClick(event) {
		const key = event.target.id;
		this.setState(function (prevState) {
			for (let i = 0; i < prevState.notes.length; i++) {
				prevState.notes[i].selected = false;
			}
			prevState.notes[key].selected = true;
			return { notes: prevState.notes };
		});
	}

	handleAdd() {
		var titile = "";
		var userInput = window.prompt("Please Input title for your note", "");
		if (userInput != null && userInput != "") {
			var TheNote = {
				title: userInput,
				description: "",
				selected: false,
				id: this.state.notes.length === 0 ? 0 : this.state.notes.length,
			};
			this.setState((prevstate) => prevstate.notes.push(TheNote));
		}
	}

	handleDelete() {
		var deleteNote = window.confirm("Are you sure you want to delete it??");
		if (deleteNote) {
			this.setState(function (prevState) {
				for (var i = 0; i < prevState.notes.length; ) {
					if (prevState.notes[i].selected) {
						prevState.notes.splice(i, 1);
					} else {
						if (i == 0) {
							prevState.notes[i].id = 0;
						} else {
							prevState.notes[i].id =
								prevState.notes[i - 1].id + 1;
						}
						i++;
					}
				}

				return {
					notes: prevState.notes,
				};
			});
		}
	}

	handleSubmit(value) {
		this.setState(function (prevState) {
			for (var i = 0; i < prevState.notes.length; i++) {
				if (prevState.notes[i].title === value)
					prevState.notes[i].selected = true;
				else prevState.notes[i].selected = false;
			}

			return {
				notes: prevState.notes,
			};
		});
	}

	handleDescription(value, id) {
		this.setState(function (prevState) {
			prevState.notes[id].description = value;
			return { notes: prevState.notes };
		});
	}

	render() {
		let id = -1;
		let description = "";
		for (let i = 0; i < this.state.notes.length; i++) {
			if (this.state.notes[i].selected) {
				id = i;
				description = this.state.notes[i].description;
			}
		}
		console.log(this.state.notes);
		return (
			<div>
				<Navbar
					handleAdd={this.handleAdd}
					handleSubmit={this.handleSubmit}
					handleDelete={this.handleDelete}
				/>
				<Content
					notes={this.state.notes}
					handleClick={this.handleClick}
					handleChange={this.handleDescription}
					description={description}
					id={id}
				/>
			</div>
		);
	}
}

export default Main;
