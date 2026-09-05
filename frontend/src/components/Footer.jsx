import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-veyoraGreen text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <p className="font-serif text-xl text-white tracking-widest">VEYORA</p>
          <p className="text-[10px] tracking-[0.3em] text-veyoraGold">MOBILITY</p>
          <p className="text-gray-400 mt-3 text-xs">Move beyond ordinary.</p>
        </div>

        <FooterCol title="Explore" items={[
          { label: "Fleet", to: "/fleet" },
          { label: "Services", to: "/services" },
          { label: "Experiences", to: "/experiences" },
          { label: "Corporate", to: "/corporate" },
          { label: "Locations", to: "/locations" },
        ]} />
        <FooterCol title="Company" items={[
          { label: "About Veyora", to: "/about" },
          { label: "Careers", to: "/about" },
          { label: "Partner With Us", to: "/corporate" },
          { label: "Contact", to: "/book-ride" },
          { label: "FAQs", to: "/" },
        ]} />
        <FooterCol title="Connect" items={[
          { label: "Instagram", to: "/about" },
          { label: "LinkedIn", to: "/about" },
          { label: "WhatsApp", to: "/about" },
          { label: "Email", to: "/about" },
        ]} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-10 pt-6 border-t border-white/10 text-xs text-gray-400">
        <p>© 2025 Veyora Mobility. All rights reserved.</p>
        <p>+91 98765 43210 · concierge@veyora.com</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="text-white text-sm mb-3">{title}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.label}><Link to={i.to} className="hover:text-veyoraGold">{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}