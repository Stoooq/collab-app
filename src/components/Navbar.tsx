"use client";

import Link from "next/link";
import React from "react";
import Atom from "@/components/icons/atom";
import { useTheme } from "next-themes";
import { HoverBorderGradient } from "./HoverBorderGradient";

const Navbar = () => {
	const { setTheme, theme } = useTheme();

	return (
		<nav className="sticky right-0 left-0 top-0 py-4 px-4 backdrop-blur-lg z-[100] border-b-[1px] border-primary">
			<div className="flex justify-between">
				<div className="flex">
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
				<div className="flex">
					<HoverBorderGradient as="button">
						<Link href="/">Login</Link>
					</HoverBorderGradient>
					<HoverBorderGradient as="button">
					<Link href="/">Register</Link>
					</HoverBorderGradient>
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