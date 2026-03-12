import { Link } from "react-router-dom";
import { episodes } from "../data/episodes";
import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Episodes() {
  return (
    <div> <TitleLilysPodcast />
    <div className="mt-6 flex flex-col gap-6">
      {episodes.map((ep) => (
        <Link
          key={ep.id}
          to={`/episode/${ep.id}`}
          className="w-[1291px] px-12 py-10 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] inline-flex justify-start items-center gap-14"
        >          <div className="w-72 h-48 bg-zinc-300 rounded-lg" />
          <div className="w-[852px] inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-start text-black text-2xl font-semibold font-['Inter']">
              {ep.title}
            </div>
            <div className="self-stretch justify-start text-black text-xl font-medium font-['Inter']">
             {ep.description}
            </div>
          </div>
        </Link>
      ))}
    </div></div>
  );
}
