import { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Header } from "./header";
import Social from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
	children: ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocials?: boolean;
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocials,
}: CardWrapperProps) => {
	return (
		<Card className="w-[26rem]">
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
            {showSocials && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
		</Card>
	);
};
