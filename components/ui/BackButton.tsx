"use client";

import { ArrowLeft } from "@/constants/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  className?: string;
  // 아이콘 스타일을 부모로부터 받을 수 있도록 props 추가
  width?: number;
  height?: number;
  color?: string;
}

/**
 * "뒤로가기" (router.back()) 기능을 수행하는 재사용 가능한 버튼입니다.
 * 이 컴포넌트는 "use client"입니다.
 */
export default function BackButton({
  className = "",
  width = 12,
  height = 24,
  color = "currentColor", // 기본값은 부모의 text color (예: text-white)
}: BackButtonProps) {
  // 1. useRouter 훅을 호출합니다.
  const router = useRouter();

  // 2. 뒤로가기 핸들러 함수를 만듭니다.
  const handleBack = () => {
    router.back();
  };

  return (
    // 3. Link 대신 <button> 태그를 사용하고 onClick에 핸들러를 연결합니다.
    <button
      type="button"
      onClick={handleBack}
      className={`cursor-pointer ${className} ${color}`}
      aria-label="뒤로가기" // 웹 접근성을 위해 추가
    >
      {/* 아이콘은 Image/ArrowLeft 대신 
        이전 리팩토링에서 사용한 lucide-react 아이콘 (ChevronLeft)으로 통일했습니다.
      */}
      <Image
        className="w-3 h-6"
        width={width}
        height={height}
        src={ArrowLeft}
        alt="<"
      />
    </button>
  );
}
