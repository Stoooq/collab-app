import clsx from "clsx";
import React from "react";

const Database = ({ selected }: { selected: boolean }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="20"
				height="8"
				x="2"
				y="2"
				rx="2"
				ry="2"
				className={clsx(
					"dark:group-hover:fill-[#4d4ae8] transition-all dark:fill-[#353346] fill-[#C0BFC4] group-hover:fill-[#7540A9]",
					{ "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected }
				)}
			/>
			<rect
				width="20"
				height="8"
				x="2"
				y="14"
				rx="2"
				ry="2"
				className={clsx(
					"dark:group-hover:fill-[#4d4ae8] transition-all dark:fill-[#353346] fill-[#C0BFC4] group-hover:fill-[#7540A9]",
					{ "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected }
				)}
			/>
			<line x1="6" x2="6.01" y1="6" y2="6" color="#adadad" />
			<line x1="6" x2="6.01" y1="18" y2="18" />
		</svg>
	);
};

export default Database;
