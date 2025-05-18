import type { Metadata } from "next";
import "./globals.css";
import { ooohBaby, notoSans, raleway } from "./fonts";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import clsx from "clsx";
import { MobileMenuProvider } from "@/providers/MobileMenuProvider";
import { ScrollProvider } from "@/providers/ScrollProvider";

export const metadata: Metadata = {
  title: "Hi I'm Ryan | Full Stack Web Developer",
  description: "Resume site for Ryan Griffiths - full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MobileMenuProvider>
        <ScrollProvider>
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
        </ScrollProvider>
      </MobileMenuProvider>
    </html>
  );
}
