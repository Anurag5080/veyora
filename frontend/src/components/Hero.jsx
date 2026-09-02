export default function Hero() {
  return (
    <section className="relative bg-veyoraGreen text-white min-h-150 md:min-h-170 flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600"
        alt="Chauffeur beside luxury car"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-linear-to-r from-veyoraGreen via-veyoraGreen/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full px-6 pb-16 pt-40 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="max-w-xl">
          <p className="text-veyoraGold tracking-[0.2em] text-xs mb-3">LUXURY CAR RENTAL</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Move Beyond <span className="text-veyoraGold">Ordinary.</span>
          </h1>
          <p className="text-gray-200 mt-4 max-w-md">
            Premium automobiles, professional chauffeurs and exceptional experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
              Book Your Ride →
            </button>
            <button className="border border-white/40 px-6 py-3 rounded hover:bg-white/10">
              Explore The Fleet
            </button>
          </div>
        </div>

        <div className="hidden md:block text-right text-sm max-w-45">
          <p className="text-gray-200">More Than a Destination.</p>
          <div className="w-8 h-px bg-veyoraGold my-2 ml-auto" />
          <p className="text-gray-200">A Higher Way to Travel.</p>
        </div>
      </div>
    </section>
  );
}