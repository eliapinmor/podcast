import { useParams } from "react-router-dom";
import { episodes } from "../data/episodes";

export default function Episode() {
  const { id } = useParams();
  const episode = episodes.find((ep) => ep.id === Number(id));

  if (!episode)
    return (
      <h1>
        Episodio no encontrado, puede que hay asido eliminado, prueba con otro
      </h1>
    );

  return (
    <div>
        <div>
            {/* video */}
        </div>
        <div>
            <h2>{episode.title}</h2>
            <p>{episode.description}</p>
        </div>
    </div>
  );
}
