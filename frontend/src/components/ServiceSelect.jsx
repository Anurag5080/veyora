import { Car } from "lucide-react";
import { SERVICES } from "../data/services";

export default function ServiceSelect({ label, value, onChange }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 min-w-[180px] w-full">
      <span className="text-veyoraGold"><Car size={16} /></span>
      <div className="w-full">
        <p className="text-[11px] text-gray-400">{label}</p>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm text-veyoraDark font-medium w-full outline-none bg-transparent"
        >
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
    </div>
  );
}