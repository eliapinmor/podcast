import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/old_tv.png')",
      }}
    >
      {/* Contenido encima del fondo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <TitleLilysPodcast />
      </div>
    </div>
  );
}
