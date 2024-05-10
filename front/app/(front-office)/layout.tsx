import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css"
 
import { cn } from "@/lib/utils"
import GlobalNavbar from "@/components/global-navbar";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
				>
					<GlobalNavbar />
					{children}
				</body>
    </html>
  );
}
