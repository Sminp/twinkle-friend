import type { Metadata } from "next";
import { Pretendard, SBAggro } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "반짝친구",
  description: "반려동물 병원정보제공 및 통합 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Pretendard.variable} ${SBAggro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
