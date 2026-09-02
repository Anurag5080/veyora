const cities = ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Jaipur", "Goa"];

export default function Locations() {
  return (
    <section className="bg-veyoraCream py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">OUR NETWORK</p>
          <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark mb-3">Wherever Business Takes You.</h2>
          <p className="text-gray-500 mb-6">Expanding our network. Expanding our possibilities.</p>

          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 mb-6">
            {cities.map((c) => <span key={c}>📍 {c}</span>)}
          </div>

          <button className="bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
            Explore All Locations →
          </button>
        </div>

        <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center text-veyoraGreen font-serif text-lg">
          India Map — INDIA AND BEYOND
        </div>
      </div>
    </section>
  );
}