export default function AboutPage() {
  return (
    <section className="bg-veyoraCream py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">ABOUT VEYORA</p>
        <h1 className="font-serif text-4xl text-veyoraDark mb-6">Move Beyond Ordinary.</h1>
        <p className="text-gray-600 mb-4">
          Veyora Mobility was built on a simple idea: luxury travel shouldn't just look premium,
          it should feel effortless. Every vehicle, every chauffeur, every pickup is chosen and
          trained to remove friction from the journey — so all you have to do is arrive.
        </p>
        <p className="text-gray-600 mb-10">
          Today, Veyora operates across 10+ cities with a fleet of 50+ premium vehicles and a
          24/7 concierge team ready whenever business — or life — takes you somewhere new.
        </p>

        <div className="bg-veyoraGreen text-white rounded-lg p-8">
          <p className="font-serif text-xl mb-2">Speak to a Concierge</p>
          <p className="text-sm text-gray-300 mb-4">Have a question, a custom request, or want to partner with us?</p>
          <p className="text-veyoraGold text-sm">+91 98765 43210 · concierge@veyora.com</p>
        </div>
      </div>
    </section>
  );
}