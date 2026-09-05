import { Link } from "react-router-dom";

const services = [
  { title: "Airport Transfers", desc: "Arrive without waiting." },
  { title: "Executive Mobility", desc: "Move at the pace of business." },
  { title: "Weddings & Celebrations", desc: "Make the entrance unforgettable." },
  { title: "Outstation Journeys", desc: "Leave the ordinary behind." },
  { title: "Corporate Mobility", desc: "Built around your business." },
  { title: "Events & VIP Transportation", desc: "When ordinary simply won't do." },
];

export default function Services() {
  return (
    <section className="bg-veyoraCream py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-4 mb-10">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">OUR SERVICES</p>
          <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark">More Than A Ride.</h2>
        </div>
        <div className="text-sm text-gray-500 max-w-xs">
          Tailored mobility solutions for every occasion.
          <div className="mt-2">
            <Link to="/services" className="text-veyoraGreen underline underline-offset-4">Explore All Services →</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((s) => (
          <div key={s.title} className="bg-veyoraGreen text-white rounded-lg p-5 h-40 flex flex-col justify-between">
            <div className="w-8 h-8 rounded bg-veyoraGold/20" />
            <div>
              <p className="text-sm font-medium">{s.title}</p>
              <p className="text-xs text-gray-300 mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}