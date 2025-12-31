import { useState, useMemo } from "react";
import { countries, Country } from "@/data/countries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, ChevronDown, Globe } from "lucide-react";

interface CountrySelectorProps {
  onSelect: (country: Country) => void;
}

export function CountrySelector({ onSelect }: CountrySelectorProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Country | null>(null);

  const filteredCountries = useMemo(() => {
    if (!search) return countries;
    const searchLower = search.toLowerCase();
    return countries.filter((c) => {
      // Search in name
      if (c.name.toLowerCase().includes(searchLower)) return true;
      // Search in searchTerms if available
      if (c.searchTerms?.some(term => term.toLowerCase().includes(searchLower))) return true;
      return false;
    });
  }, [search]);

  const handleSelect = (country: Country) => {
    setSelected(country);
    setIsOpen(false);
    setSearch("");
  };

  const handleStart = () => {
    if (selected) {
      onSelect(selected);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full">
            <Globe className="w-8 h-8 text-amber-400" />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
          Select a country to start the New Year countdown
        </h2>
        <p className="text-white/60 text-center text-sm mb-6">
          Experience midnight around the world
        </p>

        <div className="relative mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 transition-colors"
          >
            <span className={selected ? "text-white" : "text-white/50"}>
              {selected ? selected.name : "Choose a country..."}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl">
              <div className="p-3 border-b border-white/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    type="text"
                    placeholder="Search countries..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    autoFocus
                  />
                </div>
              </div>
              <ScrollArea className="h-60">
                <div className="p-2">
                  {filteredCountries.map((country) => (
                    <button
                      key={country.timezone}
                      onClick={() => handleSelect(country)}
                      className="w-full px-4 py-2.5 text-left text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {country.name}
                    </button>
                  ))}
                  {filteredCountries.length === 0 && (
                    <p className="text-white/40 text-center py-4">
                      No countries found
                    </p>
                  )}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>

        <Button
          onClick={handleStart}
          disabled={!selected}
          className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Start Countdown
        </Button>
      </div>
    </div>
  );
}
