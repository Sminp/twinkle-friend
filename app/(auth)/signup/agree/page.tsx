"use client";

import AgreeAllCheckbox from "@/components/auth/AgreeAllCheckbox";
import AgreementItem, { AgreementTag } from "@/components/auth/AgreementItem";
import AuthForm from "@/components/auth/AuthForm";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/ProgressBar";
import React, { useState } from "react"; // useState import for interactivity
import { useRouter } from "next/navigation"; // 1. useRouter를 import합니다.

// 약관 항목 데이터 타입 정의
interface Agreement {
  id: keyof CheckedState; // state의 key와 일치시킴
  title: string;
  tag: AgreementTag;
}

// state 타입 정의
interface CheckedState {
  service: boolean;
  location: boolean;
  privacy: boolean;
  marketing: boolean;
}

const agreementData: Agreement[] = [
  { id: "service", title: "서비스 이용약관", tag: "필수" },
  { id: "location", title: "위치기반 서비스 이용약관", tag: "필수" },
  { id: "privacy", title: "개인정보 수집, 제공", tag: "필수" },
  { id: "marketing", title: "마케팅 수신 동의", tag: "선택" },
];

export default function Agree() {
  const [checkedState, setCheckedState] = useState<CheckedState>({
    service: false,
    location: false,
    privacy: false,
    marketing: false,
  });
  const router = useRouter();

  // 필수 약관이 모두 체크되었는지 확인
  const requiredAgreed =
    checkedState.service && checkedState.location && checkedState.privacy;

  // 전체 동의 상태 (필수 + 선택)
  const allAgreed = Object.values(checkedState).every(Boolean);

  // 개별 항목 토글 (id 타입을 CheckedState의 key로 지정)
  const handleToggle = (id: keyof CheckedState) => {
    setCheckedState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 전체 동의 토글 (전체가 체크된 상태면 전부 해제, 아니면 전부 체크)
  const handleToggleAll = () => {
    const newState = !allAgreed;
    setCheckedState({
      service: newState,
      location: newState,
      privacy: newState,
      marketing: newState,
    });
  };

  const footerContent = (
    <Button
      bgColor={requiredAgreed ? "bg-[#6D81FF]" : "bg-stone-300"}
      textColor="text-white"
      disabled={!requiredAgreed}
      onClick={() => {
        if (!requiredAgreed) {
          console.log("필수 약관에 동의해야 합니다.");
          // (실제로는 alert 대신 커스텀 모달을 띄워야 함)
        } else {
          router.push("/");
        }
      }}
    >
      동의하고 시작하기
    </Button>
  );

  return (
    // 'AuthPageLayout'이 스크롤과 고정 푸터를 담당합니다.
    <AuthPageLayout footer={footerContent}>
      {/* 'AuthForm'은 스크롤될 컨텐츠 영역(children)으로 전달됩니다. */}
      {/* AuthForm의 content prop을 빼서 폼(input)은 렌더링하지 않음 */}
      <AuthForm title="회원가입" />

      {/* 진행 바 (현재 3단계 중 1단계로 가정) */}
      <ProgressBar step={1} totalSteps={3} />

      {/* 'absolute' 대신 'flex-col'과 'gap'을 사용해 수직으로 쌓습니다.
        'w-full'과 'px-4' (또는 'px-0') 등으로 너비를 조절합니다.
      */}
      <div className="flex flex-col w-full gap-6 mt-8">
        {/* 약관 전체 동의 */}
        <AgreeAllCheckbox isChecked={allAgreed} onToggle={handleToggleAll} />

        {/* 구분선 */}
        <div className="border-t border-gray-200"></div>

        {/* 개별 약관 목록 */}
        <div className="flex flex-col gap-5">
          {agreementData.map((item) => (
            <AgreementItem
              key={item.id}
              tag={item.tag}
              title={item.title}
              isChecked={checkedState[item.id]}
              onToggle={() => handleToggle(item.id)}
              onShowDetails={() => alert(`'${item.title}' 상세보기`)} // (실제로는 Link나 모달로 처리)
            />
          ))}
        </div>
      </div>
    </AuthPageLayout>
  );
}
