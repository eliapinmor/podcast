import TitleLilysPodcast from "../components/TitleLilysPodcast";

export default function Licencias() {
  return (
    <main id="main-content">
      <div className="text-center">
        <TitleLilysPodcast />
      </div>
      <div className="w-3/5 m-auto mt-4">
        <h1 className="text-3xl font-bold mb-6">Licencias y Atribuciones</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">Contenido de la web</h2>
          <p>
            Este sitio utiliza la licencia Creative Commons
            <strong> CC BY-NC-SA 4.0</strong>. Puedes compartir y adaptar el
            contenido siempre que cites la fuente, no lo uses con fines
            comerciales y mantengas la misma licencia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">Imágenes</h2>
          <p>
            Las imágenes utilizadas pertenecen a sus respectivos autores.
            Recursos libres obtenidos de plataformas como Unsplash o Pexels
            están bajo licencia <strong>CC0</strong> o equivalente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Audio</h2>
          <p>
            El audio del podcast es original y está protegido bajo
            <strong> CC BY-NC-SA 4.0</strong>. La música utilizada proviene de
            bibliotecas libres con atribución correspondiente.
          </p>
        </section>
      </div>
    </main>
  );
}
