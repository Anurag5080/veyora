const pillars = [
  { title: "Exceptional Fleet", desc: "Only the finest vehicles." },
  { title: "Professional Chauffeurs", desc: "Trained, verified and discreet." },
  { title: "Effortless Booking", desc: "A seamless experience." },
  { title: "Always On Time", desc: "Your time matters." },
];

const stats = [
  { value: "500+", label: "Premium Journeys" },
  { value: "50+", label: "Luxury Vehicles" },
  { value: "10+", label: "Cities" },
  { value: "24/7", label: "Concierge Support" },
];

export default function WhyVeyora() {
  return (
    <>
      <section className="bg-veyoraGreen text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:items-center">
          <div className="md:w-1/3">
            <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">WHY VEYORA</p>
            <h2 className="font-serif text-3xl">The Standard Is Different.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {pillars.map((p) => (
              <div key={p.title}>
                <p className="font-medium text-sm">{p.title}</p>
                <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-veyoraCream py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <p className="col-span-2 md:col-span-4 text-gray-600 mb-2">Trusted By Those Who Value The Difference.</p>
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl text-veyoraGreen">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}