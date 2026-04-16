export default function InformePDF() {
  return (
    <div
      id="informe-pdf"
      className="text-[var(--color-text)] bg-[var(--color-bg)] leading-relaxed"
    >

      {/* PORTADA */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-center px-20">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "#82181a" }}>
          Informe de Accesibilidad – Lily’s Podcast
        </h1>

        <p className="text-xl mt-4">INFORME DE AUDITORÍA DE ACCESIBILIDAD</p>
        <p className="text-lg mt-2">Elia Pineda Moreno · 2DAW · 2025-26</p>

        <p className="mt-10 text-sm opacity-70">
          Proyecto React – Evaluación Técnica Completa Nivel AA
        </p>
      </section>

      {/* SALTO DE PÁGINA */}
      <div className="page-break" />

      {/* ÍNDICE */}
      <section className="px-16 py-10">
        <h2 className="text-3xl font-semibold mb-6" style={{ color: "#82181a" }}>
          Contenido
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Informe de auditoría de accesibilidad</li>
          <li>Identificación y enlaces oficiales del proyecto</li>
          <li>Resumen ejecutivo</li>
          <li>Contexto técnico del proyecto</li>
          <li>Auditoría inicial</li>
          <li>Desarrollo técnico de la auditoría inicial</li>
          <li>Problemas detectados</li>
          <li>Mejoras implementadas</li>
          <li>Validación final</li>
          <li>Generación automática del informe PDF</li>
          <li>Conclusión</li>
        </ol>
      </section>

      <div className="page-break" />

      {/* CONTENIDO */}
      <section className="px-16 py-10">

        <h2 className="text-3xl font-semibold mb-4" style={{ color: "#82181a" }}>
          INFORME DE AUDITORÍA DE ACCESIBILIDAD
        </h2>

        <p><strong>Autor:</strong> ELIA PINEDA MORENO</p>
        <p><strong>Fecha:</strong> 16/04/2026</p>
        <p><strong>Cliente:</strong> Plataforma digital educativa</p>

        <hr className="my-6 border-[var(--color-text)]" />

        {/* IDENTIFICACIÓN */}
        <h2 className="text-2xl font-semibold mt-6 mb-2" style={{ color: "#82181a" }}>
          IDENTIFICACIÓN Y ENLACES OFICIALES DEL PROYECTO
        </h2>

        <p>
          <strong>URL pública:</strong>{" "}
          https://podcast-eta-two.vercel.app/
        </p>
        <p>
          <strong>Repositorio GitHub:</strong>{" "}
          https://github.com/eliapinmor/podcast
        </p>
        <p><strong>Branch analizada:</strong> main</p>
        <p><strong>Commit base:</strong> commit-base</p>

        {/* RESUMEN EJECUTIVO */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          RESUMEN EJECUTIVO
        </h2>

        <p>
          Este documento presenta la auditoría técnica completa realizada sobre la
          aplicación web ‘Lily’s Podcast’ desarrollada con React 19 y desplegada
          en entorno de producción mediante Vercel. El análisis se basa en las
          WCAG 2.2 nivel AA.
        </p>

        <p className="mt-3">
          La auditoría combina evaluación automática (Lighthouse, WAVE, Axe),
          evaluación manual mediante teclado y revisión estructural del DOM.
        </p>

        {/* CONTEXTO */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          CONTEXTO TÉCNICO DEL PROYECTO
        </h2>

        <p>
          El proyecto está desarrollado con React 19, utilizando renderizado
          dinámico y librerías como html2pdf y FontAwesome.
        </p>

        {/* AUDITORÍA INICIAL */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          AUDITORÍA INICIAL
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-1">Lighthouse</h3>
        <p>Puntuación inicial: 87/100.</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Wave</h3>
        <p>Detectó errores estructurales y advertencias.</p>

        {/* PROBLEMAS DETECTADOS */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          PROBLEMAS DETECTADOS
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-1">Falta de etiqueta h1</h3>
        <p>…</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Idioma incorrecto</h3>
        <p>…</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Falta de texto alternativo</h3>
        <p>…</p>

        {/* MEJORAS IMPLEMENTADAS */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          MEJORAS IMPLEMENTADAS
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-1">Refactorización estructural</h3>
        <p>…</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Texto alternativo</h3>
        <p>…</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Skip link</h3>
        <p>…</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Campos de error</h3>
        <p>…</p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Prefers-reduced-motion</h3>
        <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto">
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-1">Alto contraste</h3>
        <p>…</p>

        {/* VALIDACIÓN FINAL */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          VALIDACIÓN FINAL
        </h2>

        <p>Puntuación final Lighthouse: 100/100.</p>
        <p>Wave sin errores.</p>

        {/* GENERACIÓN PDF */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          GENERACIÓN AUTOMÁTICA DEL INFORME PDF
        </h2>

        <p>Implementada con html2pdf.</p>

        {/* CONCLUSIÓN */}
        <h2 className="text-2xl font-semibold mt-10 mb-2" style={{ color: "#82181a" }}>
          CONCLUSIÓN
        </h2>

        <p>
          El proyecto ha evolucionado desde una estructura básica hasta una
          aplicación accesible que cumple WCAG 2.2 AA…
        </p>

      </section>
    </div>
  );
}
