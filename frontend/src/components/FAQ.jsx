import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  "What types of vehicles does Veyora offer?",
  "Are Veyora vehicles chauffeur-driven?",
  "Can I book a car for multiple days?",
  "Do you provide airport transfers?",
  "What is your cancellation policy?",
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
          {faqs.map((q, i) => (
            <button
              key={q}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-veyoraDark text-sm md:text-base">{q}</span>
              {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}