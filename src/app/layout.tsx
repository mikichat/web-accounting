import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "신회계사 사무소 | 회계감사, 경영자문, 기업세무",
  description: "신뢰를 바탕으로 기업의 재무 건장성을 확보하고 최적의 성장 전략을 제안합니다. 회계감사, 경영자문, 기업세무 전문",
  keywords: ["회계사", "감사", "세무", "경영자문", "대구", "회계事务所"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
