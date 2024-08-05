import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider, QueryProvider } from "@/utils/Providers";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const font = DM_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Co-Lab",
	description: "Your Key To Collaboration",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	return (
		<SessionProvider session={session}>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased dark:bg-dot-white/15 bg-dot-black/15",
						font.variable
					)}
				>
					<QueryProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="light"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</QueryProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
