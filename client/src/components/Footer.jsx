import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {/* SOBRE */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Ali Azimo</h2>
          <p className="text-sm leading-6">
            Programador Web e formador especializado em React, Node.js, Excel Avançado, VBA e Power BI.
            Ofereço desenvolvimento de sites e formação profissional personalizada.
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li>Desenvolvimento Web (React / Node.js)</li>
            <li>Formação em Excel e VBA</li>
            <li>Dashboards com Power BI</li>
            <li>Consultoria em Automação de Dados</li>
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Siga-me</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ali Azimo — Todos os direitos reservados.
      </div>
    </footer>
  );
}
