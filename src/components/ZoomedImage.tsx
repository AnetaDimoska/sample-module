import { useState } from "react";
import ImageModal from "./ImageModal";


export default function ZoomedImage({ src, alt }: { src: string; alt: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="w-40 md:w-60 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && <ImageModal src={src} alt={alt} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
