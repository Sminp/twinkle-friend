"use client";

import { useState, useEffect } from "react";

type NetworkType = "wifi" | "cellular" | "none" | "unknown";

interface NetworkStatus {
  type: NetworkType;
  isOnline: boolean;
  isSupported: boolean; // 네트워크 API 지원 여부
}

// 런타임 체크를 위해 변수로 뺍니다.
const isNetworkApiSupported = "connection" in navigator;
const connection = isNetworkApiSupported ? navigator.connection : null;

/** 네트워크 상태를 실시간으로 추적하는 훅 */
export const useNetworkStatus = (): NetworkStatus => {
  const [status, setStatus] = useState<NetworkStatus>({
    type: connection?.type ?? "unknown",
    isOnline: navigator.onLine,
    isSupported: isNetworkApiSupported,
  });

  useEffect(() => {
    if (!status.isSupported) {
      return; // API 미지원 시 종료
    }

    const updateStatus = () => {
      setStatus({
        type: connection.type,
        isOnline: navigator.onLine,
        isSupported: true,
      });
    };

    // 'change' 이벤트는 Wi-Fi -> LTE 등으로 바뀔 때 발생
    connection.addEventListener("change", updateStatus);
    // 'online'/'offline' 이벤트는 인터넷 연결 자체가 끊기거나 붙을 때 발생
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    // 클린업
    return () => {
      connection.removeEventListener("change", updateStatus);
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, [status.isSupported]);

  return status;
};
