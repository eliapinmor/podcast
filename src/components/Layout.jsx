import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const marginTop = isHome ? "p-0" : "pt-28";

  return (
    <div className="min-h-screen flex flex-col">
      <main className={`${marginTop} flex justify-center flex-1`}>
        {children}
      </main>

      {!isHome && <Footer />}
    </div>
  );
}
