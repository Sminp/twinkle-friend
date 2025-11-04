import { MapPin, Search, ChevronDown, Bell } from "lucide-react"; // 아이콘

/**
 * 메인 페이지 상단 고정 헤더
 * 위치, 검색창, 알림 아이콘을 포함합니다.
 */
export default function LocationSearchHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 flex flex-col w-full max-w-[390px] mx-auto bg-white/95 backdrop-blur-sm">
      {/* 1. 로고 및 알림 아이콘 */}
      <div className="flex justify-between items-center w-full h-[52px] px-6">
        <div className="flex items-center gap-2">
          {/* 로고 SVG (placeholder) */}
          <svg width={26} height={26} viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="4" fill="#6D81FF" />
          </svg>
          <p className="text-xl font-bold text-[#6d81ff]">반짝친구</p>
        </div>
        <Bell size={24} color="black" />
      </div>

      {/* 2. 위치 및 검색창 */}
      <div className="flex flex-col w-full gap-2.5 px-6 pt-2 pb-4">
        <div
          className="flex justify-between items-center w-full h-[46px] px-6 rounded-2xl border-[1.5px] border-[#6d81ff]"
          style={{
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-[#6D81FF]" />
            <p className="text-[15px] font-semibold text-black">서울 노원구</p>
          </div>
          <ChevronDown size={24} className="text-[#8E8E8E]" />
        </div>
        <div className="flex items-center w-full h-[46px] gap-2 px-6 rounded-2xl bg-gray-100">
          <Search size={20} className="text-[#6D81FF]" />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="w-full text-sm text-[#aaa] bg-transparent outline-none placeholder:text-[#aaa]"
          />
        </div>
      </div>
    </header>
  );
}
