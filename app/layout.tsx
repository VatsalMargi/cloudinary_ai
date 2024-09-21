import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

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
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
      <footer className="w-full py-6 bg-white text-center flex justify-center">
        <p className="text-gray-500 w-1/3">© 2024 Helper.ai. All rights reserved.</p>
      </footer>
    </html>
    </ClerkProvider>
  );
}
