"use client";

import {
  Community,
  CommunityClick,
  Home,
  HomeClick,
  Map,
  MapClick,
  User,
  UserClick,
} from "@/constants/image";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 하단 고정 네비게이션 컴포넌트
 * usePathname을 사용해 현재 경로에 따라 활성 아이콘을 표시합니다.
 */
export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/main/", label: "홈", icon: Home, iconPage: HomeClick },
    { href: "/map", label: "지도", icon: Map, iconPage: MapClick },
    {
      href: "/community",
      label: "커뮤니티",
      icon: Community,
      iconPage: CommunityClick,
    },
    {
      href: "/mypage",
      label: "마이페이지",
      icon: User,
      iconPage: UserClick,
    },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center w-full h-[89px] max-w-[390px] mx-auto px-[18px] rounded-tl-[30px] rounded-tr-[30px] bg-white"
      style={{ boxShadow: "0px -6px 10px 0 rgba(0,0,0,0.1)" }}
    >
      {navItems.map((item) => {
        const isActive =
          item.href === "/main"
            ? pathname === item.href
            : pathname.startsWith(item.href);
        const Icon = item.icon;
        const TargetIcon = item.iconPage;

        return (
          <Link
            href={item.href}
            key={item.label}
            className="flex flex-col justify-center items-center h-[60px] w-[60px] gap-1.5"
          >
            <Image
              src={isActive ? TargetIcon : Icon}
              width={26}
              height={26}
              alt={`${Icon}`}
            />
            <p
              className={`text-xs font-semibold text-center ${
                isActive ? "text-[#6d81ff]" : "text-black"
              }`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
