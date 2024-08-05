import { ReactNode } from "react";

interface CardWrapperProps {
	children: ReactNode;
	headerLabel: string;
}

const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
	return (
		<div className="border-[1px] border-primary/20 rounded-lg w-full">
			<div className="flex justify-center w-full border-b-[1px] border-primary/20">
				<p className="text-4xl font-bold py-4">{headerLabel}</p>
			</div>
			<div className="p-6">{children}</div>
		</div>
	);
};

export default CardWrapper;
