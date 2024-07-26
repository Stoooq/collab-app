import clsx from "clsx";
import React from "react";

const newicon = ({ selected }: { selected: boolean }) => {
	return (
		<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
				className={clsx(
					"dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ",
					{ "dark:!fill-[#7540A9] fill-[#BD8AFF] ": selected }
				)}
			/>
			<path
				d="M8.5 2h7"
				className={clsx(
					"dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ",
					{ "dark:!fill-[#7540A9] fill-[#BD8AFF] ": selected }
				)}
			/>
			<path
				d="M7 16h10"
				className={clsx(
					"dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ",
					{ "dark:!fill-[#7540A9] fill-[#BD8AFF] ": selected }
				)}
			/>
		</svg>
	);
};

export default newicon;
