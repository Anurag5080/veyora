export default function Experience() {
  return (
    <section className="bg-veyoraCream py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">THE VEYORA EXPERIENCE</p>
          <h2 className="font-serif text-3xl md:text-4xl text-veyoraDark leading-snug">
            Not Every Journey Is <span className="text-veyoraGreen">Created Equal.</span>
          </h2>
        </div>
        <div>
          <p className="text-gray-600 max-w-md">
            At Veyora, we believe luxury mobility is more than getting from one place to
            another. It's about arriving effortlessly, travelling comfortably, and knowing
            every detail has already been taken care of.
          </p>
          <button className="mt-6 bg-veyoraGold text-veyoraDark font-medium px-6 py-3 rounded hover:brightness-95">
            Our Story →
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 relative rounded-xl overflow-hidden max-w-sm">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800"
          alt="Car interior"
          className="w-full h-56 object-cover"
        />
        <p className="absolute bottom-4 left-4 text-white font-serif text-lg">It's How You Arrive.</p>
      </div>
    </section>
  );
}