export default function InformePDF() {
  return (
    <div
      id="informe-pdf"
      className="p-10 text-[var(--color-text)] bg-[var(--color-bg)] leading-relaxed"
    >
      <h1 className="text-3xl font-bold mb-4">
        INFORME DE AUDITORÍA DE ACCESIBILIDAD
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Proyecto React – Evaluación Técnica Completa Nivel AA
      </h2>

      <p>
        <strong>Autor:</strong> ELIA PINEDA MORENO
      </p>
      <p>
        <strong>Fecha:</strong> {new Date().toLocaleDateString()}
      </p>
      <p>
        <strong>Cliente:</strong> Plataforma digital educativa
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        IDENTIFICACIÓN Y ENLACES OFICIALES DEL PROYECTO
      </h2>

      <p>
        <strong>URL pública:</strong>{" "}
        <a
          href="https://podcast-eta-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://podcast-eta-two.vercel.app/
        </a>
      </p>

      <p>
        <strong>Repositorio de GitHub:</strong>{" "}
        <a
          href="https://github.com/eliapinmor/podcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/eliapinmor/podcast
        </a>
      </p>

      <p>
        <strong>Branch analizada:</strong> main
      </p>
      <p>
        <strong>Commit base sin accesibilidad:</strong> commit-base
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">RESUMEN EJECUTIVO</h2>

      <p>
        Este documento presenta la auditoría técnica completa realizada sobre la
        aplicación web desarrollada con React 19 y desplegada en entorno de
        producción mediante Vercel. El análisis se basa en las WCAG 2.2 nivel
        AA.
      </p>

      <p>
        La auditoría combina evaluación automática mediante Lighthouse, WAVE y
        Axe; evaluación manual mediante navegación exclusiva con teclado; y
        revisión estructural del DOM.
      </p>

      <p>
        DOM (Document Object Model) es la representación estructural del HTML
        que el navegador interpreta y que utilizan tecnologías de asistencia.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">AUDITORÍA INICIAL</h2>

      <p>
        Se realizaron auditorías con Lighthouse y Wave para identificar los
        principales problemas de accesibilidad.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">Lighthouse</h3>
      <p>Puntuación inicial: 87/100. Principal problema: imágenes sin alt.</p>

      <h3 className="text-xl font-semibold mt-4 mb-1">Wave</h3>
      <p>Detectó múltiples errores estructurales y de contraste.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">PROBLEMAS DETECTADOS</h2>

      <h3 className="text-xl font-semibold mt-4 mb-1">
        Falta de etiqueta h1 en ciertas páginas
      </h3>
      <p>
        Varias páginas no incluían un <code>&lt;h1&gt;</code> o utilizaban{" "}
        <code>&lt;div&gt;</code> como título principal. Esto afecta a la heading
        structure, esencial para la navegación mediante lectores de pantalla.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">Idioma incorrecto</h3>
      <p>
        El atributo <code>lang</code> estaba configurado como “en” en lugar de
        “es”, provocando que los lectores de pantalla pronunciaran el contenido
        incorrectamente.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">
        Falta de texto alternativo en imágenes
      </h3>
      <p>
        Varias imágenes no incluían atributo <code>alt</code>, impidiendo que
        usuarios con discapacidad visual comprendieran su contenido.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        MEJORAS IMPLEMENTADAS
      </h2>

      <h3 className="text-xl font-semibold mt-4 mb-1">
        Refactorización estructural
      </h3>
      <p>
        Se añadieron etiquetas <code>&lt;h1&gt;</code> y se sustituyeron{" "}
        <code>&lt;div&gt;</code> por <code>&lt;main&gt;</code> para mejorar la
        semántica.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">Texto alternativo</h3>
      <p>
        Todas las imágenes informativas ahora incluyen un atributo{" "}
        <code>alt</code> descriptivo.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">
        Implementación de skip link
      </h3>
      <p>
        Se añadió un enlace “Saltar al contenido” visible solo al navegar con
        teclado.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">
        Implementación de prefers-reduced-motion
      </h3>

      <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto text-black">
        {`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-1">
        Campos de error en el formulario
      </h3>
      <p>
        Se añadieron mensajes de error accesibles y aria-live para anunciar
        cambios dinámicos.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-1">Alto contraste</h3>
      <p>
        Se implementó un modo de alto contraste mediante variables CSS y un
        botón accesible que permite activarlo.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">VALIDACIÓN FINAL</h2>

      <p>
        Tras aplicar todas las mejoras, Lighthouse muestra una puntuación de
        100/100 y Wave no detecta errores.
      </p>

      <ul className="list-disc list-inside mt-2">
        <li>Orden lógico de tabulación</li>
        <li>Foco visible</li>
        <li>Formulario completamente accesible</li>
        <li>Botón de descarga de PDF accesible</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        GENERACIÓN AUTOMÁTICA DEL INFORME PDF
      </h2>

      <p>
        El informe se genera automáticamente desde la web mediante una librería
        JavaScript, permitiendo descargarlo en PDF con un solo clic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">CONCLUSIÓN</h2>

      <p>
        La aplicación ha pasado de tener problemas estructurales y de
        accesibilidad básica a cumplir con los criterios principales de las WCAG
        2.2 nivel AA. Se ha mejorado la estructura semántica, la navegación por
        teclado, la gestión de errores, el contraste y la adaptación a
        preferencias del usuario.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">CONCLUSIÓN</h2>

      <p>
        El proyecto ha evolucionado desde una estructura funcional básica hasta
        una aplicación accesible que cumple con los criterios WCAG 2.2 nivel AA.
        La transformación no ha consistido únicamente en corregir errores
        puntuales, sino en una revisión profunda de la arquitectura, la
        semántica y la interacción del sitio web. Este proceso ha permitido
        convertir una interfaz inicialmente limitada en términos de
        accesibilidad en una plataforma inclusiva, robusta y preparada para
        usuarios con diferentes necesidades.
      </p>

      <p className="mt-3">
        La incorporación de etiquetas semánticas como <code>&lt;main&gt;</code>,
        <code>&lt;header&gt;</code> y <code>&lt;h1&gt;</code> ha mejorado la
        estructura lógica del contenido, facilitando la navegación mediante
        tecnologías de asistencia. La corrección del atributo <code>lang</code>{" "}
        y la inclusión de textos alternativos en todas las imágenes garantizan
        que los lectores de pantalla puedan interpretar correctamente la
        información visual y textual.
      </p>

      <p className="mt-3">
        La implementación del enlace “Saltar al contenido”, junto con la
        verificación del orden de tabulación y la visibilidad del foco, asegura
        que la web pueda utilizarse completamente mediante teclado, cumpliendo
        así con los principios de operabilidad. Además, la mejora en la gestión
        de errores del formulario y el uso de <code>aria-live</code> refuerzan
        la comprensión del contenido dinámico para usuarios con discapacidad
        visual.
      </p>

      <p className="mt-3">
        Las mejoras avanzadas, como el modo de alto contraste y la adaptación a
        la preferencia del usuario mediante <code>prefers-reduced-motion</code>,
        demuestran un compromiso real con la accesibilidad más allá de los
        requisitos mínimos. Estas funcionalidades permiten que la interfaz se
        adapte a personas con baja visión, sensibilidad al movimiento o
        necesidades específicas de percepción.
      </p>

      <p className="mt-3">
        Finalmente, la generación automática del informe en PDF desde la propia
        web refleja un dominio técnico adicional, integrando librerías externas
        y garantizando que el contenido exportado sea accesible y coherente con
        la versión visual del sitio.
      </p>

      <p className="mt-3">
        En conjunto, el proyecto no solo cumple con los estándares WCAG 2.2
        nivel AA, sino que también establece una base sólida para futuras
        mejoras. La web es ahora más inclusiva, más clara y más usable,
        ofreciendo una experiencia accesible para todos los usuarios.
      </p>
    </div>
  );
}
