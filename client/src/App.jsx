import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Servicos from "./page/Servicos";
import Cursos from "./page/Cursos";
import Aulas from "./page/Aulas";
import Contacto from "./page/Contacto";
import About from "./page/About";
import Perfil from "./page/Perfil";
import AliDashboard from "./Dashboard/AliDash";
import VirgilioDashboard from "./Dashboard/VirgilioDash";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contactos" element={<Contacto />} />

          <Route path="dashboard/ali" element={<AliDashboard />} />
          <Route path="dashboard/virgilio" element={<VirgilioDashboard />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
