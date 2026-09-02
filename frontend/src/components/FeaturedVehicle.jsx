export default function FeaturedVehicle() {
  return (
    <section className="bg-veyoraCream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        <img
          src="https://images.unsplash.com/photo-1622200294737-232cba9b7a17?q=80&w=1000"
          alt="Mercedes-Maybach S-Class"
          className="w-full h-72 md:h-[420px] object-cover"
        />
        <div className="p-8 md:p-14">
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">THE ICON</p>
          <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark">Mercedes-Maybach S-Class</h2>
          <p className="text-gray-500 italic mt-2">A statement before you say a word.</p>

          <div className="flex gap-6 text-sm text-gray-600 mt-4">
            <span>4 Seats</span>
            <span>Chauffeur Driven</span>
            <span>Executive Class</span>
          </div>

          <p className="mt-6 text-veyoraDark">
            <span className="text-2xl font-serif">₹1,80,000</span>
            <span className="text-gray-500 text-sm"> / day</span>
          </p>

          <button className="mt-6 bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
            Reserve This Vehicle →
          </button>
        </div>
      </div>
    </section>
  );
}