import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const linkColor = isHome ? "text-white" : "text-black";

  const shadow = isHome ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : "";

  return (
    <nav className="absolute w-full z-20 inline-flex justify-center items-center gap-20 p-6">
      <Link to="/" className={`font-inter text-4xl font-semibold ${linkColor} ${shadow}`}>
        home
      </Link>

      <Link to="/episodios" className={`font-inter text-4xl font-semibold ${linkColor} ${shadow}`}>
        episodios
      </Link>

      <Link to="/contacto" className={`font-inter text-4xl font-semibold ${linkColor} ${shadow}`}>
        contacto
      </Link>
    </nav>
  );
}
