import html2pdf from "html2pdf.js";
import InformePDF from "../components/InformePDF";

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
    <main id="main-content" className="p-10">
      <h1 className="text-3xl font-bold mb-6">Informe de Accesibilidad</h1>

      <InformePDF />

      <button
        onClick={generarPDF}
        className="mt-6 px-6 py-3 border-2 rounded bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-myred)] focus:outline focus:ring-2"
      >
        Descargar informe en PDF
      </button>
    </main>
  );
}
