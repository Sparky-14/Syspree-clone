import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development | Syspree – Drive Profits Now",
  description:
    "Transform your business with Syspree's expert Digital Marketing and Web Development solutions. Boost traffic, conversions, and profits. Start your growth journey today.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
