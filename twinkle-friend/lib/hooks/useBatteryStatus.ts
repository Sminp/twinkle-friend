"use client";

import { useState, useEffect } from "react";

interface BatteryStatus {
  level: number; // 0.0 ~ 1.0 (비율)
  isCharging: boolean;
  isSupported: boolean; // 배터리 API 지원 여부
}

// navigator.getBattery()는 비동기(Promise)라서 타입 정의가 조금 복잡할 수 있어요.
// 간단하게 타입 단언을 사용했습니다.
interface BatteryManager {
  level: number;
  charging: boolean;
  addEventListener: (event: string, callback: () => void) => void;
  removeEventListener: (event: string, callback: () => void) => void;
}

// 런타임 체크를 위해 변수로 뺍니다.
const isBatteryApiSupported = "getBattery" in navigator;

/** 배터리 상태를 실시간으로 추적하는 훅 */
export const useBatteryStatus = (): BatteryStatus => {
  const [status, setStatus] = useState<BatteryStatus>({
    level: 1,
    isCharging: false,
    isSupported: isBatteryApiSupported,
  });

  useEffect(() => {
    if (!status.isSupported) {
      return; // 배터리 API를 지원 안 하면 아무것도 안 함
    }

    let batteryManager: BatteryManager | null = null;

    const updateStatus = (manager: BatteryManager) => {
      setStatus({
        level: manager.level,
        isCharging: manager.charging,
        isSupported: true,
      });
    };

    // 'navigator.getBattery'는 Promise를 반환합니다.
    navigator.getBattery().then((manager: BatteryManager) => {
      batteryManager = manager;
      updateStatus(manager);

      // 배터리 상태가 바뀔 때마다(충전 시작/중단, 잔량 변경) 이벤트를 받아서 상태 업데이트
      manager.addEventListener("levelchange", () => updateStatus(manager));
      manager.addEventListener("chargingchange", () => updateStatus(manager));
    });

    // 클린업 함수: 컴포넌트가 사라질 때 이벤트 리스너를 꼭 제거해야 합니다.
    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener("levelchange", () =>
          updateStatus(batteryManager!)
        );
        batteryManager.removeEventListener("chargingchange", () =>
          updateStatus(batteryManager!)
        );
      }
    };
  }, [status.isSupported]); // isSupported 상태가 바뀔 때만 실행

  return status;
};
