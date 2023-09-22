import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Profile",
  description: "Developer Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bai_jamjuree.className}>{children}</body>
    </html>
  );
}
