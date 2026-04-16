export default function Footer() {
  return (
    <div className="bg-[#82181a] text-white mt-12 px-16 py-14 flex flex-col items-center">
      <div>
        <a href="/" className="font-bold font-['Inria'] italic [text-shadow:_0px_4px_4px_rgb(0_0_0_/_1.00) text-4xl">lily's podcast</a>
      </div>
      <div className="mt-4 flex flex-col">
        <a href="/licencias">Licencias y atribuciones</a>
        <a href="/informe">Informe de accesibilidad</a>
      </div>
    </div>
  );
}
