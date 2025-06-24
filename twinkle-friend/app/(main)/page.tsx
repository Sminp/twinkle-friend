export default function Main() {
  return (
    <div className="w-96 h-[2170px] relative bg-white overflow-hidden">
      <div className="w-96 px-7 py-3 left-0 top-[50px] absolute bg-white inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-52 flex justify-start items-center gap-3">
            <div className="w-6 h-6 bg-teal-400 rounded-full" />
            <div className="w-6 h-6 bg-indigo-400 rounded-full" />
            <div className="w-20 h-5 justify-center text-indigo-400 text-xl font-normal font-['SB_Aggro'] leading-none">
              반짝친구
            </div>
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-5 left-[3.26px] top-[2px] absolute outline outline-2 outline-offset-[-0.90px] outline-black" />
          </div>
        </div>
      </div>
      <div className="w-80 left-[23px] top-[116px] absolute rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-indigo-400 inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-11 px-6 border-b border-neutral-200 inline-flex justify-between items-center">
          <div className="flex justify-start items-end gap-3">
            <div className="w-4 h-5 bg-indigo-400 outline outline-2 outline-offset-[-1px] outline-indigo-400" />
            <div className="w-1.5 h-1.5 bg-white outline outline-2 outline-offset-[-1px] outline-indigo-400" />
            <div className="w-8 h-5 justify-center text-black text-base font-semibold  leading-none">
              전국
            </div>
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-3 h-1.5 left-[6px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-400" />
          </div>
        </div>
        <div className="self-stretch h-11 px-5 inline-flex justify-start items-center gap-2">
          <div className="flex justify-start items-center gap-2">
            <div className="w-5 h-5 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute outline outline-2 outline-offset-[-1px] outline-indigo-400" />
            </div>
            <div className="flex justify-start items-center gap-px">
              <div className="justify-start text-neutral-400 text-sm font-normal  leading-normal">
                검색어를 입력해주세요
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-28 left-0 top-[226px] absolute inline-flex justify-center items-center gap-6">
        <div className="w-16 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-16 h-14 bg-violet-200 rounded-lg" />
          <div className="self-stretch h-5 text-center justify-center text-black text-xs font-medium  leading-none">
            병원
          </div>
        </div>
        <div className="w-16 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-14 h-14 bg-violet-200 rounded-lg" />
          <div className="self-stretch h-5 text-center justify-center text-black text-xs font-medium  leading-none">
            호텔
          </div>
        </div>
        <div className="w-16 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-14 h-14 bg-violet-200 rounded-lg" />
          <div className="self-stretch h-5 text-center justify-center text-black text-xs font-medium  leading-none">
            미용실
          </div>
        </div>
        <div className="w-16 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-14 h-14 bg-violet-200 rounded-lg" />
          <div className="self-stretch h-5 text-center justify-center text-black text-xs font-medium  leading-none">
            기타 업장
          </div>
        </div>
      </div>
      <img
        className="w-12 h-12 left-[125px] top-[243px] absolute shadow-[0px_0px_4px_0px_rgba(109,129,255,0.25)]"
        src="https://placehold.co/49x49"
      />
      <img
        className="w-14 h-14 left-[213.93px] top-[243px] absolute shadow-[0px_0px_4px_0px_rgba(109,129,255,0.25)]"
        src="https://placehold.co/53x53"
      />
      <img
        className="w-12 h-12 left-[35px] top-[244px] absolute shadow-[0px_0px_4px_0px_rgba(109,129,255,0.25)]"
        src="https://placehold.co/48x48"
      />
      <div className="w-[599px] px-6 py-7 left-0 top-[338px] absolute inline-flex flex-col justify-start items-start gap-6">
        <div className="w-80 inline-flex justify-end items-center gap-20">
          <div className="w-56 h-5 justify-center text-black text-lg font-semibold  leading-none">
            솔직 리뷰
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-600" />
          </div>
        </div>
        <div className="w-80 inline-flex justify-start items-center gap-5">
          <div className="w-72 h-60 px-3 py-3 bg-white rounded-2xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] inline-flex flex-col justify-center items-center gap-2">
            <div className="w-60 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-14 p-3 bg-blue-50 rounded-md flex flex-col justify-center items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3.5">
                    <img
                      className="w-9 h-9 rounded"
                      src="https://placehold.co/37x36"
                    />
                    <div className="inline-flex flex-col justify-center items-end gap-1">
                      <div className="self-stretch h-3.5 justify-center text-black text-xs font-medium  leading-none">
                        메인동물병원
                      </div>
                      <div className="self-stretch h-3 justify-center text-neutral-600 text-[10px] font-normal  leading-none">
                        서울 노원구 공릉동
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-1 h-2 left-[6px] top-[4px] absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-400" />
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <img
                  className="w-28 h-16 rounded"
                  src="https://placehold.co/119x70"
                />
                <img
                  className="w-28 h-16 rounded"
                  src="https://placehold.co/119x70"
                />
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                <div className="w-5 h-5 bg-neutral-200 rounded-full" />
                <div className="w-5 h-5 bg-zinc-100 rounded-full" />
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="flex-1 inline-flex flex-col justify-start items-start">
                      <div className="self-stretch h-5 justify-center text-black text-xs font-semibold  leading-none">
                        LK73
                      </div>
                      <div className="w-24 inline-flex justify-start items-center gap-1.5">
                        <div className="w-5 h-2.5 justify-center text-neutral-600 text-[9px] font-normal  leading-tight">
                          (4.5)
                        </div>
                      </div>
                    </div>
                    <div className="justify-center text-neutral-500 text-[8px] font-normal  leading-none">
                      5.20 6번째 방문
                    </div>
                  </div>
                  <div className="w-56 h-9 justify-center text-black text-[10px] font-medium  leading-none">
                    구름이 눈이 좀 불편해서 방문했어요. 자세한 설명과 치료
                    감사합니다! 메인동물병원은 늘 최고예요!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-60 px-3 py-3 bg-white rounded-2xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] inline-flex flex-col justify-center items-center gap-2">
            <div className="w-60 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-14 p-3 bg-blue-50 rounded-md flex flex-col justify-center items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3.5">
                    <img
                      className="w-9 h-9 rounded"
                      src="https://placehold.co/37x36"
                    />
                    <div className="inline-flex flex-col justify-center items-end gap-1">
                      <div className="self-stretch h-3.5 justify-center text-black text-xs font-medium  leading-none">
                        스마일플러스동물병원
                      </div>
                      <div className="self-stretch h-3 justify-center text-neutral-600 text-[10px] font-normal  leading-none">
                        서울 노원구 공릉동
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-1 h-2 left-[6px] top-[4px] absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-400" />
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <img
                  className="w-28 h-16 rounded"
                  src="https://placehold.co/119x70"
                />
                <img
                  className="w-28 h-16 rounded"
                  src="https://placehold.co/119x70"
                />
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                <div className="w-5 h-5 bg-neutral-200 rounded-full" />
                <div className="w-5 h-5 bg-zinc-100 rounded-full" />
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="flex-1 inline-flex flex-col justify-start items-start">
                      <div className="self-stretch h-5 justify-center text-black text-xs font-semibold  leading-none">
                        김윤영770
                      </div>
                      <div className="w-24 inline-flex justify-start items-center gap-1.5">
                        <div className="w-5 h-2.5 justify-center text-neutral-600 text-[9px] font-normal  leading-tight">
                          (4.5)
                        </div>
                      </div>
                    </div>
                    <div className="justify-center text-neutral-500 text-[8px] font-normal  leading-none">
                      5.30 2번째 방문
                    </div>
                  </div>
                  <div className="w-56 h-9 justify-center text-black text-[10px] font-medium  leading-none">
                    진짜 친절하세요 원장님들도 친절하시고 미용선생님 테크니션
                    선생님 다 친절하십니다! 그래서 그런가 강아지가 병원가는 걸
                    무서워하지 않아요!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-60 px-3 py-3 bg-white rounded-2xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] inline-flex flex-col justify-center items-center gap-2">
            <div className="w-60 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-14 p-3 bg-blue-50 rounded-md flex flex-col justify-center items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3.5">
                    <img
                      className="w-9 h-9 rounded"
                      src="https://placehold.co/37x36"
                    />
                    <div className="inline-flex flex-col justify-center items-end gap-1">
                      <div className="self-stretch h-3.5 justify-center text-black text-xs font-medium  leading-none">
                        골드퍼피동물병원 공릉점
                      </div>
                      <div className="self-stretch h-3 justify-center text-neutral-600 text-[10px] font-normal  leading-none">
                        서울 노원구 공릉동
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-1 h-2 left-[6px] top-[4px] absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-400" />
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <img
                  className="w-28 h-16 rounded"
                  src="https://placehold.co/119x70"
                />
                <img
                  className="w-28 h-16 rounded"
                  src="https://placehold.co/119x70"
                />
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                <div className="w-5 h-5 bg-neutral-200 rounded-full" />
                <div className="w-5 h-5 bg-zinc-100 rounded-full" />
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="flex-1 inline-flex flex-col justify-start items-start">
                      <div className="self-stretch h-5 justify-center text-black text-xs font-semibold  leading-none">
                        송사리송송송
                      </div>
                      <div className="w-24 inline-flex justify-start items-center gap-1.5">
                        <div className="w-5 h-2.5 justify-center text-neutral-600 text-[9px] font-normal  leading-tight">
                          (4.5)
                        </div>
                      </div>
                    </div>
                    <div className="justify-center text-neutral-500 text-[8px] font-normal  leading-none">
                      6.1 4번째 방문
                    </div>
                  </div>
                  <div className="w-56 h-9 justify-center text-black text-[10px] font-medium  leading-none">
                    매번 꼼꼼하게 진료 봐주시고 필요한 부분 알려주셔서 안심하고
                    다니고 있어요. 감사합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[599px] h-96 px-6 pt-2.5 pb-7 left-0 top-[696px] absolute inline-flex flex-col justify-center items-start gap-6">
        <div className="w-96 flex flex-col justify-start items-start gap-5">
          <div className="w-80 inline-flex justify-end items-center gap-20">
            <div className="w-56 h-5 justify-center text-black text-lg font-semibold  leading-none">
              많이 찾는 진료
            </div>
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-600" />
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="w-36 h-7 px-6 bg-indigo-400 rounded-[100px] flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-white text-xs font-semibold  leading-normal">
                  심장사상충/진드기 예방
                </div>
              </div>
            </div>
            <div className="w-20 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  슬개골주사
                </div>
              </div>
            </div>
            <div className="w-20 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  피하 주사
                </div>
              </div>
            </div>
            <div className="w-20 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  담낭 수술
                </div>
              </div>
            </div>
            <div className="w-20 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  건강 검진
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-5">
          <div className="flex justify-start items-center gap-5">
            <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
              <img
                className="self-stretch h-28 rounded"
                src="https://placehold.co/111x109"
              />
              <div className="self-stretch flex flex-col justify-center items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                  <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                    심장사상충/
                    <br />
                    진드기 예방 주사
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 노원구 공릉동
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                      <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                        33%
                      </div>
                      <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                        275,000원
                      </div>
                    </div>
                    <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                      183,000원
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-end gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
              <img
                className="self-stretch h-28 rounded"
                src="https://placehold.co/111x109"
              />
              <div className="self-stretch flex flex-col justify-center items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                  <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                    심장사상충/
                    <br />
                    진드기 예방 주사
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 노원구 공릉동
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                      <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                        33%
                      </div>
                      <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                        275,000원
                      </div>
                    </div>
                    <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                      183,000원
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-end gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
              <img
                className="self-stretch h-28 rounded"
                src="https://placehold.co/111x109"
              />
              <div className="self-stretch flex flex-col justify-center items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                  <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                    심장사상충/
                    <br />
                    진드기 예방 주사
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 노원구 공릉동
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                      <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                        33%
                      </div>
                      <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                        275,000원
                      </div>
                    </div>
                    <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                      183,000원
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-end gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
              <img
                className="self-stretch h-28 rounded"
                src="https://placehold.co/111x109"
              />
              <div className="self-stretch flex flex-col justify-center items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                  <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                    심장사상충/
                    <br />
                    진드기 예방 주사
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 노원구 공릉동
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                      <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                        33%
                      </div>
                      <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                        275,000원
                      </div>
                    </div>
                    <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                      183,000원
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-end gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[599px] h-96 px-6 pt-2.5 pb-7 left-0 top-[1093px] absolute inline-flex flex-col justify-center items-start gap-6">
        <div className="w-96 flex flex-col justify-start items-start gap-5">
          <div className="w-80 inline-flex justify-end items-center gap-20">
            <div className="w-56 h-5 justify-center">
              <span className="text-indigo-400 text-lg font-semibold  leading-none">
                사용자
              </span>
              <span className="text-black text-lg font-semibold  leading-none">
                님이 관심있게 보는
              </span>
            </div>
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-400" />
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="w-20 h-7 px-6 bg-indigo-400 rounded-[100px] flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-white text-xs font-semibold  leading-normal">
                  건강검진
                </div>
              </div>
            </div>
            <div className="w-20 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  예방 접종
                </div>
              </div>
            </div>
            <div className="w-24 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  내시경 검사
                </div>
              </div>
            </div>
            <div className="w-36 h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  심장사상충/진드기 예방
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-start items-center gap-5">
          <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
            <img
              className="self-stretch h-28 rounded"
              src="https://placehold.co/111x109"
            />
            <div className="self-stretch flex flex-col justify-center items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                  심장사상충/
                  <br />
                  진드기 예방 주사
                </div>
                <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                  서울 노원구 공릉동
                </div>
              </div>
              <div className="w-24 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                      33%
                    </div>
                    <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                      275,000원
                    </div>
                  </div>
                  <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                    183,000원
                  </div>
                </div>
                <div className="inline-flex justify-start items-end gap-0.5">
                  <div className="w-10 h-2.5 justify-center">
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      4.5{" "}
                    </span>
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      (413)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
            <img
              className="self-stretch h-28 rounded"
              src="https://placehold.co/111x109"
            />
            <div className="self-stretch flex flex-col justify-center items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                  심장사상충/
                  <br />
                  진드기 예방 주사
                </div>
                <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                  서울 노원구 공릉동
                </div>
              </div>
              <div className="w-24 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                      33%
                    </div>
                    <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                      275,000원
                    </div>
                  </div>
                  <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                    183,000원
                  </div>
                </div>
                <div className="inline-flex justify-start items-end gap-0.5">
                  <div className="w-10 h-2.5 justify-center">
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      4.5{" "}
                    </span>
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      (413)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
            <img
              className="self-stretch h-28 rounded"
              src="https://placehold.co/111x109"
            />
            <div className="self-stretch flex flex-col justify-center items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                  심장사상충/
                  <br />
                  진드기 예방 주사
                </div>
                <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                  서울 노원구 공릉동
                </div>
              </div>
              <div className="w-24 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                      33%
                    </div>
                    <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                      275,000원
                    </div>
                  </div>
                  <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                    183,000원
                  </div>
                </div>
                <div className="inline-flex justify-start items-end gap-0.5">
                  <div className="w-10 h-2.5 justify-center">
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      4.5{" "}
                    </span>
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      (413)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-start gap-4">
            <img
              className="self-stretch h-28 rounded"
              src="https://placehold.co/111x109"
            />
            <div className="self-stretch flex flex-col justify-center items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
                <div className="self-stretch h-8 justify-center text-black text-sm font-medium  leading-snug">
                  심장사상충/
                  <br />
                  진드기 예방 주사
                </div>
                <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                  서울 노원구 공릉동
                </div>
              </div>
              <div className="w-24 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch flex flex-col justify-center items-center gap-0.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="w-5 h-3 justify-center text-teal-400 text-[9px] font-semibold  leading-none">
                      33%
                    </div>
                    <div className="w-20 h-3 justify-center text-neutral-400 text-[9px] font-normal  line-through leading-none">
                      275,000원
                    </div>
                  </div>
                  <div className="self-stretch h-5 justify-center text-black text-sm font-semibold  leading-snug">
                    183,000원
                  </div>
                </div>
                <div className="inline-flex justify-start items-end gap-0.5">
                  <div className="w-10 h-2.5 justify-center">
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      4.5{" "}
                    </span>
                    <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                      (413)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-[660px] px-6 pt-2.5 pb-7 left-[7px] top-[1515px] absolute inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="w-80 inline-flex justify-start items-center gap-20">
            <div className="w-56 h-12 justify-center text-black text-lg font-semibold  leading-loose">
              반려동물과 소중한 추억을 <br />
              만들어보세요
            </div>
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-600" />
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="h-7 px-6 bg-indigo-400 rounded-[100px] flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-white text-xs font-semibold  leading-normal">
                  호텔
                </div>
              </div>
            </div>
            <div className="h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  동반카페
                </div>
              </div>
            </div>
            <div className="h-7 px-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-center items-center gap-2">
              <div className="flex justify-end items-center gap-[5px]">
                <div className="justify-start text-indigo-400 text-xs font-normal  leading-normal">
                  애견 / 고양이카페
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-end items-center">
          <div className="w-72 inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded"
                src="https://placehold.co/84x82"
              />
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-center items-end gap-2.5">
                  <div className="justify-center text-black text-base font-medium  leading-none">
                    모모의 고양이호텔
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 명동역
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-2.5 h-2.5 relative overflow-hidden">
                      <div className="w-2.5 h-2 left-[0.92px] top-[1.38px] absolute bg-rose-500" />
                    </div>
                    <div className="w-9 h-2.5 justify-center text-neutral-600 text-[10px] font-normal  leading-tight">
                      123
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded"
                src="https://placehold.co/84x82"
              />
              <div className="w-32 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-3.5 justify-center text-black text-base font-medium  leading-none">
                    호텔댕루나
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 명동역
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-2.5 h-2.5 relative overflow-hidden">
                      <div className="w-2.5 h-2 left-[0.92px] top-[1.38px] absolute bg-rose-500" />
                    </div>
                    <div className="w-9 h-2.5 justify-center text-neutral-600 text-[10px] font-normal  leading-tight">
                      123
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded"
                src="https://placehold.co/84x82"
              />
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-center items-end gap-2.5">
                  <div className="w-24 h-3.5 justify-center text-black text-base font-medium  leading-none">
                    묘릉도원
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 명동역
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-2.5 h-2.5 relative overflow-hidden">
                      <div className="w-2.5 h-2 left-[0.92px] top-[1.38px] absolute bg-rose-500" />
                    </div>
                    <div className="w-9 h-2.5 justify-center text-neutral-600 text-[10px] font-normal  leading-tight">
                      123
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded"
                src="https://placehold.co/84x82"
              />
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-center items-end gap-2.5">
                  <div className="w-24 h-3.5 justify-center text-black text-base font-medium  leading-none">
                    돈워리독
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 명동역
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-2.5 h-2.5 relative overflow-hidden">
                      <div className="w-2.5 h-2 left-[0.92px] top-[1.38px] absolute bg-rose-500" />
                    </div>
                    <div className="w-9 h-2.5 justify-center text-neutral-600 text-[10px] font-normal  leading-tight">
                      123
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded"
                src="https://placehold.co/84x82"
              />
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-center items-end gap-2.5">
                  <div className="w-24 h-3.5 justify-center text-black text-base font-medium  leading-none">
                    묘성급호텔
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 명동역
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-2.5 h-2.5 relative overflow-hidden">
                      <div className="w-2.5 h-2 left-[0.92px] top-[1.38px] absolute bg-rose-500" />
                    </div>
                    <div className="w-9 h-2.5 justify-center text-neutral-600 text-[10px] font-normal  leading-tight">
                      123
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded"
                src="https://placehold.co/84x82"
              />
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-center items-end gap-2.5">
                  <div className="justify-center text-black text-base font-medium  leading-none">
                    라울레미 하우스
                  </div>
                  <div className="self-stretch h-3 justify-center text-neutral-600 text-xs font-normal  leading-none">
                    서울 명동역
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-10 h-2.5 justify-center">
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        4.5{" "}
                      </span>
                      <span className="text-neutral-600 text-[10px] font-normal  leading-tight">
                        (413)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-0.5">
                    <div className="w-2.5 h-2.5 relative overflow-hidden">
                      <div className="w-2.5 h-2 left-[0.92px] top-[1.38px] absolute bg-rose-500" />
                    </div>
                    <div className="w-9 h-2.5 justify-center text-neutral-600 text-[10px] font-normal  leading-tight">
                      123
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-12 px-6 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-400 flex flex-col justify-center items-center gap-2">
          <div className="justify-start text-indigo-400 text-base font-semibold  leading-normal">
            추천 호텔 더보기
          </div>
        </div>
      </div>
      <img
        className="w-12 h-12 left-[308px] top-[244.86px] absolute shadow-[0px_0px_4px_0px_rgba(109,129,255,0.25)]"
        src="https://placehold.co/48x48"
      />
      <div className="w-96 h-24 px-4 left-0 top-[2048px] absolute bg-white rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_-6px_10px_0px_rgba(0,0,0,0.10)] inline-flex justify-between items-center">
        <div className="w-14 h-14 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-5 h-5 left-[3.25px] top-[2.46px] absolute bg-indigo-400 outline outline-2 outline-offset-[-1px] outline-indigo-400" />
          </div>
          <div className="self-stretch text-center justify-start text-indigo-400 text-xs font-semibold  leading-none">
            홈
          </div>
        </div>
        <div className="w-14 h-14 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
          </div>
          <div className="self-stretch text-center justify-start text-black text-xs font-semibold  leading-none">
            지도
          </div>
        </div>
        <div className="w-14 h-14 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
          </div>
          <div className="self-stretch text-center justify-start text-black text-xs font-semibold  leading-none">
            캘린더
          </div>
        </div>
        <div className="w-14 h-14 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
          </div>
          <div className="self-stretch text-center justify-start text-black text-xs font-semibold  leading-none">
            커뮤니티
          </div>
        </div>
        <div className="w-14 h-14 inline-flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-4 left-[3.64px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
          </div>
          <div className="self-stretch text-center justify-start text-black text-xs font-semibold  leading-none">
            마이페이지
          </div>
        </div>
      </div>
      <div className="w-96 h-12 left-0 top-0 absolute overflow-hidden">
        <div
          data-dark-mode="False"
          data-type="Default"
          className="w-14 h-5 left-[27px] top-[14px] absolute rounded-3xl"
        >
          <div className="w-14 h-5 left-0 top-[1px] absolute text-center justify-start text-black text-base font-semibold font-['SF_Pro_Text'] leading-snug">
            9:41
          </div>
        </div>
        <div
          data-charge="100%"
          data-charging="False"
          data-dark-mode="False"
          className="w-7 h-3 left-[336px] top-[19px] absolute"
        >
          <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded border border-black" />
          <div className="w-[1.40px] h-1 left-[26px] top-[5px] absolute opacity-40 bg-black" />
          <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-black rounded-sm" />
        </div>
        <div className="w-4 h-3 left-[286px] top-[20px] absolute bg-black" />
      </div>
      <div className="w-96 h-8 left-0 top-[2136px] absolute bg-white">
        <div className="w-32 h-[5px] left-[128px] top-[21px] absolute bg-black rounded-[100px]" />
      </div>
    </div>
  );
}
