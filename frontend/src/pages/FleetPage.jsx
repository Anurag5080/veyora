import { useState } from "react";
import { Link } from "react-router-dom";
import { VEHICLES } from "../data/vehicles";
import VehicleGallery from "../components/VehicleGallery";

const categories = ["All", "Sedan", "SUV", "Ultra Luxury", "Performance"];

export default function FleetPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? VEHICLES : VEHICLES.filter((c) => c.tag === active);

  return (
    <section className="bg-veyoraCream py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">THE COLLECTION</p>
        <h1 className="font-serif text-4xl text-veyoraDark mb-4">Our Full Fleet.</h1>
        <p className="text-gray-500 max-w-xl mb-8">
          From understated elegance to unmistakable presence, choose the automobile that matches the moment.
        </p>

        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded text-sm ${active === cat ? "bg-veyoraGold text-veyoraDark" : "bg-white text-veyoraDark border border-gray-300"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-sm relative">
              {!car.available && (
                <span className="absolute top-3 left-3 z-10 bg-veyoraDark/80 text-white text-[10px] px-2 py-1 rounded">Currently Unavailable</span>
              )}
              <VehicleGallery images={car.images} name={car.name} />
              <div className="p-5">
                <p className="font-serif text-lg text-veyoraDark">{car.name}</p>
                <p className="text-xs text-gray-400 mb-2">{car.tag}</p>
                <p className="text-sm text-veyoraGreen font-medium mb-4">₹{car.pricePerDay.toLocaleString("en-IN")} / day</p>
                {car.available ? (
                  <Link to="/book-ride" state={{ vehicle: car.name }} className="bg-veyoraGold text-veyoraDark text-sm font-medium px-4 py-2 rounded inline-block hover:brightness-95">
                    Reserve This Vehicle →
                  </Link>
                ) : (
                  <span className="text-gray-400 text-sm">Not available right now</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}