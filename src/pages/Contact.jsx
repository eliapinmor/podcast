import TitleLilysPodcast from "../components/TitleLilysPodcast";
import Forms from "../components/Forms";

export default function Contact() {
  return (
    <div>
      <div className="text-center">
        <TitleLilysPodcast />
      </div>
      <div className="flex flex-col md:flex-row p-16 w-3/4 m-auto items-center">
        <div className="w-full md:w-1/2">
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
        <div className="hidden md:block md:w-1/2">
          <img src="images/microfono.png" className="m-auto" />
        </div>
      </div>
    </div>
  );
}
