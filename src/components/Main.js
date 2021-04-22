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
			console.log("Working!!!!!!!");
			this.setState((prevstate) => prevstate.notes.push(TheNote));
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

	render() {
		console.log(this.state);
		return (
			<div>
				<Navbar
					handleAdd={this.handleAdd}
					handleSubmit={this.handleSubmit}
				/>
				<Content notes={this.state.notes} />
			</div>
		);
	}
}

export default Main;
