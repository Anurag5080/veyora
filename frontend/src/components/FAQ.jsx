import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What types of vehicles does Veyora offer?", a: "Our fleet spans executive sedans, luxury SUVs, ultra-luxury vehicles like the Mercedes-Maybach, and performance cars such as the Porsche 911 — all maintained to the highest standard." },
  { q: "Are Veyora vehicles chauffeur-driven?", a: "Yes, every Veyora rental comes with a trained, verified, and discreet professional chauffeur as standard." },
  { q: "Can I book a car for multiple days?", a: "Absolutely. You can book by the day, for multi-day outstation trips, or set up a recurring corporate arrangement." },
  { q: "Do you provide airport transfers?", a: "Yes — our airport transfer service includes real-time flight tracking so your chauffeur is always there when you land." },
  { q: "What is your cancellation policy?", a: "Rides can be cancelled free of charge up to 6 hours before pickup. Cancellations within 6 hours may incur a nominal fee." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-veyoraCream py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">HELP & SUPPORT</p>
          <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark">Frequently Asked Questions.</h2>
        </div>
        <div className="divide-y divide-gray-300">
          {faqs.map((item, i) => (
            <div key={item.q}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex justify-between items-center py-4 text-left">
                <span className="text-veyoraDark text-sm md:text-base">{item.q}</span>
                {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              {openIndex === i && <p className="text-sm text-gray-500 pb-4 pr-8">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}