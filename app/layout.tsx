import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "./ui/header-nav";

const inter = Inter({ subsets: ["latin"] });
const baskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const fontMain = baskerville;

export const metadata: Metadata = {
	title: "Cerulean Web Studio",
	description:
		"Web design and development services agency based in Sherman Oaks, California.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${fontMain.className} bg-gradient-to-br from-cws-bg-1 to-cws-bg-2`}
			>
				<main className="mx-auto min-h-screen max-w-screen-2xl ">
					<HeaderNav />
					{children}
				</main>
			</body>
		</html>
	);
}
