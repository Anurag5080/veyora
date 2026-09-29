import { Link } from "react-router-dom";
import { VEHICLES } from "../data/vehicles";

export default function Fleet() {
  const preview = VEHICLES.slice(0, 4);

  return (
    <section className="bg-veyoraGreen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">THE COLLECTION</p>
          <h2 className="font-serif text-3xl md:text-4xl">A Fleet Worth Arriving In.</h2>
        </div>
        <div className="max-w-sm text-sm text-gray-300">
          From understated elegance to unmistakable presence, choose the automobile that matches the moment.
          <div className="mt-2">
            <Link to="/fleet" className="text-veyoraGold underline underline-offset-4 text-sm">View All Vehicles →</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {preview.map((car) => (
          <div key={car.id} className="bg-veyoraGreenLight rounded-lg overflow-hidden">
            <div className="w-full h-32 bg-black/20 flex items-center justify-center overflow-hidden">
              <img src={car.images[0]} alt={car.name} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-4">
              <p className="font-serif text-sm">{car.name}</p>
              <p className="text-xs text-gray-400 mb-2">{car.tag}</p>
              <Link to="/fleet" className="text-veyoraGold text-xs">Explore →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}