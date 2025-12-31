import { useState } from "react";
import { Country } from "@/data/countries";
import { DigitalClock } from "./DigitalClock";
import { MidnightVideo } from "./MidnightVideo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CountdownScreenProps {
  country: Country;
  onBack: () => void;
}

export function CountdownScreen({ country, onBack }: CountdownScreenProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const handleMidnight = () => {
    setShowVideo(true);
    setHasCelebrated(true);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <>
      {showVideo && <MidnightVideo onVideoEnd={handleVideoEnd} />}

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
          onMidnight={handleMidnight}
          hasCelebrated={hasCelebrated}
        />
      </div>
    </>
  );
}
