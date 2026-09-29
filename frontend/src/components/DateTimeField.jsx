import { Calendar } from "lucide-react";

export default function DateTimeField({ label, value, onChange }) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const min = now.toISOString().slice(0, 16);

  return (
    <div className="flex items-center gap-3 px-6 py-4 min-w-[180px] w-full">
      <span className="text-veyoraGold"><Calendar size={16} /></span>
      <div className="w-full">
        <p className="text-[11px] text-gray-400">{label}</p>
        <input
          type="datetime-local"
          min={min}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm text-veyoraDark font-medium w-full outline-none bg-transparent"
        />
      </div>
    </div>
  );
}