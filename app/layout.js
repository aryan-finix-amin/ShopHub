import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopHub",
  description:
    "A website for an online clothing store features a range of clothing categories along with excellent photos, thorough descriptions, and size charts. It provides safe checkout, several payment methods, tailored suggestions, and easy navigation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

//first commit by ansh