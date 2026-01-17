import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blobythingy",
  description: "A Next.js starter with Tailwind CSS and Vite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
