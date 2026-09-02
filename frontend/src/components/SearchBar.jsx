import { MapPin, Calendar, Car } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="relative z-20 -mt-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-gray-200 overflow-hidden">
        <Field icon={<MapPin size={16} />} label="Pickup Location" value="Delhi NCR" />
        <Field icon={<MapPin size={16} />} label="Destination" value="Enter destination" />
        <Field icon={<Calendar size={16} />} label="Date & Time" value="31 Aug 2024, 08:30 PM" />
        <Field icon={<Car size={16} />} label="Service" value="Chauffeur Drive" />
        <button className="bg-veyoraGold text-veyoraDark font-medium px-8 py-4 whitespace-nowrap hover:brightness-95">
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

function Field({ icon, label, value }) {
  return (
    <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-[180px]">
      <span className="text-veyoraGold">{icon}</span>
      <div>
        <p className="text-[11px] text-gray-400">{label}</p>
        <p className="text-sm text-veyoraDark font-medium">{value}</p>
      </div>
    </div>
  );
}