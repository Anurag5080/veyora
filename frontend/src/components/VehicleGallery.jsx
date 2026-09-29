import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function VehicleGallery({ images, name }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      <div
        className="w-full h-44 bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => { setIndex(0); setOpen(true); }}
      >
        <img src={images[0]} alt={name} className="max-w-full max-h-full object-contain" />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white"><X size={28} /></button>
          <button onClick={prev} className="absolute left-4 text-white"><ChevronLeft size={32} /></button>
          <img src={images[index]} alt={name} className="max-h-[85vh] max-w-full object-contain" />
          <button onClick={next} className="absolute right-4 text-white"><ChevronRight size={32} /></button>
          <p className="absolute bottom-6 text-white text-sm">{index + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}