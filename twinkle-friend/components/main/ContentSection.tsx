import { ChevronRight } from "lucide-react";
import React from "react";

interface ContentSectionProps {
  title: React.ReactNode;
  chips?: string[];
  children: React.ReactNode;
}

/**
 * 수평 스크롤이 포함된 메인 페이지 콘텐츠 섹션
 */
export default function ContentSection({
  title,
  chips,
  children,
}: ContentSectionProps) {
  return (
    <section className="flex flex-col w-full gap-4">
      {/* 1. 섹션 헤더 (제목, 더보기 버튼) */}
      <div className="flex justify-between items-center px-6">
        <h2 className="text-[19px] font-semibold text-black">{title}</h2>
        <ChevronRight size={24} className="text-[#555555]" />
      </div>

      {/* 2. 칩 목록 (선택적) */}
      {chips && (
        <div className="flex gap-2.5 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {chips.map((chip, index) => (
            <span
              key={index}
              className={`flex-shrink-0 h-[30px] px-6 py-1.5 rounded-full text-xs font-semibold ${
                index === 0
                  ? "bg-[#6d81ff] text-white"
                  : "bg-white border border-[#b6c6fd] text-[#6d81ff]"
              }`}
            >
              {chip}
            </span>
          ))}
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
