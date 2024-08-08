"use client";

import Link from "next/link";
import React from "react";
import Atom from "@/components/icons/atom";
import { useTheme } from "next-themes";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { LoginButton } from "../auth/login-button";
import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Navbar = () => {
	const { setTheme, theme } = useTheme();
	const { data: user } = useCurrentUser();

	return (
		<nav className="sticky right-0 left-0 top-0 py-4 px-4 backdrop-blur-lg z-[100] border-b-[1px] border-primary">
			<div className="flex justify-between">
				<div className="flex items-center">
					<Atom />
					<div className="ml-8">
						<Links />
					</div>
				</div>
				<button
					onClick={() =>
						theme === "light" ? setTheme("dark") : setTheme("light")
					}
				>
					zmien
				</button>
				<button onClick={() => signOut()}>wyloguj</button>
				<div className="flex gap-4">
					{user ? (
						<>
							{user.name}
							<HoverBorderGradient as="button">
								<Link href="/dashboard">Dashboard</Link>
							</HoverBorderGradient>
						</>
					) : (
						<>
							<LoginButton>
								<HoverBorderGradient as="button">Login</HoverBorderGradient>
							</LoginButton>
							<HoverBorderGradient as="button">
								<Link href="/">Register</Link>
							</HoverBorderGradient>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

const Links = () => {
	const links = [
		{ label: "Home", href: "/" },
		{ label: "Pricing", href: "/pricing" },
		{ label: "Documentation", href: "/documentation" },
	];

	return (
		<>
			<ul className="flex gap-8">
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</>
	);
};
