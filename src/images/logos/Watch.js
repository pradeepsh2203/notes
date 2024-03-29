import React from "react";

function Watch(props) {
	return (
		<span>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{
					width: props.width,
					height: props.height,
				}}
				onClick={props.handleClick}
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 6C12.5523 6 13 6.44772 13 7V11.5194L17.6247 15.2191C18.056 15.5641 18.1259 16.1934 17.7809 16.6247C17.4359 17.056 16.8066 17.1259 16.3753 16.7809L11.3753 12.7809C11.1381 12.5911 11 12.3038 11 12V7C11 6.44772 11.4477 6 12 6Z"
					fill="#293644"
				/>
			</svg>
		</span>
	);
}

export default Watch;
