import { useCountryTime } from "@/hooks/useCountryTime";
import { Country } from "@/data/countries";

interface DigitalClockProps {
  country: Country;
  onMidnight: () => void;
  hasCelebrated: boolean;
}

export function DigitalClock({
  country,
  onMidnight,
  hasCelebrated,
}: DigitalClockProps) {
  const { hours, minutes, seconds, isPastMidnight, isExactlyMidnight } =
    useCountryTime(country.timezone);

  // Trigger midnight callback
  if (isExactlyMidnight && !hasCelebrated) {
    onMidnight();
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-white/70 text-lg sm:text-xl mb-2">{country.name}</p>
      <h2 className="text-white/80 text-xl sm:text-2xl font-light mb-4 sm:mb-6">
        You're local time
      </h2>

      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <TimeUnit value={hours} />
        <Separator />
        <TimeUnit value={minutes} />
        <Separator />
        <TimeUnit value={seconds} />
      </div>

      {isPastMidnight && hasCelebrated && (
        <p className="mt-6 sm:mt-8 text-amber-400 text-xl sm:text-2xl font-bold animate-pulse">
          Happy New Year 🎉
        </p>
      )}
    </div>
  );
}

function TimeUnit({ value }: { value: string }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/10 min-w-[70px] sm:min-w-[100px]">
      <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white font-mono tracking-wider">
        {value}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white/60 animate-pulse">
      :
    </span>
  );
}
