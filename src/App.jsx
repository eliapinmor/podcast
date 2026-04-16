import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Episode from "./pages/Episode";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Licencias from "./pages/Licenses";
import Informe from "./pages/Informe";

function App() {
  return (
    <>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodes />} />
            <Route path="/episode/:id" element={<Episode />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/licencias" element={<Licencias />} />
            <Route path="/informe" element={<Informe />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
