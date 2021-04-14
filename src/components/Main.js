import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			notes: [
				{
					title: "",
					description: "",
					selected: false,
					id: 0,
				},
			],
		};
		this.handleAdd = this.handleAdd.bind(this);
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
			this.setState((prevstate) => {
				prevstate.notes.push(TheNote);
			});
			console.log(this.state);
		}
	}

	render() {
		return (
			<div>
				<Navbar handleAdd={this.handleAdd} />
				<h1> Take on</h1>
				<Content />
			</div>
		);
	}
}

export default Main;
