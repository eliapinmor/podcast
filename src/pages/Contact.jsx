import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Contact() {
  return (
    <div>
      <div className="text-center">
        <TitleLilysPodcast />
      </div>
      <div className="flex p-16 w-3/4 m-auto">
        <div className="w-1/2">
          <div>
            <p className="text-center font-medium font-['Inter']">
              ¿Tienes un dato curiosos sobre una serie o película que te
              gustaria que comentasemos en nuestro podcast? Rellena el siguiente
              formulario explicandonos de que se trata
            </p>
          </div>
          <div>forms</div>
        </div>
        <div className="w-1/2">
          <img src="images/microfono.png" className="m-auto" />
        </div>
      </div>
    </div>
  );
}
