import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "TSender",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body>{props.children}</body>
      </Providers>
    </html>
  );
}
