import { useState, useEffect, useCallback } from "react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isPastMidnight: boolean;
}

export function useCountdownTime(timezone: string): CountdownState {
  const getCountdown = useCallback(() => {
    const now = new Date();
    
    // Get current date/time in the target timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const year = parseInt(parts.find((p) => p.type === "year")?.value || "2025");
    const month = parseInt(parts.find((p) => p.type === "month")?.value || "1");
    const day = parseInt(parts.find((p) => p.type === "day")?.value || "1");
    const hours = parseInt(parts.find((p) => p.type === "hour")?.value || "0");
    const minutes = parseInt(parts.find((p) => p.type === "minute")?.value || "0");
    const seconds = parseInt(parts.find((p) => p.type === "second")?.value || "0");

    // Check if it's already Jan 1st 2026 or later
    if (year > 2025 || (year === 2025 && month === 1 && day === 1)) {
      // Actually check for 2026
      if (year >= 2026 || (year === 2025 && month >= 1 && day >= 1)) {
        // Re-check properly
      }
    }
    
    const isJan1_2026 = year === 2026 && month === 1 && day === 1;
    const isPast2026 = year > 2026 || (year === 2026 && (month > 1 || (month === 1 && day > 1)));
    const isPastMidnight = isJan1_2026 || isPast2026;

    if (isPastMidnight) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalSeconds: 0,
        isPastMidnight: true,
      };
    }

    // Calculate time until midnight Jan 1st 2026
    // Current time in seconds since midnight
    const currentSecondsInDay = hours * 3600 + minutes * 60 + seconds;
    
    // Days until Dec 31st 2025
    const targetDate = new Date(2025, 11, 31); // Dec 31, 2025
    const currentDate = new Date(year, month - 1, day);
    const daysDiff = Math.floor((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Seconds remaining in current day until midnight
    const secondsUntilMidnightToday = 86400 - currentSecondsInDay;
    
    // Total seconds = full days * 86400 + seconds until midnight today
    const totalSeconds = daysDiff * 86400 + secondsUntilMidnightToday;
    
    if (totalSeconds <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalSeconds: 0,
        isPastMidnight: true,
      };
    }

    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return {
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
      totalSeconds,
      isPastMidnight: false,
    };
  }, [timezone]);

  const [countdown, setCountdown] = useState<CountdownState>(getCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [getCountdown]);

  return countdown;
}
