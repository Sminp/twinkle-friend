"use client";

import { useState, useEffect } from "react";

// '9:41' 형식으로 시간을 포맷하는 헬퍼 함수
const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

/** 현재 시간을 1분마다 업데이트하여 반환하는 훅 */
export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    // 1분(60000ms)마다 시간을 다시 계산합니다.
    const intervalId = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 60000);

    // 컴포넌트가 사라질 때 interval을 정리(clean-up)해줘야 메모리 누수가 안 생겨요.
    return () => clearInterval(intervalId);
  }, []); // []는 이 훅이 맨 처음 마운트될 때 딱 한 번만 실행된다는 의미입니다.

  return currentTime;
};
