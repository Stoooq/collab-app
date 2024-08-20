"use client";

import Link from "next/link";
import Home from "../icons/home";
import Settings from "../icons/settings";
import Payment from "../icons/payment";
import Database from "../icons/database";
import { usePathname } from "next/navigation";
import Folder from "../icons/folder";
import Person from "../icons/person";
import UserAvatar from "./UserAvatar";
import { Card } from "../ui/card";
import AnimatedBackground from "../custom/AnimatedBackground";

const Sidebar = () => {
	return (
		<nav className="sticky top-0 h-screen flex flex-col justify-center pl-6">
			<Card className="flex flex-col items-center gap-4 p-4">
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
			<AnimatedBackground
				defaultValue={pathName}
				className="rounded-md dark:bg-purple-900"
				transition={{
					type: "spring",
					bounce: 0.2,
					duration: 0.3,
				}}
			>
				{links.map((link) => (
					<Link
						href={link.href}
						key={link.label}
						data-id={link.href}
						type="button"
						className="group inline-flex w-full p-2 items-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950"
					>
						<div className="flex gap-4">
							<div className="scale-[1.25]">
								<link.component selected={pathName === link.href} />
							</div>
							<p>{link.label}</p>
						</div>
					</Link>
				))}
			</AnimatedBackground>
		</>
	);
};
