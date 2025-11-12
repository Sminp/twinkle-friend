"use client";

import Link from "next/link";
import React, { useState } from "react";
// lucide-react 아이콘을 사용하여 SVG를 대체합니다. (Canvas 미리보기용 Mock 포함)
// import { ChevronLeft, Heart, MessageSquare, Edit, ChevronDown, User } from "lucide-react";

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
 * 1. 커뮤니티 페이지 상단 헤더
 * (fixed: 화면 상단에 고정)
 */
const CommunityHeader: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-30 flex items-center w-full h-[50px] max-w-[390px] mx-auto px-6 bg-white border-b border-gray-100">
    <div className="flex items-center gap-3">
      {/* '뒤로가기' 버튼. 실제로는 Link나 router.back()을 사용합니다. */}
      <Link href="/" className="cursor-pointer">
        <ChevronLeft size={24} className="text-black" />
      </Link>
      <p className="text-lg font-semibold text-black">커뮤니티</p>
    </div>
  </header>
);

/**
 * 2. 카테고리 탭 바
 * (sticky: 헤더 바로 아래에 고정, 수평 스크롤)
 */
const categories = [
  "자유게시판",
  "사진자랑게시판",
  "임보/입양게시판",
  "실종동물게시판",
  "후기게시판",
  "소모임게시판",
];

interface CategoryTabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}
const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeTab,
  onTabClick,
}) => (
  <nav className="sticky top-[50px] left-0 right-0 z-30 w-full max-w-[390px] mx-auto h-12 px-5 bg-white border-b border-gray-100 overflow-hidden">
    <div className="flex items-center h-full gap-[15px] overflow-x-auto scrollbar-hide">
      {categories.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`flex-shrink-0 h-full flex justify-center items-center relative p-2 whitespace-nowrap ${
              isActive ? "border-b-2 border-[#6d81ff]" : ""
            }`}
          >
            <p
              className={`text-base font-semibold text-center ${
                isActive ? "text-[#6d81ff]" : "text-[#aaa]"
              }`}
            >
              {tab}
            </p>
          </button>
        );
      })}
    </div>
  </nav>
);

/**
 * 3. 실시간 인기글 섹션
 */
const popularPosts = [
  {
    id: 1,
    rank: "01",
    title: "서울 코엑스 반려동물 박람회 일정 공유",
    date: "25.06.01",
  },
  {
    id: 2,
    rank: "02",
    title: "서울에 목줄없이 노는 반려견 운동장 있나요?",
    date: "25.06.01",
  },
  { id: 3, rank: "03", title: "강아지 사료 추천해주세요~", date: "25.05.29" },
  { id: 4, rank: "04", title: "화장실 구매 성공!", date: "25.05.27" },
  {
    id: 5,
    rank: "05",
    title: "고양이 스크래쳐 스트레스 해소",
    date: "25.05.23",
  },
];

const PopularPostsSection: React.FC = () => (
  <section className="flex flex-col gap-3.5 px-6">
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded bg-[#f1f5ff]" /> {/* 아이콘 대체 */}
      <p className="text-sm font-semibold text-left text-black">
        실시간 인기글
      </p>
    </div>
    <div className="flex flex-col gap-[11px] p-3.5 rounded-md bg-[#f1f5ff]">
      {popularPosts.map((post) => (
        <a
          href="#"
          key={post.id}
          className="flex justify-between items-center w-full"
        >
          <div className="flex items-center gap-1.5">
            <p className="w-5 text-xs font-semibold text-left text-black">
              {post.rank}
            </p>
            <p className="text-xs text-left text-black truncate max-w-[220px]">
              {post.title}
            </p>
          </div>
          <p className="text-[9px] text-left text-[#717171]">{post.date}</p>
        </a>
      ))}
    </div>
  </section>
);

/**
 * 4. 질문글 섹션 (수평 스크롤)
 */
const questionPosts = [
  {
    id: 1,
    title: "길냥이들 츄르 말고 잘 먹는거 있나요?",
    content: "부장님은 탕비실에서 육포 가져다가...",
  },
  {
    id: 2,
    title: "강아지 건강검진 비용 보통 어느정도인가요?",
    content: "4살이 되어 한번 해주려고 하는데...",
  },
  {
    id: 3,
    title: "고양이 화장실 추천해주세요",
    content: "모래가 안튀는걸로 찾고있어요...",
  },
];

const QuestionCard: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <a
    href="#"
    className="flex-shrink-0 flex flex-col w-[174px] h-[76px] gap-0.5 p-[15px] rounded-lg bg-[#e5f8fd]"
  >
    <p className="text-[13px] font-semibold text-left text-black truncate">
      {title}
    </p>
    <p className="text-[11px] text-left text-gray-600 truncate">{content}</p>
  </a>
);

const QuestionPostsSection: React.FC = () => (
  <section className="flex flex-col gap-3.5">
    <div className="flex items-center gap-2 px-6">
      <div className="w-5 h-5 rounded bg-[#e5f8fd]" /> {/* 아이콘 대체 */}
      <p className="text-sm font-semibold text-left text-black">질문글</p>
    </div>
    <div className="flex gap-3.5 overflow-x-auto scrollbar-hide px-6">
      {questionPosts.map((post) => (
        <QuestionCard key={post.id} title={post.title} content={post.content} />
      ))}
      {/* 오른쪽 여백 */}
      <div className="flex-shrink-0 w-2.5 h-1"></div>
    </div>
  </section>
);

/**
 * 5. 자유게시판 글 목록 섹션
 */
interface PostCardProps {
  post: {
    id: number;
    title: string;
    tag: string;
    tagBg: string;
    tagColor: string;
    content: string;
    time: string;
    likes: number;
    comments: number;
    images?: string[];
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <a
    href="#"
    className="flex flex-col w-full gap-5 py-[18px] border-b border-[#e3e3e3]"
  >
    <div className="flex items-start gap-2.5">
      <User className="flex-shrink-0 w-[23px] h-[22px]" />
      <div className="flex flex-col flex-grow gap-[7px]">
        {/* Post Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col flex-grow gap-1">
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-semibold text-left text-black">
                {post.title}
              </p>
              <span
                className={`flex justify-center items-center text-[7px] font-medium h-3.5 px-2 rounded-full ${post.tagBg} ${post.tagColor}`}
              >
                {post.tag}
              </span>
            </div>
            <p className="text-xs text-gray-600 break-words">{post.content}</p>
          </div>
          <p className="flex-shrink-0 text-[9px] text-right text-[#717171]">
            {post.time}
          </p>
        </div>

        {/* Images (if any) */}
        {post.images && post.images.length > 0 && (
          <div className="flex gap-[11px] mt-1">
            {post.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`post ${post.id} image ${index + 1}`}
                className="w-[71px] h-[71px] rounded object-cover"
              />
            ))}
          </div>
        )}

        {/* Post Footer (Likes, Comments) */}
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-[3px]">
            <Heart className="text-[#8e8e8e]" />
            <p className="text-[11px] text-left text-[#8e8e8e]">{post.likes}</p>
          </div>
          <div className="flex items-center gap-[3px]">
            <MessageSquare className="text-[#8e8e8e]" />
            <p className="text-[11px] text-left text-[#8e8e8e]">
              {post.comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  </a>
);

const postData = [
  {
    id: 1,
    title: "그냥 고양이 사진자랑",
    tag: "일반",
    tagBg: "bg-[#d1deff]",
    tagColor: "text-[#6d81ff]",
    content: "고양이 사진 자랑 좀 할게요",
    time: "32분전",
    likes: 12,
    comments: 5,
    images: [
      "https://placehold.co/71x71/E3E3E3/8E8E8E?text=Img1",
      "https://placehold.co/71x71/E3E3E3/8E8E8E?text=Img2",
    ],
  },
  {
    id: 2,
    title: "길냥이들 츄르 말고 잘 먹는거 있나요?",
    tag: "질문",
    tagBg: "bg-[#e5f8fd]",
    tagColor: "text-[#4cc4d4]",
    content: "부장님은 탕비실에서 육포 가져다가...",
    time: "40분전",
    likes: 12,
    comments: 5,
  },
  {
    id: 3,
    title: "강아지 건강검진 비용 보통 어느정도인가요?",
    tag: "질문",
    tagBg: "bg-[#e5f8fd]",
    tagColor: "text-[#4cc4d4]",
    content: "4살이 되어 한번 해주려고 하는데 27만원인...",
    time: "21:24",
    likes: 12,
    comments: 5,
  },
  {
    id: 4,
    title: "안녕하세요 첫 가입이에요",
    tag: "일반",
    tagBg: "bg-[#d1deff]",
    tagColor: "text-[#6d81ff]",
    content: "정말 귀여운 애견인들이 많이 있네요 ㅎㅎㅎ",
    time: "19:37",
    likes: 12,
    comments: 5,
  },
];

const PostListSection: React.FC = () => (
  <section className="flex flex-col gap-3.5 px-6">
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-[#d1deff]" /> {/* 아이콘 대체 */}
        <p className="text-sm font-semibold text-left text-black">자유게시판</p>
      </div>
      <div className="flex items-center gap-1 cursor-pointer">
        <p className="text-[13px] font-medium text-left text-[#1c1c1c]">
          최신순
        </p>
        <ChevronDown size={14} className="text-[#1C1C1C]" />
      </div>
    </div>

    <div className="flex flex-col w-full">
      {postData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </section>
);

/**
 * 6. 글쓰기 플로팅 액션 버튼 (FAB)
 * (fixed: 화면 우측 하단에 고정)
 */
const WritePostButton: React.FC = () => (
  <button
    className="fixed bottom-[105px] right-5 z-20 flex justify-center items-center w-[62px] h-[62px] rounded-[40px] bg-[#6d81ff]"
    style={{ boxShadow: "0px 0px 8px 0 rgba(0,0,0,0.25)" }}
  >
    <Edit size={30} className="text-white" />
  </button>
);

// --- Main Community Page Component ---
export default function Community() {
  const [activeTab, setActiveTab] = useState("자유게시판");

  return (
    <>
      {/* 스크롤바 숨기기 스타일 주입 */}
      <style>{scrollbarHideStyle}</style>
      {/* (main) layout이 하단 탭바(89px)를 위한 공간을 이미 확보(pb-[89px])했으므로,
        이 페이지는 flex-col과 min-h-full을 사용해 스크롤 가능한 레이아웃을 만듭니다.
      */}
      <div className="flex flex-col w-full max-w-[390px] mx-auto min-h-full">
        {/* 1. 고정 헤더 */}
        <CommunityHeader />

        {/* 2. 고정 카테고리 탭 */}
        <CategoryTabs activeTab={activeTab} onTabClick={setActiveTab} />

        {/* 3. 메인 콘텐츠 (수직 스크롤)
          - 헤더(50px)와 탭(48px)의 높이만큼(총 98px) 상단 패딩을 줍니다.
        */}
        <main className="flex flex-col gap-8 pt-4 pb-8">
          {/* [참고]
            실제 앱에서는 activeTab state에 따라 다른 컴포넌트를 렌더링해야 합니다.
            예: {activeTab === "자유게시판" && <FreeBoardContent />}
            여기서는 원본 디자인에 있던 모든 섹션을 그대로 렌더링합니다.
          */}

          {/* 실시간 인기글 */}
          <PopularPostsSection />

          {/* 질문글 */}
          <QuestionPostsSection />

          {/* 자유게시판 목록 */}
          <PostListSection />
        </main>

        {/* 4. 글쓰기 버튼 (고정) */}
        <WritePostButton />
      </div>
    </>
  );
}
