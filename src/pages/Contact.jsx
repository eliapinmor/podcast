import TitleLilysPodcast from "../components/TitleLilysPodcast";
import Forms from "../components/Forms";

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
          <div className="flex flex-col items-center">
            <Forms />
          </div>
        </div>
        <div className="w-1/2">
          <img src="images/microfono.png" className="m-auto" alt="imagen de un microfono"/>
        </div>
      </div>
    </div>
  );
}
