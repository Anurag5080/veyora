export default function ExperiencesPage() {
  const experiences = [
    { title: "City Chauffeur Days", desc: "A full day, one car, one driver — go wherever the day takes you." },
    { title: "Wedding Convoys", desc: "Coordinated multi-vehicle arrivals for the whole wedding party." },
    { title: "Scenic Outstation Drives", desc: "Curated routes through the hills or coastline, at your pace." },
  ];

  return (
    <section className="bg-veyoraCream py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">EXPERIENCES</p>
        <h1 className="font-serif text-4xl text-veyoraDark mb-4">Not Every Journey Is Created Equal.</h1>
        <p className="text-gray-500 max-w-xl mb-10">
          At Veyora, we believe luxury mobility is more than getting from one place to another.
          It's about arriving effortlessly, travelling comfortably, and knowing every detail has
          already been taken care of.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((e) => (
            <div key={e.title} className="bg-white rounded-lg p-6 shadow-sm">
              <p className="font-serif text-lg text-veyoraDark mb-2">{e.title}</p>
              <p className="text-sm text-gray-500">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}