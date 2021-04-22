import React, { Component } from "react";

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div className="searchbox">
				<form
					style={{ margin: "auto", padding: "auto" }}
					onSubmit={(event) => {
						event.preventDefault();
						this.props.handleSubmit(this.state.search);
					}}
				>
					<button
						type="submit"
						style={{
							border: "0px",
							background: "#FFF",
							margin: "auto 0",
						}}
					>
						<svg
							class="svg-icon search-icon"
							aria-labelledby="title desc"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 19.9 19.7"
						>
							<title id="title">Search Icon</title>
							<desc id="desc">A magnifying glass icon.</desc>
							<g class="search-path" fill="none" stroke="#848F91">
								<path
									stroke-linecap="square"
									d="M18.5 18.3l-5.4-5.4"
								/>
								<circle cx="8" cy="8" r="7" />
							</g>
						</svg>
					</button>

					<input
						type="text"
						placeholder="Search your note"
						value={this.state.search}
						name="search"
						onChange={this.handleChange}
						style={{
							height: "20px",
							padding: "4px",
							border: "0px",
						}}
					/>
				</form>
			</div>
		);
	}
}

export default SearchBox;
