"use client";

import Link from "next/link";
import React from "react";
// lucide-react 아이콘을 사용하여 SVG를 대체합니다. (Canvas 미리보기용 Mock 포함)
// import { ChevronLeft, Settings, Camera, ClipboardList, Calendar, Heart, Edit, MessageSquare, ChevronRight } from "lucide-react";

// --- Refactored Sub-components ---

/**
 * 1. 마이페이지 상단 헤더
 * (파란색 배경)
 */
const MyPageHeader: React.FC = () => (
  <header className="flex justify-between items-center w-full px-6 py-3">
    <div className="flex items-center gap-3">
      {/* '뒤로가기' 버튼. 실제로는 Link나 router.back()을 사용합니다. */}
      <Link href="/" className="cursor-pointer">
        <ChevronLeft size={24} className="text-white" />
      </Link>
      <p className="text-lg font-semibold text-white">마이페이지</p>
    </div>
    {/* '설정' 버튼 */}
    <a href="/settings" className="cursor-pointer">
      <Settings size={24} className="text-white" />
    </a>
  </header>
);

/**
 * 2. 프로필 섹션
 * (파란색 배경, 하단 패딩으로 흰색 카드와 겹칠 공간 확보)
 */
const ProfileSection: React.FC = () => (
  <section className="flex flex-col items-center gap-4 pb-16">
    {/* 프로필 이미지 컨테이너 */}
    <div className="relative">
      <img
        src="https://placehold.co/108x108/white/6D81FF?text=콩" // 고양이.png 대신 플레이스홀더
        alt="프로필 이미지"
        className="w-[108px] h-[108px] rounded-full object-cover"
      />
      {/* 프로필 수정 버튼 */}
      <button
        className="absolute bottom-0 right-0 flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#b6c6fd]"
        style={{ boxShadow: "0px 0px 8px 0 rgba(0,0,0,0.25)" }}
      >
        <Camera size={16} className="text-white" />
      </button>
    </div>
    {/* 닉네임 */}
    <p className="text-lg font-bold text-center text-white">닉네임</p>
  </section>
);

/**
 * 3. 재사용 가능한 메뉴 아이템
 */
interface MenuItemProps {
  icon: React.ReactNode;
  label: React.ReactNode; // "작성한 리뷰 • 글" 처럼 복잡한 텍스트를 위해 ReactNode로 변경
}
const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <a
    href="#" // 실제로는 Link href가 전달되어야 함
    className="flex justify-between items-center w-full h-16 py-[18px] border-b-[1.5px] border-[#e3e3e3] cursor-pointer"
  >
    <div className="flex items-center gap-2.5">
      {icon}
      <div className="text-base font-medium text-[#1c1c1c]">{label}</div>
    </div>
    <ChevronRight size={24} className="text-[#8E8E8E]" />
  </a>
);

/**
 * 4. 메뉴 리스트 섹션
 * (흰색 배경, 상단 오버레이)
 */
const MenuSection: React.FC = () => (
  <section
    className="w-full flex-grow bg-white rounded-tl-[30px] rounded-tr-[30px] mt-[-30px] pt-8 px-6" // 💡 mt-[-30px]로 오버레이 효과
  >
    <div className="flex flex-col">
      <MenuItem
        icon={<ClipboardList size={24} className="text-black" />}
        label="최근 클릭한"
      />
      <MenuItem
        icon={<Calendar size={24} className="text-black" />}
        label="예약내역"
      />
      <MenuItem
        icon={<Heart size={24} className="text-black" />}
        label="찜 목록"
      />
      <MenuItem
        icon={<Edit size={24} className="text-black" />}
        label={
          <div className="flex justify-center items-center gap-[5px]">
            <p>작성한 리뷰</p>
            <svg
              width={4}
              height={4}
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={2} cy={2} r={2} fill="black" />
            </svg>
            <p>글</p>
          </div>
        }
      />
      <MenuItem
        icon={<MessageSquare size={24} className="text-black" />}
        label="고객센터"
      />
      {/* 마지막 아이템은 border가 없으므로 MenuSection에서 마지막 패딩으로 처리 */}
    </div>
  </section>
);

// --- Main MyPage Component ---
export default function MyPage() {
  return (
    // 이 페이지는 (main) layout 안에서 렌더링되므로, 하단 탭바는 자동으로 생성됩니다.
    // 페이지 자체는 수직 스크롤이 가능해야 합니다.
    <div className="flex flex-col w-full max-w-[390px] mx-auto min-h-full">
      {/* 1. 상단 파란색 배경 섹션 */}
      <div className="bg-[#6d81ff]">
        <MyPageHeader />
        <ProfileSection />
      </div>

      {/* 2. 하단 흰색 컨텐츠 섹션 */}
      <MenuSection />
    </div>
  );
}
