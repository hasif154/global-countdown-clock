import { useState, useEffect, useCallback } from "react";

interface TimeState {
  hours: string;
  minutes: string;
  seconds: string;
  isPastMidnight: boolean;
  isExactlyMidnight: boolean;
}

export function useCountryTime(timezone: string): TimeState {
  const getTimeInTimezone = useCallback(() => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const hours = parts.find((p) => p.type === "hour")?.value || "00";
    const minutes = parts.find((p) => p.type === "minute")?.value || "00";
    const seconds = parts.find((p) => p.type === "second")?.value || "00";

    // Get the date in the timezone to check if it's January 1st
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      month: "numeric",
      day: "numeric",
    });
    const dateParts = dateFormatter.formatToParts(now);
    const month = dateParts.find((p) => p.type === "month")?.value;
    const day = dateParts.find((p) => p.type === "day")?.value;

    const isJan1 = month === "1" && day === "1";
    const isPastMidnight = isJan1;
    const isExactlyMidnight =
      isJan1 && hours === "00" && minutes === "00" && seconds === "00";

    return { hours, minutes, seconds, isPastMidnight, isExactlyMidnight };
  }, [timezone]);

  const [time, setTime] = useState<TimeState>(getTimeInTimezone);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeInTimezone());
    }, 1000);

    return () => clearInterval(interval);
  }, [getTimeInTimezone]);

  return time;
}
