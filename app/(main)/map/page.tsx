"use client";

import BackButton from "@/components/ui/BackButton"; // 1. 실제 import
import Image from "next/image"; // 1. 실제 import
import React from "react";
import { Call, Clock, Filter, GrayMap } from "@/constants/image";

// --- CSS for Hiding Scrollbar ---
const scrollbarHideStyle = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
// --- End of CSS ---

/**
 * 1. 지도 페이지 상단 헤더 (absolute로 변경)
 * (fixed -> absolute)
 */
const MapPageHeader: React.FC = () => (
  <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center w-full h-[50px] max-w-[390px] mx-auto px-6 bg-white">
    <div className="flex items-center gap-3">
      <BackButton />
      <p className="text-lg font-semibold text-black">지도</p>
    </div>
  </header>
);

/**
 * 2. 지도 필터 바 (absolute로 변경)
 * (fixed -> absolute)
 */
const MapFilterBar: React.FC = () => (
  <div
    className="absolute top-[50px] left-0 right-0 z-30 flex justify-between items-center w-full h-[49px] max-w-[390px] mx-auto px-6 bg-white"
    style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.1)" }}
  >
    <div className="flex items-center gap-2">
      <Image width={20} height={20} src={GrayMap} alt="Mappin" />
      <p className="text-sm font-medium text-[#555]">서울 노원구</p>
    </div>
    <Image width={22} height={22} src={Filter} alt="Filter" />
  </div>
);

/**
 * 3. 24시간 필터 버튼 (absolute로 변경)
 * (fixed -> absolute)
 */
const TwentyFourHourButton: React.FC = () => (
  <button
    className="absolute top-[115px] right-6 z-20 flex flex-col justify-center items-center w-14 h-14 rounded-lg bg-white"
    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.25))" }}
  >
    <Image width={22} height={22} src={Clock} alt="clock" />
    <p className="text-[10px] font-medium text-center text-[#555]">24시간</p>
  </button>
);

/**
 * 4. 병원 정보 카드 (변경 없음)
 */
interface ClinicCardProps {
  id: number;
  name: string;
  status: string;
  openTime: string;
  distance: string;
  location: string;
  image: string;
}
const ClinicInfoCard: React.FC<ClinicCardProps> = ({
  name,
  status,
  openTime,
  distance,
  location,
  image,
}) => (
  <div
    className="flex-shrink-0 flex items-center w-[262px] h-[130px] rounded-2xl bg-white overflow-hidden"
    style={{ filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.25))" }}
  >
    <Image
      width={84}
      height={130}
      className="w-[84px] h-[130px] object-cover"
      src={image}
      alt={name}
      priority // LCP 경고가 있었으므로 priority 추가
    />
    <div className="flex flex-col justify-between flex-1 h-full p-3">
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-semibold text-black">{name}</p>
        <div className="flex flex-col text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1c1c1c]">{status}</span>
            <span className="font-medium text-[#aaa]">{openTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1c1c1c]">{distance}</span>
            <span className="font-medium text-[#aaa]">{location}</span>
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center gap-1 w-[68px] h-7 rounded-md bg-[#6d81ff]">
        <Image width={12} height={12} src={Call} alt="call" />
        <span className="text-xs font-semibold text-white">전화</span>
      </button>
    </div>
  </div>
);

/**
 * 5. 병원 정보 카드 가로 슬라이더 (absolute, w-full로 수정)
 * (fixed -> absolute)
 */
const ClinicInfoSlider: React.FC<{ clinics: ClinicCardProps[] }> = ({
  clinics,
}) => (
  <div className="absolute bottom-[20px] left-0 right-0 z-20 w-full overflow-x-auto scrollbar-hide">
    <div className="flex gap-3.5 px-6">
      {clinics.map((clinic) => (
        <ClinicInfoCard key={clinic.id} {...clinic} />
      ))}
      {/* 오른쪽 끝 여백 */}
      <div className="flex-shrink-0 w-3 h-1"></div>
    </div>
  </div>
);

// --- Mock Data for Page ---
const clinics: ClinicCardProps[] = [
  {
    id: 1,
    name: "수피아동물병원",
    status: "영업중",
    openTime: "09:30에 영업 시작",
    distance: "290m",
    location: "서울 노원구",
    image: "https://placehold.co/84x130/e0e7ff/6D81FF?text=Img+1",
  },
  {
    id: 2,
    name: "골드퍼피동물병원 공릉점",
    status: "영업중",
    openTime: "09:30에 영업 시작",
    distance: "290m",
    location: "서울 노원구",
    image: "https://placehold.co/84x130/dbeafe/6D81FF?text=Img+2",
  },
];

const mapCenter = { lat: 37.622, lng: 127.073 }; // 서울 노원구 공릉동 중심 (예시)

// --- Main Map Page Component ---
export default function MapPage() {
  // 3. API 키 및 API 관련 컴포넌트 모두 제거

  return (
    <>
      {/* 스크롤바 숨기기 스타일 주입 */}
      <style>{scrollbarHideStyle}</style>
      {/* (main) layout이 pb-[89px]를 제공하므로,
        이 페이지는 vh를 사용해 하단 탭바를 제외한 전체 화면을 채웁니다.
        max-w-[390px]와 mx-auto로 모바일 화면 크기를 시뮬레이션합니다.
      */}
      <div className="relative w-full max-w-[390px] mx-auto h-[calc(100vh-89px)] overflow-hidden">
        {/*
         * 4. 💡 수정된 부분:
         * API 지도 대신, Google 지도 웹사이트로 연결되는 <a> 태그와
         * 정적 <img> 이미지를 사용합니다. (비용 무료)
         */}
        <a
          // 맵 중앙 좌표를 기준으로 Google 지도 URL 생성 (15z = zoom level 15)
          href={`https://www.google.com/maps/@${mapCenter.lat},${mapCenter.lng},15z`}
          target="_blank" // 새 탭에서 열기
          rel="noopener noreferrer"
          aria-label="Google Maps에서 현재 위치 보기"
          className="w-full h-full block" // 링크가 전체를 덮도록
        >
          <Image
            src="https://placehold.co/390x755/e2e8f0/94a3b8?text=Map+Preview+(Click+to+Open)"
            alt="지도 이미지"
            width={390}
            height={755} // 부모의 h-full (calc(100vh-89px))에 맞춰 임의의 큰 값 설정
            className="w-full h-full object-cover" // 부모 컨테이너를 꽉 채움
          />
        </a>

        {/* 5. 오버레이 UI 컴포넌트 (변경 없음) */}
        {/* 이 UI들은 <a><img></a> 태그 위에 겹쳐서 표시됩니다. */}
        <MapPageHeader />
        <MapFilterBar />
        <TwentyFourHourButton />
        <ClinicInfoSlider clinics={clinics} />
      </div>
    </>
  );
}
