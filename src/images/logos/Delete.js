import React from "react";

function Delete(props) {
	return (
		<span>
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 100.353 100.353"
				style={{
					width: props.width,
					height: props.height,
					strokeWidth: "2px",
					stroke: "#FF0000",
				}}
				onClick={props.handleClick}
			>
				<g>
					<g>
						<path
							d="M68.28,71.726c-0.373,0-0.746-0.142-1.03-0.427L30.691,34.733c-0.569-0.569-0.569-1.491,0-2.06
			s1.491-0.569,2.059,0L69.308,69.24c0.569,0.569,0.569,1.491,0,2.06C69.025,71.583,68.652,71.726,68.28,71.726z"
						/>
						<path
							d="M31.721,71.726c-0.373,0-0.745-0.142-1.03-0.426c-0.569-0.569-0.569-1.491,0-2.06l36.567-36.567
			c0.569-0.569,1.49-0.569,2.059,0c0.569,0.569,0.569,1.491,0,2.06L32.75,71.3C32.466,71.583,32.094,71.726,31.721,71.726z"
						/>
					</g>
					<path
						d="M50.008,100.004C22.433,100.004,0,77.576,0,50.008C0,22.434,22.433,0,50.008,0
		C77.574,0,100,22.434,100,50.008C100,77.575,77.574,100.004,50.008,100.004z M50.008,2.912c-25.969,0-47.095,21.127-47.095,47.095
		c0,25.962,21.127,47.083,47.095,47.083c25.96,0,47.079-21.122,47.079-47.083C97.088,24.039,75.968,2.912,50.008,2.912z"
					/>
				</g>
			</svg>
		</span>
	);
}

export default Delete;
