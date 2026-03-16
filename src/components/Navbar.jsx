import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const linkColor = isHome ? "text-white" : "text-black";

  return (
    <nav className="absolute w-full z-20 inline-flex justify-center items-center gap-20 p-6">
      <Link to="/" className={`font-inter text-4xl font-semibold ${linkColor}`}>
        home
      </Link>

      <Link to="/episodios" className={`font-inter text-4xl font-semibold ${linkColor}`}>
        episodios
      </Link>

      <Link to="/contacto" className={`font-inter text-4xl font-semibold ${linkColor}`}>
        contacto
      </Link>
    </nav>
  );
}
