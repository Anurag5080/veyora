import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Sedans", "SUVs", "Ultra Luxury", "Performance"];

const cars = [
  { name: "Mercedes-Benz S-Class", type: "Executive Sedan", category: "Sedans", price: "₹45,000/day", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600" },
  { name: "Range Rover", type: "Luxury SUV", category: "SUVs", price: "₹55,000/day", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=600" },
  { name: "Mercedes-Maybach S-Class", type: "Ultra Luxury", category: "Ultra Luxury", price: "₹1,80,000/day", img: "https://images.unsplash.com/photo-1622200294737-232cba9b7a17?q=80&w=600" },
  { name: "Porsche 911", type: "Performance", category: "Performance", price: "₹95,000/day", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600" },
  { name: "BMW 7 Series", type: "Executive Sedan", category: "Sedans", price: "₹40,000/day", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600" },
  { name: "Audi Q8", type: "Luxury SUV", category: "SUVs", price: "₹50,000/day", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=600" },
];

export default function FleetPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cars : cars.filter((c) => c.category === active);

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
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded text-sm ${
                active === cat ? "bg-veyoraGold text-veyoraDark" : "bg-white text-veyoraDark border border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <div key={car.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src={car.img} alt={car.name} className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="font-serif text-lg text-veyoraDark">{car.name}</p>
                <p className="text-xs text-gray-400 mb-2">{car.type}</p>
                <p className="text-sm text-veyoraGreen font-medium mb-4">{car.price}</p>
                <Link
                  to="/book-ride"
                  state={{ vehicle: car.name }}
                  className="bg-veyoraGold text-veyoraDark text-sm font-medium px-4 py-2 rounded inline-block hover:brightness-95"
                >
                  Reserve This Vehicle →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}