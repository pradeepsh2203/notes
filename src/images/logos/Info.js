import React from "react";

function Info(props) {
	return (
		<span>
			<svg
				id="i-info"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				fill="none"
				stroke="#000000"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				style={{
					width: props.width,
					height: props.height,
					strokeWidth: "2px",
					stroke: "#0000FF",
				}}
				onClick={props.handleClick}
			>
				<path d="M16 14 L16 23 M16 8 L16 10" />
				<circle cx="16" cy="16" r="14" />
			</svg>
		</span>
	);
}

export default Info;
