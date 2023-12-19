import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "./ui/header-nav";

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const baskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});

const fontMain = inter;

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
