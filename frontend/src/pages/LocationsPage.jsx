const cities = ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Jaipur", "Goa"];

export default function LocationsPage() {
  return (
    <section className="bg-veyoraCream py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">OUR NETWORK</p>
        <h1 className="font-serif text-4xl text-veyoraDark mb-4">Wherever Business Takes You.</h1>
        <p className="text-gray-500 max-w-xl mb-10">Expanding our network. Expanding our possibilities.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((c) => (
            <div key={c} className="bg-white rounded-lg p-5 text-veyoraDark font-medium text-sm shadow-sm">
              📍 {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}