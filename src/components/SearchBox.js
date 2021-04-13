import React from "react";

function SearchBox(prop) {
	return (
		<div className="searchbox">
			<form style={{ margin: "auto" }}>
				<button
					type="submit"
					style={{
						border: "0px",
						background: "#FFF",
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
					value=""
					name="search"
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
export default SearchBox;
