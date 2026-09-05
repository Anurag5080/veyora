import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookRide() {
  const location = useLocation();
  const prefill = location.state || {};

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: prefill.pickup || "",
    destination: prefill.destination || "",
    date: prefill.date || "",
    service: prefill.service || "Chauffeur Drive",
    vehicle: prefill.vehicle || "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/book-ride", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-veyoraCream py-16 px-6 min-h-screen">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <p className="text-veyoraGold text-xs tracking-[0.2em] mb-3">BOOK YOUR RIDE</p>
        <h1 className="font-serif text-3xl text-veyoraDark mb-6">Reserve Your Journey.</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" value={form.name} onChange={handleChange("name")} required />
          <Input label="Phone Number" value={form.phone} onChange={handleChange("phone")} required />
          <Input label="Pickup Location" value={form.pickup} onChange={handleChange("pickup")} />
          <Input label="Destination" value={form.destination} onChange={handleChange("destination")} />
          <Input label="Date & Time" value={form.date} onChange={handleChange("date")} />
          {form.vehicle && <Input label="Vehicle" value={form.vehicle} onChange={handleChange("vehicle")} />}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-veyoraGold text-veyoraDark font-medium py-3 rounded hover:brightness-95 disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : "Confirm Booking →"}
          </button>

          {status === "success" && (
            <p className="text-green-700 text-sm text-center">Booking request received! Our concierge will call you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Couldn't reach the server — is your backend running on port 5000?</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        {...props}
        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm outline-none focus:border-veyoraGold"
      />
    </div>
  );
}