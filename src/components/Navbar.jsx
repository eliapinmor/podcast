import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="inline-flex justify-start items-center gap-20 p-6">
      <Link to="/" className="font-inter text-neutral-950 text-4xl font-semibold">
        home
      </Link>

      <Link to="/episodios" className="font-inter text-neutral-950 text-4xl font-semibold">
        episodios
      </Link>

      <Link to="/contacto" className="font-inter text-neutral-950 text-4xl font-semibold">
        contacto
      </Link>
    </nav>
  );
}
