import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import { ALL_LOCATIONS } from "../data/locations";

export default function LocationAutocomplete({ label, value, onChange, placeholder }) {
  const [query, setQuery] = useState(value || "");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => setQuery(value || ""), [value]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = (query.length > 0
    ? ALL_LOCATIONS.filter((l) => l.toLowerCase().includes(query.toLowerCase()))
    : ALL_LOCATIONS
  ).slice(0, 8);

  const handleSelect = (loc) => {
    setQuery(loc);
    onChange(loc);
    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="flex items-center gap-3 px-6 py-4 min-w-[180px]">
        <span className="text-veyoraGold"><MapPin size={16} /></span>
        <div className="w-full">
          <p className="text-[11px] text-gray-400">{label}</p>
          <input
            className="text-sm text-veyoraDark font-medium w-full outline-none bg-transparent"
            value={query}
            placeholder={placeholder}
            onFocus={() => setOpen(true)}
            onChange={(e) => { setQuery(e.target.value); onChange(e.target.value); setOpen(true); }}
          />
        </div>
      </div>

      {open && results.length > 0 && (
        <div className="absolute z-40 top-full left-0 w-full bg-white border border-gray-200 rounded-b-lg shadow-lg max-h-64 overflow-y-auto">
          {results.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => handleSelect(loc)}
              className="w-full text-left px-6 py-2 text-sm text-veyoraDark hover:bg-veyoraCream"
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}