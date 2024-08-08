"use client";

import Link from "next/link";
import Home from "../icons/home";
import Settings from "../icons/settings";
import Payment from "../icons/payment";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import Database from "../icons/database";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Folder from "../icons/folder";
import Person from "../icons/person";
import UserAvatar from "./UserAvatar";
import { Card } from "../ui/card";

const Sidebar = () => {
	return (
		<nav className="sticky top-0 h-screen flex flex-col justify-center pl-6">
			<Card className="flex flex-col items-center p-2 gap-4">
				{/* <div className="">
					<Link href="/">Collab</Link>
				</div> */}
				<UserAvatar />
				<div className="flex flex-col items-center gap-4">
					<Links />
				</div>
			</Card>
		</nav>
	);
};

export default Sidebar;

const Links = () => {
	const pathName = usePathname();

	const links = [
		{ label: "Dashboard", href: "/dashboard", component: Home },
		{ label: "Projects", href: "/projects", component: Folder },
		{ label: "Settings", href: "/settings", component: Settings },
		{ label: "Payment", href: "/payment", component: Payment },
		{ label: "Database", href: "/database", component: Database },
		{ label: "Groups", href: "/groups", component: Person },
	];

	return (
		<>
			<TooltipProvider>
				{links.map((link) => (
					<ul key={link.label}>
						<Tooltip delayDuration={0}>
							<TooltipTrigger>
								<li>
									<Link
										href={link.href}
										className={clsx(
											"group h-full w-full flex items-center justify-center scale-[1.5] rounded-sm cursor-pointer",
											{
												"dark:bg-purple-900 bg-purple-200":
													pathName === link.href,
											}
										)}
									>
										<link.component selected={pathName === link.href} />
									</Link>
								</li>
							</TooltipTrigger>
							<TooltipContent side="right">{link.label}</TooltipContent>
						</Tooltip>
					</ul>
				))}
			</TooltipProvider>
		</>
	);
};
