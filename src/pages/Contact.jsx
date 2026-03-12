import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Contact() {
  return (
    <div>
      <TitleLilysPodcast />
      <div className="flex p-16">
        <div className="w-1/2">
          <div><p>texto</p></div>
          <div>forms</div>
        </div>
        <div className="w-1/2">
          <img src="images/microfono.png" />
        </div>
      </div>
    </div>
  );
}