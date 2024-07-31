import { CardWrapper } from "./card-wrapper";
import { TriangleAlert } from "lucide-react";

export const ErrorCard = () => {
	return (
		<CardWrapper
			headerLabel="Oops! Something went wrong!"
			backButtonHref="/auth/login"
			backButtonLabel="Back to login"
		>
			<div className="w-full flex justify-center">
				<TriangleAlert />
			</div>
		</CardWrapper>
	);
};
