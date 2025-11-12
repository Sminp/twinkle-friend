"use client";

import React, { useState } from "react";
// 1. 실제 프로젝트에서 사용할 import (미리보기에서는 Mock으로 대체)
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import { ChevronLeft, MapPin, ListFilter, Clock, Phone } from "lucide-react";

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

// --- Refactored Sub-components ---

/**
 * 1. 지도 페이지 상단 헤더
 * (fixed: 화면 상단에 고정)
 */
const MapPageHeader: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center w-full h-[50px] max-w-[390px] mx-auto px-6 bg-white">
    <div className="flex items-center gap-3">
      <ChevronLeft size={24} className="text-black" />
      <p className="text-lg font-semibold text-black">지도</p>
    </div>
  </header>
);

/**
 * 2. 지도 필터 바
 * (fixed: 헤더 바로 아래에 고정)
 */
const MapFilterBar: React.FC = () => (
  <div
    className="fixed top-[50px] left-0 right-0 z-30 flex justify-between items-center w-full h-[49px] max-w-[390px] mx-auto px-6 bg-white"
    style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.1)" }}
  >
    <div className="flex items-center gap-2">
      <MapPin size={20} className="text-[#555]" />
      <p className="text-sm font-medium text-[#555]">서울 노원구</p>
    </div>
    <ListFilter size={22} className="text-[#555]" />
  </div>
);

/**
 * 3. 24시간 필터 버튼
 * (fixed: 지도 위에 고정)
 */
const TwentyFourHourButton: React.FC = () => (
  <button
    className="fixed top-[115px] right-6 z-20 flex flex-col justify-center items-center w-14 h-14 rounded-lg bg-white"
    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.25))" }}
  >
    <Clock size={22} className="text-[#555]" />
    <p className="text-[10px] font-medium text-center text-[#555]">24시간</p>
  </button>
);

/**
 * 4. 병원 정보 카드 (슬라이더 내부)
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
    <img className="w-[84px] h-[130px] object-cover" src={image} alt={name} />
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
        <Phone size={12} className="text-white" />
        <span className="text-xs font-semibold text-white">전화</span>
      </button>
    </div>
  </div>
);

/**
 * 5. 병원 정보 카드 가로 슬라이더
 * (fixed: 화면 하단에 고정)
 */
const ClinicInfoSlider: React.FC<{ clinics: ClinicCardProps[] }> = ({
  clinics,
}) => (
  <div className="fixed bottom-[20px] left-0 right-0 z-20 w-full overflow-x-auto scrollbar-hide">
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
  {
    id: 3,
    name: "메인동물병원",
    status: "영업중",
    openTime: "09:30에 영업 시작",
    distance: "290m",
    location: "서울 노원구",
    image: "https://placehold.co/84x130/e0e7ff/6D81FF?text=Img+3",
  },
];

const markers = [
  { lat: 37.625, lng: 127.075 },
  { lat: 37.62, lng: 127.07 },
  { lat: 37.622, lng: 127.078 },
];

const mapCenter = { lat: 37.622, lng: 127.073 }; // 서울 노원구 공릉동 중심 (예시)

// --- Main Map Page Component ---
export default function MapPage() {
  // ★★★★★
  // !! 중요 !! : 여기에 본인의 Google Maps API 키를 입력하세요.
  // Google Cloud Console(https://console.cloud.google.com/)에서 발급받을 수 있습니다.
  const API_KEY = "YOUR_API_KEY_HERE";
  // ★★★★★

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const mapOptions = {
    disableDefaultUI: true, // 기본 UI (줌 컨트롤, 스트리트뷰 등) 비활성화
    gestureHandling: "greedy", // 모든 스크롤/터치 제스처 허용
  };

  // 커스텀 마커 아이콘 (원본 SVG 활용)
  const customMarkerIcon = {
    url:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
      <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 0px 6px rgba(0,0,0,0.25))">
        <path d="M22.2526 45.1315C29.8789 37.5052 37.5052 30.6764 37.5052 22.2526C37.5052 13.8288 30.6764 7 22.2526 7C13.8288 7 7 13.8288 7 22.2526C7 30.6764 14.6263 37.5052 22.2526 45.1315Z" fill="white"/>
        <path d="M22.2529 34.5C28.8803 34.5 34.2529 29.1274 34.2529 22.5C34.2529 15.8726 28.8803 10.5 22.2529 10.5C15.6255 10.5 10.2529 15.8726 10.2529 22.5C10.2529 29.1274 15.6255 34.5 22.2529 34.5Z" fill="#6D81FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8228 17.4951C20.6254 17.4951 20.4653 17.6552 20.4653 17.8526V20.7124H17.6055C17.4081 20.7124 17.248 20.8724 17.248 21.0699V23.9297C17.248 24.1271 17.4081 24.2871 17.6055 24.2871H20.4653V27.1469C20.4653 27.3443 20.6254 27.5044 20.8228 27.5044H23.6826C23.88 27.5044 24.0401 27.3443 24.0401 27.1469V24.2871H26.8998C27.0972 24.2871 27.2573 24.1271 27.2573 23.9297V21.0699C27.2573 20.8724 27.0972 20.7124 26.8998 20.7124H24.0401V17.8526C24.0401 17.6552 23.88 17.4951 23.6826 17.4951H20.8228Z" fill="white"/>
      </svg>
    `),
    scaledSize: new (window.google?.maps?.Size ||
      class Size {
        constructor(w: number, h: number) {
          return { width: w, height: h };
        }
      })(45, 53),
  };

  return (
    <>
      {/* 스크롤바 숨기기 스타일 주입 */}
      <style>{scrollbarHideStyle}</style>
      {/* (main) layout이 pb-[89px]를 제공하므로,
        이 페이지는 vh를 사용해 하단 탭바를 제외한 전체 화면을 채웁니다.
      */}
      <div className="relative w-full max-w-[390px] mx-auto h-[calc(100vh-89px)] overflow-hidden">
        {/* 1. 지도 API 로더 */}
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={15}
            options={mapOptions}
          >
            {/* 2. 지도 마커 렌더링 */}
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} icon={customMarkerIcon} />
            ))}
          </GoogleMap>
        </LoadScript>

        {/* 3. 오버레이 UI 컴포넌트 */}
        <MapPageHeader />
        <MapFilterBar />
        <TwentyFourHourButton />
        <ClinicInfoSlider clinics={clinics} />
      </div>
    </>
  );
}
