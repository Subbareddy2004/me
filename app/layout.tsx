import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subbareddy",
  description: "Portifolio website designed by subbareddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-r from-slate-300 to-slate-500">
      <body className={inter.className}>
      <div className="flex p-4 justify-between text-white bg-gradient-to-r from-slate-900 to-slate-700">
    <h2 className="text-xl"><a href="/">Subbareddy</a></h2>
    <ul className="flex space-x-7 mr-12">
      <li><a href="/Home">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Skills">Skills</a></li>
      <li><a href="/Works">Works</a></li>
      <li><a href="/Contact">Contact</a></li>
    </ul>
  </div>
  {children}
        </body>
    </html>
  );
}
