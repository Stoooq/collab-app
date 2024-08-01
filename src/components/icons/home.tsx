import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

const Home = ({ selected }: Props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				className={clsx(
					"dark:group-hover:fill-[#4d4ae8] transition-all dark:fill-[#353346] fill-[#C0BFC4] group-hover:fill-[#7540A9]",
					{ "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected }
				)}
			/>
			<path
				d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
				className={clsx(
					"dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ",
					{ "dark:!fill-[#9F54FF] fill-[#BD8AFF]": selected }
				)}
			/>
		</svg>
	);
};

export default Home;
