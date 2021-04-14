import React from "react";

function Dots(props) {
	return (
		<span>
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="92px"
				height="92px"
				viewBox="0 0 92 92"
				enable-background="new 0 0 92 92"
				style={{ width: props.width, height: props.height }}
				onClick={props.handleClick}
			>
				<path
					id="XMLID_30_"
					d="M21,53c-1.8,0-3.7-0.8-5-2.1c-1.3-1.3-2-3.1-2-4.9c0-1.8,0.8-3.6,2-5c1.3-1.3,3.1-2,5-2c1.8,0,3.6,0.8,4.9,2
	c1.3,1.3,2.1,3.1,2.1,5c0,1.8-0.8,3.6-2.1,4.9C24.6,52.2,22.8,53,21,53z M50.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5
	c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1
	C47.8,53,49.6,52.2,50.9,50.9z M75.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2
	c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1C72.8,53,74.6,52.2,75.9,50.9z"
				/>
			</svg>
		</span>
	);
}

export default Dots;
