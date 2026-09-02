import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";

const navLinks = ["Fleet", "Services", "Experiences", "Corporate", "Locations", "About"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="leading-tight">
          <p className="font-serif text-xl tracking-widest">VEYORA</p>
          <p className="text-[10px] tracking-[0.3em] text-veyoraGold -mt-1">MOBILITY</p>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-veyoraGold transition-colors">
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={16} className="text-veyoraGold" />
            <span>Delhi NCR</span>
          </div>
          <button className="bg-veyoraGold text-veyoraDark font-medium text-sm px-5 py-2.5 rounded hover:brightness-95 transition">
            Book a Ride
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-veyoraGreen px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm">{link}</a>
          ))}
          <button className="bg-veyoraGold text-veyoraDark font-medium text-sm px-5 py-2.5 rounded mt-2">
            Book a Ride
          </button>
        </div>
      )}
    </header>
  );
}