import { Link } from "react-router-dom";
import { episodes } from "../data/episodes";
import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Episodes() {
  return (
    <main id="main-content" className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <h1 className="hidden">episodios</h1>
      <div className="text-center">
        <TitleLilysPodcast />
      </div>
      <div className="mt-6 flex flex-col gap-6 p-6 md:px-48">
        {episodes.map((ep) => (
          <Link
            key={ep.id}
            to={`/episode/${ep.id}`}
            className="
              w-full flex flex-col lg:flex-row px-12 py-10 rounded-3xl 
              shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
              inline-flex justify-start items-center gap-14
              bg-[var(--color-bg)] text-[var(--color-text)]
            "
          >
            <div className="xl:w-1/5 rounded-lg bg-[var(--color-accent)] flex items-center">
              <img
                src={ep.cover}
                alt={`portada del episodio ${ep.title}`}
                className="rounded-lg"
              />
            </div>
            <div className="w-full inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch text-2xl font-semibold font-['Inter'] text-[var(--color-text)]">
                {ep.title}
              </div>
              <div className="self-stretch text-xl font-medium font-['Inter'] text-[var(--color-text)]">
                {ep.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
