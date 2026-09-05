import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Sedans", "SUVs", "Ultra Luxury", "Performance"];

const cars = [
  { name: "Mercedes-Benz S-Class", type: "Executive Sedan", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600" },
  { name: "Range Rover", type: "Luxury SUV", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=600" },
  { name: "Mercedes-Maybach", type: "Ultra Luxury", img: "https://images.unsplash.com/photo-1622200294737-232cba9b7a17?q=80&w=600" },
  { name: "Porsche 911", type: "Performance", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600" },
];

export default function Fleet() {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-veyoraGreen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">THE COLLECTION</p>
          <h2 className="font-serif text-3xl md:text-4xl">A Fleet Worth Arriving In.</h2>
        </div>
        <div className="max-w-sm text-sm text-gray-300">
          From understated elegance to unmistakable presence, choose the automobile that
          matches the moment.
          <div className="mt-2">
            <Link to="/fleet" className="text-veyoraGold underline underline-offset-4 text-sm">View All Vehicles →</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded text-sm ${
              active === cat ? "bg-veyoraGold text-veyoraDark" : "bg-white/10 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {cars.map((car) => (
          <div key={car.name} className="bg-veyoraGreenLight rounded-lg overflow-hidden">
            <img src={car.img} alt={car.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <p className="font-serif text-sm">{car.name}</p>
              <p className="text-xs text-gray-400 mb-2">{car.type}</p>
              <Link to="/fleet" className="text-veyoraGold text-xs">Explore →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}