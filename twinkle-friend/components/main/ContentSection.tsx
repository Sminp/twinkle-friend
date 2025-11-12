import { ArrowLeft } from "@/constants/image"; // 1. 불필요한 import 제거
import Image from "next/image"; // 2. 불필요한 import 제거
import React from "react";

interface ContentSectionProps {
  title: React.ReactNode;
  chips?: string[];
  selectedChip?: string; // 부모로부터 현재 활성화된 칩을 받음
  // 💡 수정된 부분: (chip: string) => void
  // 어떤 칩이 클릭되었는지 부모(page.tsx)에게 문자열로 알려줘야 합니다.
  onChipClick?: (chip: string) => void;
  children: React.ReactNode;
}

/**
 * 수평 스크롤이 포함된 메인 페이지 콘텐츠 섹션
 */
export default function ContentSection({
  title,
  chips,
  selectedChip, // 부모로부터 받은 활성화된 칩 이름
  onChipClick, // 부모로부터 받은 state 업데이트 함수
  children,
}: ContentSectionProps) {
  return (
    <section className="flex flex-col w-full gap-4">
      {/* 1. 섹션 헤더 (제목, 더보기 버튼) */}
      <div className="flex justify-between items-center px-6">
        <h2 className="text-[19px] font-semibold text-black">{title}</h2>
        {/* 💡 수정된 부분: Image 태그를 아이콘으로 변경 */}
        <Image
          width={24}
          height={24}
          src={ArrowLeft}
          alt={ArrowLeft}
          className="text-[#555555] cursor-pointer"
        />
      </div>

      {/* 2. 칩 목록 (선택적) */}
      {chips && (
        <div className="flex gap-2.5 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {chips.map((chip, index) => {
            // 💡 수정된 부분: 현재 칩이 선택된 칩인지 확인
            const isActive = chip === selectedChip;
            return (
              // 💡 수정된 부분: <span>을 <button>으로 변경
              <button
                type="button"
                key={index}
                // 💡 수정된 부분: onClick 핸들러 연결
                // onChipClick 함수가 존재하면, 클릭된 칩의 이름을 인자로 넣어 호출합니다.
                onClick={() => onChipClick && onChipClick(chip)}
                className={`flex-shrink-0 h-[30px] px-6 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive // 💡 수정된 부분: 활성/비활성 스타일 동적 적용
                    ? "bg-[#6d81ff] text-white"
                    : "bg-white border border-[#b6c6fd] text-[#6d81ff]"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      )}

      {/* 3. 수평 스크롤 컨텐츠 영역 */}
      <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
        {children}
        {/* 오른쪽 여백을 위한 가상 요소 */}
        <div className="flex-shrink-0 w-2 h-full"></div>
      </div>
    </section>
  );
}
