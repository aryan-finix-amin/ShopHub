import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./_utils/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopHub",
  description:
    "A website for an online clothing store features a range of clothing categories along with excellent photos, thorough descriptions, and size charts. It provides safe checkout, several payment methods, tailored suggestions, and easy navigation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
