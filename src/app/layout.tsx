import type { Metadata } from "next";
import "./globals.css";
import { ooohBaby, notoSans, raleway } from "./fonts";

import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          ooohBaby.variable,
          notoSans.variable,
          raleway.variable,
          "antialiased"
        )}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
