export default function Footer() {
  return (
    <footer className="bg-veyoraGreen text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <p className="font-serif text-xl text-white tracking-widest">VEYORA</p>
          <p className="text-[10px] tracking-[0.3em] text-veyoraGold">MOBILITY</p>
          <p className="text-gray-400 mt-3 text-xs">Move beyond ordinary.</p>
        </div>

        <FooterCol title="Explore" items={["Fleet", "Services", "Experiences", "Corporate", "Locations"]} />
        <FooterCol title="Company" items={["About Veyora", "Careers", "Partner With Us", "Contact", "FAQs"]} />
        <FooterCol title="Connect" items={["Instagram", "LinkedIn", "WhatsApp", "Email"]} />
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
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}