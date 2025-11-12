"use client";

import AuthForm from "@/components/auth/AuthForm";
import AuthPageLayout from "@/components/layout/AuthPageLayout"; // 새로 만든 레이아웃
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

// 폼에 필요한 데이터
const content = [
  { subTitle: "아이디", placeholder: "이메일을 입력해주세요." },
  {
    subTitle: "비밀번호",
    placeholder: "영문/숫자/특수문자를 2개 이상 포함한 8~20자",
  },
];

export default function Login() {
  const [isFormValid, setIsFormValid] = useState(false);

  // 1. AuthPageLayout에 전달할 하단 푸터 컨텐츠
  const footerContent = (
    <>
      <div className="w-full text-center mb-4">
        <span className="text-neutral-400 text-sm font-medium leading-snug">
          계정이 없으신가요?{" "}
        </span>
        <Link href="/signup">
          <span className="text-neutral-600 text-sm font-bold leading-snug cursor-pointer">
            회원가입하기
          </span>
        </Link>
      </div>
      <Button
        src="/main"
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
        title="이메일 로그인"
        content={content}
        onValidationChange={setIsFormValid}
      />
    </AuthPageLayout>
  );
}
