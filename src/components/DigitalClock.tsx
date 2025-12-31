import { useCountdownTime } from "@/hooks/useCountdownTime";
import { Country } from "@/data/countries";
import { useEffect } from "react";

interface DigitalClockProps {
  country: Country;
  onSixSecondsLeft: () => void;
  onMidnight: () => void;
  hasCelebrated: boolean;
}

export function DigitalClock({
  country,
  onSixSecondsLeft,
  onMidnight,
  hasCelebrated,
}: DigitalClockProps) {
  const { days, hours, minutes, seconds, totalSeconds, isPastMidnight } =
    useCountdownTime(country.timezone);

  // Trigger 6 seconds callback
  useEffect(() => {
    if (totalSeconds === 6 && !hasCelebrated) {
      onSixSecondsLeft();
    }
  }, [totalSeconds, hasCelebrated, onSixSecondsLeft]);

  // Trigger midnight callback
  useEffect(() => {
    if (isPastMidnight && !hasCelebrated) {
      onMidnight();
    }
  }, [isPastMidnight, hasCelebrated, onMidnight]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <p className="text-white/70 text-lg sm:text-xl mb-2">{country.name}</p>
      <h2 className="text-white/80 text-xl sm:text-2xl font-light mb-4 sm:mb-6">
        New Year Countdown
      </h2>

      <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
        {days > 0 && (
          <>
            <TimeUnit value={days.toString()} label="Days" />
            <Separator />
          </>
        )}
        <TimeUnit value={pad(hours)} label="Hours" />
        <Separator />
        <TimeUnit value={pad(minutes)} label="Minutes" />
        <Separator />
        <TimeUnit value={pad(seconds)} label="Seconds" />
      </div>

      {isPastMidnight && hasCelebrated && (
        <p className="mt-6 sm:mt-8 text-amber-400 text-xl sm:text-2xl font-bold animate-pulse">
          Happy New Year 2026 🎉
        </p>
      )}
    </div>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 border border-white/10 min-w-[60px] sm:min-w-[90px] flex flex-col items-center">
      <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-mono tracking-wider">
        {value}
      </span>
      <span className="text-white/50 text-xs sm:text-sm mt-1">{label}</span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-white/60 animate-pulse">
      :
    </span>
  );
}
