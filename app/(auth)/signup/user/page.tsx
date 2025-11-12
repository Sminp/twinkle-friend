"use client";

import AuthForm from "@/components/auth/AuthForm";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

const content = [
  { subTitle: "이름", placeholder: "이름을 입력해주세요." },
  {
    subTitle: "전화번호",
    placeholder: "전화번호를 입력해주세요.",
  },
  {
    subTitle: "거주지",
    placeholder: "거주지를 입력해주세요.",
  },
];

export default function User() {
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
        src="/signup/agree"
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
