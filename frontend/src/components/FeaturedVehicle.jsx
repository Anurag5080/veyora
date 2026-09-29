import { Link } from "react-router-dom";
import { VEHICLES } from "../data/vehicles";

export default function FeaturedVehicle() {
  const icon = VEHICLES.find((v) => v.isIcon) || VEHICLES[0];

  return (
    <section className="bg-veyoraCream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        <div className="w-full h-72 md:h-[420px] bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={icon.images[0]} alt={icon.name} className="max-w-full max-h-full object-contain" />
        </div>
        <div className="p-8 md:p-14">
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">THE ICON</p>
          <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark">{icon.name}</h2>
          <p className="text-gray-500 italic mt-2">A statement before you say a word.</p>
          <div className="flex gap-6 text-sm text-gray-600 mt-4">
            <span>{icon.tag}</span>
            <span>Chauffeur Driven</span>
            <span>Executive Class</span>
          </div>
          <p className="mt-6 text-veyoraDark">
            <span className="text-2xl font-serif">₹{icon.pricePerDay.toLocaleString("en-IN")}</span>
            <span className="text-gray-500 text-sm"> / day</span>
          </p>
          <Link to="/book-ride" state={{ vehicle: icon.name }} className="mt-6 inline-block bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
            Reserve This Vehicle →
          </Link>
        </div>
      </div>
    </section>
  );
}