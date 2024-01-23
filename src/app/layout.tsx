import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";

import Providers from "./providers";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rohit Sutar",
  description: "Developer Profile",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${bai_jamjuree.className} bg-bodyColor dark:bg-black text-textColor dark:text-bodyColor`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
