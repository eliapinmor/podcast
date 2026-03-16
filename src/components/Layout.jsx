import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Altura del navbar (p-6 ≈ 24px arriba + 24px abajo + tamaño del texto)
  const marginTop = isHome ? "p-0" : "pt-28";

  return <div className={`${marginTop} flex justify-center`}>{children}</div>;
}
