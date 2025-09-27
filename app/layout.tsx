import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Autotabs",
  description:
    "Autotabs automatically closes old, unused tabs — so you can browse faster and stress less.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
