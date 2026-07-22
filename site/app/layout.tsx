import type { Metadata } from "next";

import { ThemeProvider } from "@site/lib/theme-provider";

import "./globals.css";
import "./rnw.generated.css";

export const metadata: Metadata = {
  title: "packed.mobile",
  description:
    "Standalone React Native Reusables registry for Packed — warm, sunset-led components for Expo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full font-sans antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "globalThis.__DEV__=globalThis.__DEV__??true;",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
