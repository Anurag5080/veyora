import { Link } from "react-router-dom";

const cities = ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Jaipur", "Goa", "Kolkata", "Ahmedabad", "Chandigarh", "Lucknow", "Surat", "Kochi", "Indore"];

export default function Locations() {
  return (
    <section className="bg-veyoraCream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">OUR NETWORK</p>
        <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark mb-3">Wherever Business Takes You.</h2>
        <p className="text-gray-500 mb-8 max-w-xl">Expanding our network. Expanding our possibilities.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {cities.map((c) => (
            <div key={c} className="bg-white rounded-lg px-4 py-3 text-sm text-veyoraDark font-medium shadow-sm">📍 {c}</div>
          ))}
        </div>

        <Link to="/locations" className="bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95 inline-block">
          Explore All Locations →
        </Link>
      </div>
    </section>
  );
}