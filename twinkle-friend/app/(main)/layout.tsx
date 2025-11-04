"use client"; // BottomNavigation이 usePathname을 사용하므로 "use client"가 필요합니다.

import React from "react";
import BottomNavigation from "@/components/main/BottomNavigation";

/**
 * (main) 그룹을 위한 공통 레이아웃
 * 이 레이아웃은 하단 탭 네비게이션을 포함합니다.
 */
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 전체 화면을 차지하되, 하단 네비게이션 높이(약 89px)만큼 패딩을 줍니다.
    <div className="flex-grow pb-[89px]">
      {children}
      {/* 하단 네비게이션은 화면에 고정됩니다. */}
      <BottomNavigation />
    </div>
  );
}
