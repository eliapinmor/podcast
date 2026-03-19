import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { episodes } from "../data/episodes";
import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Episode() {
  const { id } = useParams();
  const episode = episodes.find((ep) => ep.id === Number(id));

  if (!episode)
    return (
      <h1>
        Episodio no encontrado, puede que haya sido eliminado, prueba con otro
      </h1>
    );

  const [transcript, setTranscript] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef(null);
  const transcriptRefs = useRef([]);

  useEffect(() => {
    if (episode?.transcriptionFile) {
      fetch(episode.transcriptionFile)
        .then((res) => res.json())
        .then((data) => setTranscript(data));
    }
  }, [episode]);

  // Scroll automático al bloque activo
  useEffect(() => {
    const activeIndex = transcript.findIndex(
      (block) => currentTime >= block.start && currentTime < block.end
    );

    if (activeIndex !== -1 && transcriptRefs.current[activeIndex]) {
      transcriptRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime, transcript]);

  return (
    <div className="p-16 pt-6 pl-24 w-5/7 m-auto flex flex-col items-center">
      <TitleLilysPodcast className="mt-5" />
      <video
        controls
        poster={episode.cover}
        className="w-full h-164 mt-16 rounded-2xl shadow-lg bg-black object-cover"
      >
        <source src={episode.audio} type="audio/mpeg" />
        Tu navegador no soporta el elemento de vídeo.
      </video>
      <div className="pt-4 w-full">
        <div>
          <h2 className="font-semibold text-4xl">{episode.title}</h2>
          {/* <div>like</div> */}
        </div>
        <p className="text-xl font-inter font-regular mt-6 text-black leading-relaxed">
          {episode.description}
        </p>
        <div className="max-w-[800px] w-full mt-10 flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-4">

          {transcript.map((block, index) => {
            const isActive =
              currentTime >= block.start && currentTime < block.end;

            return (
              <div
                key={index}
                ref={(el) => (transcriptRefs.current[index] = el)}
                className={`text-lg leading-relaxed transition-all rounded-md p-2 ${
                  isActive ? "bg-yellow-200" : ""
                }`}
              >
                <span className="font-bold text-neutral-600">
                  [{block.start}s - {block.end}s]
                </span>
                <br />
                {block.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
