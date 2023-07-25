import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
    src: "../../public/fonts/CirrusCumulus.woff",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Dora Portfolio Page",
    description: "Doras portfolio page built using Next.js v13",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={myFont.className}>
            <body>{children}</body>
        </html>
    );
}
