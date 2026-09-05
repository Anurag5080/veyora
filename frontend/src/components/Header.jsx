import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fleet", to: "/fleet" },
  { label: "Services", to: "/services" },
  { label: "Experiences", to: "/experiences" },
  { label: "Corporate", to: "/corporate" },
  { label: "Locations", to: "/locations" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full z-30 bg-veyoraGreen text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="leading-tight">
          <p className="font-serif text-xl tracking-widest">VEYORA</p>
          <p className="text-[10px] tracking-[0.3em] text-veyoraGold -mt-1">MOBILITY</p>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="hover:text-veyoraGold transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={16} className="text-veyoraGold" />
            <span>Delhi NCR</span>
          </div>
          <Link
            to="/book-ride"
            className="bg-veyoraGold text-veyoraDark font-medium text-sm px-5 py-2.5 rounded hover:brightness-95 transition"
          >
            Book a Ride
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-veyoraGreenLight px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className="text-sm">
              {link.label}
            </Link>
          ))}
          <Link
            to="/book-ride"
            onClick={() => setOpen(false)}
            className="bg-veyoraGold text-veyoraDark font-medium text-sm px-5 py-2.5 rounded mt-2 text-center"
          >
            Book a Ride
          </Link>
        </div>
      )}
    </header>
  );
}