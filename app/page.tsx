"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { Cat, Dog, Kakao } from "@/constants/image";

export default function Home() {
  return (
    <div id="splash" className="content-area">
      <div className="content">
        <div className="my-10">
          {/* '반'과 '짝' 위에 점을 상대 위치로 배치합니다. */}
          <div className="start-text text-6xl tracking-[3px]">
            <span className="relative inline-block">
              {/* '반' 위의 점 */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+2.5rem)] w-3 h-3 bg-white rounded-full" />
              반
            </span>
            <span className="relative inline-block">
              {/* '짝' 위의 점 */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+2.5rem)] w-3 h-3 bg-white rounded-full" />
              짝
            </span>
            <span>친구</span>
          </div>

          <div className="flex-row">
            <Image
              className="w-36 h-52"
              width={84}
              height={208}
              src={Dog}
              alt="Dog image"
              onError={(e) => (e.currentTarget.src = Dog)} // Fallback
            />
            <Image
              className="w-36 h-52"
              width={84}
              height={208}
              src={Cat}
              alt="Cat image"
              onError={(e) => (e.currentTarget.src = Cat)} // Fallback
            />
          </div>

          <div>
            <span className="start-text text-2xl tracking-wider">반</span>
            <span className="start-text text-xl tracking-wide">려동물 </span>
            <span className="start-text text-2xl tracking-wider">짝</span>
            <span className="start-text text-xl tracking-wide">
              꿍을 위한 플랫폼
            </span>
          </div>
        </div>

        <div className="w-full max-w-xs">
          <Button
          src={"/"}
            // 누르면 개발 중이라고 설명하는 모달 창 띄우기 수정
            bgColor="bg-yellow-400"
            textColor="text-black"
          >
            <Image
              className="w-4 h-3.5"
              width={16}
              height={14}
              src={Kakao}
              alt="kakao"
              onError={(e) => (e.currentTarget.src = Kakao)} // Fallback
            />
            카카오톡으로 시작하기
          </Button>
          <Button src="/login" bgColor="bg-white" textColor="text-indigo-400">
            이메일로 시작하기
          </Button>
        </div>

        <div className="">
          <span className="text-blue-50 text-sm font-medium leading-snug">
            계정이 없으신가요?{" "}
          </span>
          <Link href={"/signup"} className=" text-sm font-bold leading-snug">
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}
