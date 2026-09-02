export default function Testimonials() {
  return (
    <section className="bg-veyoraGreen text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">CLIENT STORIES</p>
          <h2 className="font-serif text-3xl md:text-4xl max-w-md">
            The Entire Experience Felt Effortless.
          </h2>
        </div>
        <p className="max-w-md text-gray-300 italic">
          "From the moment we booked to the moment we arrived. Immaculate vehicle,
          professional chauffeur, and exceptional service." — Veyora Client
        </p>
      </div>
    </section>
  );
}