import clsx from "clsx";
import React from "react";

const person = ({ selected }: { selected: boolean }) => {
	return (
		<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" className={clsx(
					"dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
					{ "dark:!fill-[#C8C7FF] fill-[#7540A9] ": selected }
				)} />
			<circle cx="12" cy="7" r="4" className={clsx(
					"dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
					{ "dark:!fill-[#C8C7FF] fill-[#7540A9] ": selected }
				)} />
		</svg>
	);
};

export default person;
