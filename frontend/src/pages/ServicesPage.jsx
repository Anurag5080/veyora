import { Link } from "react-router-dom";

const services = [
  { title: "Airport Transfers", desc: "Arrive without waiting — real-time flight tracking and meet-and-greet." },
  { title: "Executive Mobility", desc: "Move at the pace of business, with a chauffeur who knows the route." },
  { title: "Weddings & Celebrations", desc: "Make the entrance unforgettable with a fleet built for the occasion." },
  { title: "Outstation Journeys", desc: "Leave the ordinary behind on long-distance, multi-city trips." },
  { title: "Corporate Mobility", desc: "Built around your business — retainers, invoicing, and dedicated fleets." },
  { title: "Events & VIP Transportation", desc: "When ordinary simply won't do, for galas, premieres, and private events." },
];

export default function ServicesPage() {
  return (
    <section className="bg-veyoraCream py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">OUR SERVICES</p>
        <h1 className="font-serif text-4xl text-veyoraDark mb-8">More Than A Ride.</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-veyoraGreen text-white rounded-lg p-6 flex flex-col justify-between h-48">
              <div className="w-10 h-10 rounded bg-veyoraGold/20" />
              <div>
                <p className="font-serif text-lg">{s.title}</p>
                <p className="text-sm text-gray-300 mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/book-ride" className="bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
            Book Your Service →
          </Link>
        </div>
      </div>
    </section>
  );
}