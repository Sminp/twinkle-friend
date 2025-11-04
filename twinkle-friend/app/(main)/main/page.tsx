"use client"; // 1. state 관리를 위해 클라이언트 컴포넌트로 변경

import React, { useState, useEffect } from "react"; // 2. useState, useEffect 임포트

// 1. 실제 import 구문은 미리보기 환경에서 오류가 발생하므로 주석 처리합니다.
import LocationSearchHeader from "@/components/main/LocationSearchHeader";
import PetInfoCard from "@/components/main/PetInfoCard";
import ContentSection from "@/components/main/ContentSection";
import { ReviewCard, ClinicCard, ContentCard } from "@/components/main/Cards";

// --- CSS for Hiding Scrollbar ---
// 3. 스크롤바를 숨기는 CSS를 추가합니다.
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

const reviewData = [
  {
    id: 1,
    hospitalName: "메인동물병원",
    location: "서울 노원구",
    images: [
      "https://placehold.co/119x70/f1f5ff/6D81FF?text=Img+1",
      "https://placehold.co/119x70/e0e7ff/6D81FF?text=Img+2",
    ],
    reviewer: "LK73",
    rating: 4.5,
    visitDate: "2025.09.26 1번째 방문",
    review:
      "구름이 눈이 좀 불편해서 방문했어요. 자세한 설명과 치료 감사합니다!",
  },
  {
    id: 2,
    hospitalName: "스마일플러스동물병원",
    location: "서울 노원구",
    images: [
      "https://placehold.co/119x70/f1f5ff/6D81FF?text=Img+1",
      "https://placehold.co/119x70/e0e7ff/6D81FF?text=Img+2",
    ],
    reviewer: "김윤영770",
    rating: 4.5,
    visitDate: "2025.09.23 3번째 방문",
    review: "진짜 친절하세요 원장님들도 친절하시고 미용선생님도 친절하십니다!",
  },
  {
    id: 3,
    hospitalName: "해피동물병원",
    location: "서울 노원구",
    images: [
      "https://placehold.co/119x70/f1f5ff/6D81FF?text=Img+1",
      "https://placehold.co/119x70/e0e7ff/6D81FF?text=Img+2",
    ],
    reviewer: "집사1",
    rating: 4.0,
    visitDate: "2025.09.20 1번째 방문",
    review: "무난합니다. 주차가 편해요.",
  },
];

const vaccinationData = [
  {
    id: 1,
    hospitalName: "그린동물병원",
    location: "서울 노원구",
    avgPrice: "36,073원",
    rating: 4.5,
    reviewCount: 413,
    image: "https://placehold.co/111x109/f1f5ff/6D81FF?text=Clinic+A",
  },
  {
    id: 2,
    hospitalName: "은빛동물병원",
    location: "서울 노원구",
    avgPrice: "34,500원",
    rating: 4.2,
    reviewCount: 245,
    image: "https://placehold.co/111x109/f1f5ff/6D81FF?text=Clinic+B",
  },
  {
    id: 3,
    hospitalName: "웰니스동물병원",
    location: "서울 노원구",
    avgPrice: "40,000원",
    rating: 4.6,
    reviewCount: 346,
    image: "https://placehold.co/111x109/f1f5ff/6D81FF?text=Clinic+C",
  },
  {
    id: 4,
    hospitalName: "중계동물병원",
    location: "서울 노원구",
    avgPrice: "38,000원",
    rating: 4.8,
    reviewCount: 502,
    image: "https://placehold.co/111x109/f1f5ff/6D81FF?text=Clinic+D",
  },
];

// 5. 필터링을 위한 목 데이터 추가
const filteredVaccinationData = [
  {
    id: 2,
    hospitalName: "은빛동물병원",
    location: "서울 노원구",
    avgPrice: "34,500원",
    rating: 4.2,
    reviewCount: 245,
    image: "https://placehold.co/111x109/e0e7ff/6D81FF?text=Clinic+B",
  },
  {
    id: 4,
    hospitalName: "중계동물병원",
    location: "서울 노원구",
    avgPrice: "38,000원",
    rating: 4.8,
    reviewCount: 502,
    image: "https://placehold.co/111x109/e0e7ff/6D81FF?text=Clinic+D",
  },
];
const filteredTreatmentData = [
  {
    id: 1,
    hospitalName: "그린동물병원",
    location: "서울 노원구",
    avgPrice: "36,073원",
    rating: 4.5,
    reviewCount: 413,
    image: "https://placehold.co/111x109/dbeafe/6D81FF?text=Clinic+A",
  },
  {
    id: 3,
    hospitalName: "웰니스동물병원",
    location: "서울 노원구",
    avgPrice: "40,000원",
    rating: 4.6,
    reviewCount: 346,
    image: "https://placehold.co/111x109/dbeafe/6D81FF?text=Clinic+C",
  },
];

const contentData = [
  {
    id: 1,
    tag: "케어가이드",
    title: "우리집 고양이가\n‘우다다’하는 이유",
    subtitle: "오늘도 우다다 모드 발동!",
    image: "https://placehold.co/182x230/6D81FF/white?text=Content+1",
  },
  {
    id: 2,
    tag: "생활정보",
    title: "고양이랑\n장거리 이동하기",
    subtitle: "고양이 동반 장거리 이동 완벽정리",
    image: "https://placehold.co/182x230/4cc4d4/white?text=Content+2",
  },
  {
    id: 3,
    tag: "케어가이드",
    title: "우리집 고양이가\n‘우다다’하는 이유",
    subtitle: "오늘도 우다다 모드 발동!",
    image: "https://placehold.co/182x230/6D81FF/white?text=Content+3",
  },
  {
    id: 4,
    tag: "생활정보",
    title: "고양이 장난감\n100% 활용 가이드",
    subtitle: "사냥 본능을 깨워주세요",
    image: "https://placehold.co/182x230/4cc4d4/white?text=Content+4",
  },
];

const chipData = [
  "고양이 종합백신(FVRCP)", // index 0
  "고양이 종합백신 3종", // index 1
  "고양이 백혈병 바이러스 백신", // index 2
];

const treatmentData = [
  "고양이 광견병 주사", // index 0
  "고양이 복막염 백신(FIP)", // index 1
  "고양이 백혈병 바이러스 백신(FeLV)", // index 2
];

/**
 * 메인 페이지 (리팩토링됨)
 * - absolute 제거, flex-col 기반 레이아웃
 * - 재사용 컴포넌트로 분리
 * - 수평 스크롤 적용
 * - 칩 클릭 로직 추가
 */
export default function Main() {
  // 6. 칩 선택 상태 관리
  const [selectedVaccine, setSelectedVaccine] = useState(chipData[0]);
  const [selectedTreatment, setSelectedTreatment] = useState(treatmentData[0]);

  // 7. 칩에 따라 필터링된 병원 목록 관리
  const [vaccineClinics, setVaccineClinics] = useState(vaccinationData);
  const [treatmentClinics, setTreatmentClinics] = useState(vaccinationData);

  // 8. 예방접종 칩 선택 시 데이터 필터링 시뮬레이션
  useEffect(() => {
    // 실제로는 여기서 API를 호출하거나 데이터를 필터링합니다.
    if (selectedVaccine === chipData[0]) {
      setVaccineClinics(vaccinationData); // "종합백신" -> 전체 목록
    } else if (selectedVaccine === chipData[1]) {
      setVaccineClinics(filteredVaccinationData); // "3종" -> 필터링된 목록 1
    } else {
      setVaccineClinics([vaccinationData[0], vaccinationData[2]]); // "백혈병" -> 필터링된 목록 2
    }
  }, [selectedVaccine]); // selectedVaccine이 변경될 때마다 실행

  // 9. 많이 찾는 진료 칩 선택 시 데이터 필터링 시뮬레이션
  useEffect(() => {
    if (selectedTreatment === treatmentData[0]) {
      setTreatmentClinics(vaccinationData); // "광견병" -> 전체 목록 (재사용)
    } else if (selectedTreatment === treatmentData[1]) {
      setTreatmentClinics(filteredTreatmentData); // "복막염" -> 필터링된 목록 3
    } else {
      setTreatmentClinics([vaccinationData[1], vaccinationData[3]]); // "백혈병(FeLV)" -> 필터링된 목록 4
    }
  }, [selectedTreatment]); // selectedTreatment가 변경될 때마다 실행

  return (
    <>
      {/* 스크롤바 숨기기 스타일 주입 */}
      <style>{scrollbarHideStyle}</style>
      <div className="flex flex-col w-full max-w-[390px] mx-auto bg-white">
        {/* 1. 상단 헤더 (위치 고정) */}
        <LocationSearchHeader />

        {/* 2. 메인 컨텐츠 (수직 스크롤) */}
        <main className="flex flex-col gap-6 pt-24">
          {" "}
          {/* pt-24는 고정 헤더 높이만큼 띄움 */}
          {/* 2-1. 내 반려동물 카드 */}
          <PetInfoCard
            petName="콩이"
            age="2세"
            breed="브리티쉬 쇼트헤어"
            image="https://placehold.co/58x58/white/6D81FF?text=콩"
          />
          {/* 2-2. 콩이 예방접종 섹션 */}
          <ContentSection
            title={
              <>
                <span className="text-[#6d81ff]">콩이</span>의 예방접종일이
                다가와요
              </>
            }
            chips={chipData}
            selectedChip={selectedVaccine} // 10. 현재 선택된 칩 전달
            onChipClick={setSelectedVaccine} // 11. state 업데이터 함수 전달
          >
            {vaccineClinics.map(
              (
                clinic // 12. 필터링된 state를 맵핑
              ) => (
                <ClinicCard key={clinic.id} {...clinic} />
              )
            )}
          </ContentSection>
          {/* 2-3. 최근 솔직 리뷰 섹션 (칩 로직 없음) */}
          <ContentSection title="최근 솔직 리뷰">
            {reviewData.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </ContentSection>
          {/* 2-4. 많이 찾는 진료 섹션 */}
          <ContentSection
            title="많이 찾는 진료"
            chips={treatmentData}
            selectedChip={selectedTreatment} // 10. 현재 선택된 칩 전달
            onChipClick={setSelectedTreatment} // 11. state 업데이터 함수 전달
          >
            {treatmentClinics.map(
              (
                clinic // 12. 필터링된 state를 맵핑
              ) => (
                <ClinicCard key={clinic.id} {...clinic} />
              )
            )}
          </ContentSection>
          {/* 2-5. 추천 콘텐츠 섹션 (칩 로직 없음) */}
          <ContentSection
            title={
              <>
                <span className="text-[#6d81ff]">콩이</span>를 위한 추천 콘텐츠
              </>
            }
          >
            {contentData.map((content) => (
              <ContentCard key={content.id} {...content} />
            ))}
          </ContentSection>
        </main>
      </div>
    </>
  );
}
