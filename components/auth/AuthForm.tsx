"use client"; // 이 컴포넌트는 이제 state와 effect를 사용합니다.

import { useState, useEffect } from "react";

interface AuthFormProps {
  title: string;
  content?: {
    subTitle: string;
    placeholder: string;
  }[];
  // 이 함수는 모든 input이 유효(비어있지 않음)하면 true,
  // 하나라도 비어있으면 false를 인자로 호출됩니다.
  onValidationChange?: (isValid: boolean) => void;
}

// state를 위한 헬퍼 타입
type InputValues = {
  [key: string]: string; // subTitle을 key로 사용하여 값을 저장합니다.
};

export default function AuthForm({
  title,
  content = [], // 에러 방지를 위해 기본값을 빈 배열로 설정
  onValidationChange,
}: AuthFormProps) {
  // 'content' prop으로부터 초기 state 객체를 생성합니다.
  const initialInputState = content.reduce((acc, item) => {
    acc[item.subTitle] = "";
    return acc;
  }, {} as InputValues);

  const [inputValues, setInputValues] =
    useState<InputValues>(initialInputState);

  // input 변경 핸들러
  const handleChange = (subTitle: string, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [subTitle]: value,
    }));
  };

  useEffect(() => {
    const allValid = content.every((item) => {
      return (
        inputValues[item.subTitle] && inputValues[item.subTitle].trim() !== ""
      );
    });

    // onValidationChange prop이 전달되었을 때만 함수를 호출
    if (onValidationChange) {
      onValidationChange(allValid);
    }
  }, [inputValues, content, onValidationChange]);

  return (
    // 원본의 px-7은 부모인 layout.tsx가 이미 처리하고 있습니다.
    <div className="w-full pt-4">
      {/* 제목 */}
      <h1 className="w-full h-10 justify-start text-black text-3xl font-semibold leading-none mb-8">
        {title}
      </h1>

      <form className="flex flex-col gap-6">
        {content.map((text, idx) => {
          const { subTitle, placeholder } = text;

          // --- 💡 수정된 부분 ---
          // subTitle에 "비밀번호"가 포함되어 있는지 확인하여 type을 동적으로 설정합니다.
          const inputType =
            subTitle.includes("비밀번호") || subTitle.includes("비밀번호 확인")
              ? "password"
              : "text";
          // --- 💡 ---

          return (
            <div
              key={idx}
              className="w-full inline-flex flex-col justify-start items-start gap-1.5"
            >
              <div className="py-1.5 inline-flex justify-center items-center">
                <p className="justify-start text-black text-base font-semibold leading-normal">
                  {subTitle}
                </p>
              </div>
              <input
                className="self-stretch h-14 px-4 py-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-start items-center gap-2 text-neutral-400 text-base font-medium leading-normal placeholder:text-neutral-400"
                placeholder={placeholder}
                type={inputType} // 💡 type 속성 적용
                value={inputValues[subTitle]} // state와 input 값을 연결 (제어 컴포넌트)
                onChange={(e) => handleChange(subTitle, e.target.value)} // 변경 이벤트 연결
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
