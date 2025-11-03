export default function Community() {
  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white">
      <div className="flex flex-col justify-start items-start w-[390px] absolute left-0 top-[50px] overflow-hidden gap-2 px-[30px] py-3 bg-white">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 w-[84px] h-5 text-lg font-semibold text-left text-black">
              커뮤니티
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center h-12 absolute left-0 top-[98px] gap-[15px] px-5 bg-white">
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2 border-t-0 border-r-0 border-b-2 border-l-0 border-[#6d81ff]">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#6d81ff]">
            자유게시판
          </p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#aaa]">
            사진자랑게시판
          </p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#aaa]">
            임보/입양게시판
          </p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#aaa]">
            실종동물게시판
          </p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#aaa]">
            후기게시판
          </p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#aaa]">
            소모임게시판
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[329px] absolute left-[30px] top-[173px] gap-3.5">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded bg-[#f1f5ff]" />
            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
              실시간 인기글
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[178px] gap-2 px-[17px] py-3.5 rounded-md bg-[#f1f5ff]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[291px] gap-[11px]">
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[291px] relative gap-[5px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 w-5 h-5 text-xs font-semibold text-left text-black">
                      01
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[220px] h-5 text-xs text-left text-black">
                      서울 코엑스 반려동물 박람회 일정 공유
                    </p>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[47px] h-5 text-[9px] text-left text-[#717171]">
                    25.06.01
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[291px] relative gap-[5px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 w-5 h-5 text-xs font-semibold text-left text-black">
                      02
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[220px] h-5 text-xs text-left text-black">
                      서울에 목줄없이 노는 반려견 운동장 있나요?
                    </p>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[47px] h-5 text-[9px] text-left text-[#717171]">
                    25.06.01
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[291px] relative gap-[5px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 w-5 h-5 text-xs font-semibold text-left text-black">
                      03
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[220px] h-5 text-xs text-left text-black">
                      강아지 사료 추천해주세요~
                    </p>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[47px] h-5 text-[9px] text-left text-[#717171]">
                    25.05.29
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[291px] relative gap-[5px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 w-5 h-5 text-xs font-semibold text-left text-black">
                      04
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[220px] h-5 text-xs text-left text-black">
                      화장실 구매 성공!
                    </p>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[47px] h-5 text-[9px] text-left text-[#717171]">
                    25.05.27
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[291px] relative gap-[5px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 w-5 h-5 text-xs font-semibold text-left text-black">
                      05
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[220px] h-5 text-xs text-left text-black">
                      고양이 스크래쳐 스트레스 해소
                    </p>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[47px] h-5 text-[9px] text-left text-[#717171]">
                    25.05.23
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="shutterstock_2247613937-[converted]-1.png"
        className="w-[8.9px] h-3 absolute left-[34.5px] top-44 object-cover"
      />
      <div className="flex justify-start items-start w-[329px] absolute left-[30px] top-[412px] gap-3.5">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded bg-[#e5f8fd]" />
          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
            질문글
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start w-[329px] absolute left-[30px] top-[562px] gap-3.5">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded bg-[#d1deff]" />
          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
            자유게시판
          </p>
        </div>
      </div>
      <img
        src="질문-아이콘-1.png"
        className="w-[10.62px] h-[10.53px] absolute left-[33.69px] top-[415.47px] object-cover"
      />
      <div className="flex justify-start items-center absolute left-[30px] top-[448px] gap-3.5">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[76px] w-[174px] gap-2 px-[18px] py-[15px] rounded-lg bg-[#e5f8fd]">
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[137px] h-5 text-[13px] font-semibold text-left text-black">
              제목
            </p>
            <pre>
              Failed to transform TEXT Lorem ipsum dolor sit amet consectetur.
              {"\n"}TypeError: cannot read property 'className' of undefined
            </pre>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center absolute left-[30px] top-[448px] gap-3.5">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[76px] w-[174px] gap-2 px-[18px] py-[15px] rounded-lg bg-[#e5f8fd]">
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
            <pre>
              Failed to transform TEXT 길냥이들 츄르 말고 잘 먹는거 있나요?
              {"\n"}TypeError: cannot read property 'className' of undefined
            </pre>
            <pre>
              Failed to transform TEXT 부장님은 탕비실에서 육포 가져다가
              찢어주시던데 육포는 짜서 안좋을 거 같구{"\n"}TypeError: cannot
              read property 'className' of undefined
            </pre>
          </div>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3.5">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[76px] w-[174px] gap-2 px-[18px] py-[15px] rounded-lg bg-[#e5f8fd]">
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
              <pre>
                Failed to transform TEXT 강아지 건강검진 비용 보통
                어느정도인가요?{"\n"}TypeError: cannot read property 'className'
                of undefined
              </pre>
              <pre>
                Failed to transform TEXT 4살이 되어 한번 해주려고 하는데
                27만원인 곳도 있는데 대부분 어느정도 비용에서 받는게 맞을까요?
                {"\n"}TypeError: cannot read property 'className' of undefined
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[329px] absolute left-[31px] top-[639px] gap-4 py-[18px] border-t border-r-0 border-b-0 border-l-0 border-[#e3e3e3]">
        <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <svg
              width={23}
              height={22}
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[22.73px] h-[22px]"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="11.3629"
                cy={11}
                rx="11.3629"
                ry={11}
                fill="#F0F0F0"
              />
              <mask
                id="mask0_6_188"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={23}
                height={22}
              >
                <ellipse
                  cx="11.3629"
                  cy={11}
                  rx="11.3629"
                  ry={11}
                  fill="#F3F3F3"
                />
              </mask>
              <g mask="url(#mask0_6_188)">
                <path
                  d="M11.3633 13.9473C12.6954 13.9473 14.0144 14.1702 15.2451 14.6045C16.476 15.0388 17.595 15.676 18.5371 16.4785C19.479 17.281 20.2265 18.2338 20.7363 19.2822C20.7986 19.4103 20.8573 19.5397 20.9121 19.6699C21.5552 21.1967 20.1646 22.5898 18.5078 22.5898H4.21777C2.561 22.5898 1.17038 21.1967 1.81348 19.6699C1.86833 19.5397 1.92699 19.4103 1.98926 19.2822C2.49904 18.2338 3.24658 17.281 4.18848 16.4785C5.13056 15.676 6.24957 15.0388 7.48047 14.6045C8.71131 14.1702 10.031 13.9473 11.3633 13.9473ZM11.3633 5.10742C13.8626 5.10749 15.8884 7.0688 15.8887 9.48828C15.8887 11.908 13.8628 13.8701 11.3633 13.8701C8.86375 13.8701 6.83691 11.908 6.83691 9.48828C6.83715 7.06876 8.86389 5.10742 11.3633 5.10742Z"
                  fill="#8E8E8E"
                />
              </g>
            </svg>
            <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[296px] gap-3">
              <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <div className="flex flex-col justify-center items-start flex-grow gap-2">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                      <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-black">
                        그냥 고양이 사진자랑
                      </p>
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[25px] h-3.5 relative gap-2 rounded-[100px] bg-[#d1deff]">
                        <p className="flex-grow-0 flex-shrink-0 w-[27px] h-3 text-[7px] font-medium text-center text-[#6d81ff]">
                          일반
                        </p>
                      </div>
                    </div>
                    <pre>
                      Failed to transform TEXT 고양이 사진 자랑 좀 할게요{"\n"}
                      TypeError: cannot read property 'className' of undefined
                    </pre>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[11px]">
                    <img
                      src="rectangle-3358.jpeg"
                      className="flex-grow-0 flex-shrink-0 w-[71px] h-[71px] rounded object-cover"
                    />
                    <img
                      src="rectangle-3359.jpeg"
                      className="flex-grow-0 flex-shrink-0 w-[71px] h-[71px] rounded object-cover"
                    />
                  </div>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[33px] h-5 text-[9px] text-right text-[#717171]">
                  32분전
                </p>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <svg
                      width={13}
                      height={13}
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clip-path="url(#clip0_6_211)">
                        <path
                          d="M8.72653 1.625C10.6344 1.625 11.9163 3.44094 11.9163 5.135C11.9163 8.56578 6.59597 11.375 6.49967 11.375C6.40338 11.375 1.08301 8.56578 1.08301 5.135C1.08301 3.44094 2.36495 1.625 4.27282 1.625C5.36819 1.625 6.0844 2.17953 6.49967 2.66703C6.91495 2.17953 7.63116 1.625 8.72653 1.625Z"
                          stroke="#8E8E8E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clippath id="clip0_6_211">
                          <rect width={13} height={13} fill="white" />
                        </clippath>
                      </defs>
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      12
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <svg
                      width={13}
                      height={13}
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M11.3752 6.22917C11.3752 8.77198 9.31389 10.8333 6.77108 10.8333C6.18782 10.8333 5.6299 10.7249 5.11637 10.527C5.02248 10.4909 4.97554 10.4728 4.9382 10.4642C4.90149 10.4557 4.87491 10.4522 4.83725 10.4507C4.79897 10.4493 4.75697 10.4536 4.67297 10.4623L1.89908 10.749C1.63461 10.7764 1.50238 10.79 1.42438 10.7425C1.35644 10.701 1.31017 10.6318 1.29785 10.5532C1.28371 10.4629 1.3469 10.3459 1.47327 10.112L2.35925 8.47211C2.43222 8.33705 2.4687 8.26953 2.48522 8.2046C2.50154 8.14048 2.50549 8.09423 2.50027 8.02827C2.49498 7.96148 2.46568 7.87454 2.40707 7.70066C2.25133 7.23861 2.16691 6.74375 2.16691 6.22917C2.16691 3.68636 4.22827 1.625 6.77108 1.625C9.31389 1.625 11.3752 3.68636 11.3752 6.22917Z"
                        stroke="#8E8E8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            width={329}
            height={1}
            viewBox="0 0 329 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <line y1="0.5" x2={329} y2="0.5" stroke="#E3E3E3" />
          </svg>
        </div>
        <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <svg
              width={23}
              height={1}
              viewBox="0 0 23 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[22.73px] h-[22px]"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="11.3629"
                cy={11}
                rx="11.3629"
                ry={11}
                fill="#F0F0F0"
              />
            </svg>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[296px] gap-[7px]">
              <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <div className="flex flex-col justify-start items-end flex-grow relative gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-black">
                      길냥이들 츄르 말고 잘 먹는거 있나요?
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[25px] h-3.5 relative gap-2 rounded-[100px] bg-[#e5f8fd]">
                      <p className="flex-grow-0 flex-shrink-0 w-[27px] h-3 text-[7px] font-medium text-center text-[#4cc4d4]">
                        질문
                      </p>
                    </div>
                  </div>
                  <pre>
                    Failed to transform TEXT 부장님은 탕비실에서 육포 가져다가
                    찢어주시던데 육포는 짜서 안좋을거 같구{"\n"}TypeError:
                    cannot read property 'className' of undefined
                  </pre>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[33px] h-5 text-[9px] text-right text-[#717171]">
                  40분전
                </p>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      12
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0" />
        </div>
        <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <div className="flex-grow-0 flex-shrink-0 w-[22.73px] h-[22px]" />
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[296px] gap-[7px]">
              <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <div className="flex flex-col justify-start items-end flex-grow relative gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-black">
                      강아지 건강검진 비용 보통 어느정도인가요?
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[25px] h-3.5 relative gap-2 rounded-[100px] bg-[#e5f8fd]">
                      <p className="flex-grow-0 flex-shrink-0 w-[27px] h-3 text-[7px] font-medium text-center text-[#4cc4d4]">
                        질문
                      </p>
                    </div>
                  </div>
                  <pre>
                    Failed to transform TEXT 4살이 되어 한번 해주려고 하는데
                    27만원인 곳도 있는데 대부분
                    {"\n"}TypeError: cannot read property 'className' of
                    undefined
                  </pre>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[33px] h-5 text-[9px] text-right text-[#717171]">
                  21:24
                </p>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      12
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0" />
        </div>
        <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <div className="flex-grow-0 flex-shrink-0 w-[22.73px] h-[22px]" />
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[296px] gap-[7px]">
              <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <div className="flex flex-col justify-start items-end flex-grow relative gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-black">
                      안녕하세요 첫 가입이에요
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[25px] h-3.5 relative gap-2 rounded-[100px] bg-[#d1deff]">
                      <p className="flex-grow-0 flex-shrink-0 w-[27px] h-3 text-[7px] font-medium text-center text-[#6d81ff]">
                        일반
                      </p>
                    </div>
                  </div>
                  <pre>
                    Failed to transform TEXT 정말 귀여운 애견인들이 많이 있네요
                    ㅎㅎㅎ 잘 부탁드립니다
                    {"\n"}TypeError: cannot read property 'className' of
                    undefined
                  </pre>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[33px] h-5 text-[9px] text-right text-[#717171]">
                  19:37
                </p>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      12
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0" />
        </div>
        <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <div className="flex-grow-0 flex-shrink-0 w-[22.73px] h-[22px]" />
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[296px] gap-[7px]">
              <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <div className="flex flex-col justify-start items-end flex-grow relative gap-1">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-black">
                      맨날 있는 의자 쟁탈전 이제 끝이네요ㅋㅋ
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[25px] h-3.5 relative gap-2 rounded-[100px] bg-[#d1deff]">
                      <p className="flex-grow-0 flex-shrink-0 w-[27px] h-3 text-[7px] font-medium text-center text-[#6d81ff]">
                        일반
                      </p>
                    </div>
                  </div>
                  <pre>
                    Failed to transform TEXT 쿠팡에 클릭타임 소파라고
                    올라와있는데 강아지랑 고양이 둘다 잘쓰는 제품이네요{"\n"}
                    TypeError: cannot read property 'className' of undefined
                  </pre>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[33px] h-5 text-[9px] text-right text-[#717171]">
                  19:18
                </p>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      12
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px] relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#8e8e8e]">
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[390px] h-11 absolute left-0.5 top-[593px] gap-2 px-12 py-3.5">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[7px] px-2.5 py-1 rounded">
          <p className="flex-grow-0 flex-shrink-0 text-[13px] font-medium text-left text-[#1c1c1c]">
            최신순
          </p>
          <svg
            width={8}
            height={5}
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path d="M4 5L0 0L8 7.64949e-07L4 5Z" fill="#1C1C1C" />
          </svg>
        </div>
      </div>
      <img
        src="연필-아이콘-1.png"
        className="w-[10.5px] h-[11.4px] absolute left-[33.75px] top-[565.3px] object-cover"
      />

      <div
        className="flex justify-center items-center w-[62px] h-[62px] absolute left-[297.23px] top-[628px] gap-2 p-4 rounded-[40px] bg-[#6d81ff]"
        style={{ boxShadow: "0px 0px 8px 0 rgba(0,0,0,0.25)" }}
      >
        <svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M26.25 26.2499H16.25M3.125 26.8749L10.0616 24.207C10.5053 24.0363 10.7271 23.951 10.9346 23.8396C11.119 23.7406 11.2947 23.6264 11.4601 23.4982C11.6462 23.3537 11.8142 23.1857 12.1503 22.8495L26.25 8.74989C27.6307 7.36918 27.6307 5.1306 26.25 3.74989C24.8693 2.36918 22.6307 2.36918 21.25 3.74989L7.15035 17.8495C6.81422 18.1857 6.64615 18.3537 6.50174 18.5398C6.37347 18.7051 6.25925 18.8809 6.16029 19.0652C6.04888 19.2728 5.96356 19.4946 5.79291 19.9383L3.125 26.8749ZM3.125 26.8749L5.69765 20.1861C5.88175 19.7074 5.97379 19.4681 6.13167 19.3585C6.26965 19.2627 6.44038 19.2265 6.60537 19.258C6.79417 19.294 6.97548 19.4753 7.3381 19.838L10.162 22.6618C10.5246 23.0244 10.7059 23.2058 10.742 23.3946C10.7735 23.5595 10.7372 23.7303 10.6414 23.8683C10.5318 24.0261 10.2925 24.1182 9.81384 24.3023L3.125 26.8749Z"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className="flex justify-between items-center w-[390px] h-[89px] absolute left-0 top-[721px] px-[18px] rounded-tl-[30px] rounded-tr-[30px] bg-white"
        style={{ boxShadow: "0px -6px 10px 0 rgba(0,0,0,0.1)" }}
      ></div>
    </div>
  );
}
