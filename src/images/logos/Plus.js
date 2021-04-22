import React from "react";

function Plus(props) {
	return (
		<span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-plus-square"
				style={{
					width: props.width,
					height: props.height,
					strokeWidth: "2px",
					stroke: "#696969",
				}}
				onClick={props.handleClick}
			>
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
				<line x1="12" y1="8" x2="12" y2="16"></line>
				<line x1="8" y1="12" x2="16" y2="12"></line>
			</svg>
		</span>
	);
}

export default Plus;
