import { Link } from "react-router-dom";

export default function CorporatePage() {
  const perks = ["Dedicated account manager", "Monthly consolidated invoicing", "Priority fleet availability", "Custom SLAs for uptime"];

  return (
    <section className="bg-veyoraGreen text-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">CORPORATE</p>
        <h1 className="font-serif text-4xl mb-4">Built Around Your Business.</h1>
        <p className="text-gray-300 max-w-xl mb-10">
          From daily executive transfers to VIP client hosting, Veyora's corporate program keeps
          your business moving without the operational overhead.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {perks.map((p) => (
            <div key={p} className="bg-veyoraGreenLight rounded-lg p-5 text-sm">{p}</div>
          ))}
        </div>

        <Link to="/book-ride" className="bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
          Talk To Our Corporate Team →
        </Link>
      </div>
    </section>
  );
}