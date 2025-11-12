// lib/fonts.ts

import LocalFont from "next/font/local";

// 1. Pretendard 정의 (예시: 영문용 폰트)
export const Pretendard = LocalFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

// 2. SBAggro 폰트 정의 (예시: 한글용 폰트)
export const SBAggro = LocalFont({
  src: [
    {
      path: "../public/fonts/SB-Aggro-L.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SB-Aggro-M.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SB-Aggro-B.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-SBAggro",
});
