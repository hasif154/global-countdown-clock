import { useState, useCallback } from "react";
import { Country } from "@/data/countries";
import { DigitalClock } from "./DigitalClock";
import { FinalCountdownVideo } from "./FinalCountdownVideo";
import { MidnightVideo } from "./MidnightVideo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CountdownScreenProps {
  country: Country;
  onBack: () => void;
  soundEnabled?: boolean;
}

export function CountdownScreen({ country, onBack, soundEnabled = false }: CountdownScreenProps) {
  const [showFinalCountdown, setShowFinalCountdown] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const handleSixSecondsLeft = useCallback(() => {
    setShowFinalCountdown(true);
  }, []);

  const handleMidnight = useCallback(() => {
    setHasCelebrated(true);
  }, []);

  const handleFinalCountdownEnd = useCallback(() => {
    setShowFinalCountdown(false);
    setShowCelebration(true);
    setHasCelebrated(true);
  }, []);

  const handleCelebrationEnd = useCallback(() => {
    setShowCelebration(false);
  }, []);

  return (
    <>
      {showFinalCountdown && (
        <FinalCountdownVideo onVideoEnd={handleFinalCountdownEnd} soundEnabled={soundEnabled} />
      )}

      {showCelebration && <MidnightVideo onVideoEnd={handleCelebrationEnd} soundEnabled={soundEnabled} />}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <Button
          onClick={onBack}
          variant="ghost"
          className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white/70 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Change Country
        </Button>

        <DigitalClock
          country={country}
          onSixSecondsLeft={handleSixSecondsLeft}
          onMidnight={handleMidnight}
          hasCelebrated={hasCelebrated}
          hideClock={showFinalCountdown || showCelebration}
        />
      </div>
    </>
  );
}
