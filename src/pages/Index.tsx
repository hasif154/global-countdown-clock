import { useState, useRef } from "react";
import { Country } from "@/data/countries";
import { CountrySelector } from "@/components/CountrySelector";
import { CountdownScreen } from "@/components/CountdownScreen";
import { BackgroundVideo, BackgroundVideoRef } from "@/components/BackgroundVideo";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const bgVideoRef = useRef<BackgroundVideoRef>(null);

  const handleEnableSound = () => {
    bgVideoRef.current?.unmute();
    setSoundEnabled(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <BackgroundVideo ref={bgVideoRef} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {selectedCountry ? (
          <CountdownScreen
            country={selectedCountry}
            onBack={() => setSelectedCountry(null)}
            soundEnabled={soundEnabled}
          />
        ) : (
          <CountrySelector onSelect={setSelectedCountry} />
        )}
      </div>

      {/* Sound enable button - positioned above all content */}
      {!soundEnabled && (
        <button
          onClick={handleEnableSound}
          className="fixed bottom-6 right-6 z-50 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm hover:bg-white/30 transition-all animate-pulse"
        >
          🔊 Tap to enable sound
        </button>
      )}
    </div>
  );
};

export default Index;
