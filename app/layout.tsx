import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "./ui/sections/header";
import { Footer } from "./ui/sections/footer";
import { Providers } from "./providers";
import { SEO } from "./data";

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
  title: SEO.defaultTitle + " | " + SEO.siteName,
  description: SEO.defaultDescription,
  keywords: SEO.defaultTags,
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
          <main className="mx-auto min-h-screen max-w-screen-2xl flex flex-col">
            <Header />
            <article className="flex-1">{children}</article>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
