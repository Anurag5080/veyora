import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative bg-veyoraGreen text-white py-24 px-6 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1600"
        alt="Road at sunset"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">YOUR JOURNEY AWAITS</p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Move Beyond <span className="text-veyoraGold">Ordinary.</span>
          </h2>
          <p className="text-gray-300 mt-2">Your next journey deserves more than a ride.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/book-ride" className="bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded">Book Your Ride →</Link>
          <Link to="/about" className="border border-white/50 px-6 py-3 rounded">Speak to a Concierge</Link>
        </div>
      </div>
    </section>
  );
}