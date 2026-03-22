import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Deutschschule Vietnam — Học tiếng Đức online từ ZERO đến thi ĐẬU",
  description:
    "Giáo viên AI dạy bạn 1-kèm-1, 24/7, bằng tiếng Việt. Luyện thi Goethe, ÖSD, TestDaF. Rẻ hơn 90% so với trường học.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
