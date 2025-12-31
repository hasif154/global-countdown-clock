import { useState } from "react";
import { Country } from "@/data/countries";
import { CountrySelector } from "@/components/CountrySelector";
import { CountdownScreen } from "@/components/CountdownScreen";
import backgroundImage from "@/assets/2025_image.jpg";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

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
