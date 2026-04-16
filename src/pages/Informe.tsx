import html2pdf from "html2pdf.js";
import InformePDF from "../components/InformePDF";
import TitleLilysPodcast from "../components/TitleLilysPodcast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Informe() {
  const generarPDF = () => {
    const elemento = document.getElementById("informe-pdf");

    document.documentElement.classList.add("pdf-mode");

    const opciones = {
      margin: 10,
      filename: "informe-accesibilidad.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .set(opciones)
      .from(elemento)
      .save()
      .then(() => {
        document.documentElement.classList.remove("pdf-mode");
      })
      .catch(() => {
        document.documentElement.classList.remove("pdf-mode");
      });
  };

  return (
    <main id="main-content" className="p-10 w-3/5 mx-auto">
      <div className="text-center">
        <TitleLilysPodcast />
      </div>
      <h1 className="text-3xl font-bold my-6 text-center">
        Informe de Accesibilidad
      </h1>
      <div className="hidden">
        <InformePDF />
      </div>
      <div className="flex flex-row gap-6 h-auto p-6 py-24 rounded-lg">
        <div className="w-1/2 text-center">
          Desde este podcast nos compremetemos con la accesibilidad del sitio
          web para todas las personas. Por ello, hemos decidido analizarlo y
          buscar que mejoras podemos aplicar para hacer que sea posible un sitio
          más inclusivo.
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <button
            onClick={generarPDF}
            className=" px-6 py-3 border-2 rounded bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-myred)] hover:text-[var(--color-bg)] focus:outline focus:ring-2 items-center flex flex-row"
          >
            <FontAwesomeIcon icon={faArrowDown} className="text-xl" />
            <p>Descargar informe en PDF</p>
          </button>
        </div>
      </div>
    </main>
  );
}
