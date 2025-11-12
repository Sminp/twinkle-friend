"use client";

import AuthForm from "@/components/auth/AuthForm";
import AuthPageLayout from "@/components/layout/AuthPageLayout"; // 레이아웃 재사용
import Button from "@/components/ui/Button"; // (경로가 맞다고 가정)
import Link from "next/link"; // (경로가 맞다고 가정)
import { useState } from "react";

// 회원가입 폼에 필요한 데이터
const content = [
  { subTitle: "이메일 아이디", placeholder: "아이디를 입력해주세요." },
  {
    subTitle: "비밀번호",
    placeholder: "영문/숫자/특수문자를 2개 이상 포함한 8~20자",
  },
  {
    subTitle: "비밀번호 확인",
    placeholder: "비밀번호를 한 번 더 입력해주세요.",
  },
];

export default function Signup() {
  const [isFormValid, setIsFormValid] = useState(false);

  // 1. AuthPageLayout에 전달할 하단 푸터 컨텐츠
  const footerContent = (
    <>
      <div className="w-full text-center mb-4">
        <span className="text-neutral-400 text-sm font-medium leading-snug">
          이미 계정이 있으신가요?{" "}
        </span>
        <Link href="/login">
          <span className="text-neutral-600 text-sm font-bold leading-snug cursor-pointer">
            로그인하기
          </span>
        </Link>
      </div>
      <Button
        src="/signup/user"
        bgColor={isFormValid ? "bg-[#6D81FF]" : "bg-stone-300"}
        textColor="text-white"
      >
        다음
      </Button>
    </>
  );

  return (
    // 'AuthPageLayout'이 스크롤과 고정 푸터를 담당합니다.
    <AuthPageLayout footer={footerContent}>
      {/* 'AuthForm'은 스크롤될 컨텐츠 영역(children)으로 전달됩니다. */}
      <AuthForm
        title="회원가입"
        content={content}
        onValidationChange={setIsFormValid}
      />
    </AuthPageLayout>
  );
}
