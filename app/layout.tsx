import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "./ui/sections/header";
import { Footer } from "./ui/sections/footer";
import { Providers } from "./providers";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
const baskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-baskerville",
});

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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${baskerville.variable} bg-gradient-to-br from-cws-bg-1 to-cws-bg-2`}
			>
				<Providers>
					<main className="mx-auto min-h-screen max-w-screen-2xl">
						<Header />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	);
}
