import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Car } from "lucide-react";

export default function SearchBar() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    pickup: "Delhi NCR",
    destination: "",
    date: "31 Aug 2024, 08:30 PM",
    service: "Chauffeur Drive",
  });

  const handleSearch = () => {
    navigate("/book-ride", { state: form });
  };

  return (
    <section className="relative z-20 px-4 -mt-0 pt-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-gray-200 overflow-hidden">
        <Field icon={<MapPin size={16} />} label="Pickup Location" value={form.pickup}
          onChange={(v) => setForm({ ...form, pickup: v })} />
        <Field icon={<MapPin size={16} />} label="Destination" value={form.destination}
          placeholder="Enter destination" onChange={(v) => setForm({ ...form, destination: v })} />
        <Field icon={<Calendar size={16} />} label="Date & Time" value={form.date}
          onChange={(v) => setForm({ ...form, date: v })} />
        <Field icon={<Car size={16} />} label="Service" value={form.service}
          onChange={(v) => setForm({ ...form, service: v })} />
        <button
          onClick={handleSearch}
          className="bg-veyoraGold text-veyoraDark font-medium px-8 py-4 whitespace-nowrap hover:brightness-95"
        >
          Find Your Ride →
        </button>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs text-gray-600 mt-4 pb-2">
        {["Chauffeur Driven", "Premium Fleet", "24/7 Concierge", "Safe & Secure"].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
}

function Field({ icon, label, value, placeholder, onChange }) {
  return (
    <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-[180px]">
      <span className="text-veyoraGold">{icon}</span>
      <div className="w-full">
        <p className="text-[11px] text-gray-400">{label}</p>
        <input
          className="text-sm text-veyoraDark font-medium w-full outline-none bg-transparent"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}