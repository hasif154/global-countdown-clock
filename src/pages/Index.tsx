import { useState } from "react";
import { Country } from "@/data/countries";
import { CountrySelector } from "@/components/CountrySelector";
import { CountdownScreen } from "@/components/CountdownScreen";
import { BackgroundVideo } from "@/components/BackgroundVideo";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {selectedCountry ? (
          <CountdownScreen
            country={selectedCountry}
            onBack={() => setSelectedCountry(null)}
          />
        ) : (
          <CountrySelector onSelect={setSelectedCountry} />
        )}
      </div>
    </div>
  );
};

export default Index;
