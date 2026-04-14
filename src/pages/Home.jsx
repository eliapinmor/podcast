import TitleLilysPodcast from "../components/TitleLilysPodcast";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/old_tv.png')",
      }}
      id="main-content"
    >
      <h1 className="hidden">Home</h1>
      {/* Contenido encima del fondo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <TitleLilysPodcast />
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 mt-8 bg-black text-white text-xl rounded-lg hover:bg-neutral-800 transition font-['inria'] italic font-semibold"
        >
          play
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray/70 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Contenedor del modal */}
          <div className="shadow-xl w-[90%] max-w-[800px] relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-neutral-600 z-50"
            >
              <i class="fa-solid fa-x"></i>
            </button>

            {/* Vídeo */}
            <video controls className="w-full rounded-xl">
              <source src="/videos/disseny_video_promo.mp4" type="video/mp4" />
              Tu navegador no soporta el vídeo.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}
