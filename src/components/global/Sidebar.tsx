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

const Sidebar = () => {
	return (
		<nav className="sticky top-0 h-screen flex flex-col justify-center p-6">
			<div className="border-[1px] border-primary/20 rounded-xl py-6">
				<div className="p-4">
					<Link href="/">Collab</Link>
				</div>
				<div className="flex flex-col items-center px-4 gap-4">
					<Links />
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;

const Links = () => {
	const pathName = usePathname();

	const links = [
		{ label: "Dashboard", href: "/dashboard", component: Home },
		{ label: "Settings", href: "/settings", component: Settings },
		{ label: "Payment", href: "/payment", component: Payment },
		{ label: "Database", href: "/database", component: Database },
		{ label: "Projects", href: "/projects", component: Folder },
    { label: "Groups", href: "/groups", component: Person }
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
											"group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
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
