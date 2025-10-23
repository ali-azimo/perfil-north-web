import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaCode, 
  FaChalkboardTeacher, 
  FaInfoCircle, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início", icon: <FaHome className="inline mr-2" /> },
    { path: "/servicos", label: "Serviços", icon: <FaCode className="inline mr-2" /> },
    { path: "/aulas", label: "Aulas", icon: <FaChalkboardTeacher className="inline mr-2" /> },
    { path: "/sobre", label: "Sobre", icon: <FaInfoCircle className="inline mr-2" /> },
    { path: "/perfil", label: "Perfil", icon: <FaInfoCircle className="inline mr-2" /> },
    { path: "/contactos", label: "Contactos", icon: <FaEnvelope className="inline mr-2" /> }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
              <FaCode className="text-2xl text-yellow-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                North Web
              </h1>
              <p className="text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Inovação Digital
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV MENU */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-4 py-2 rounded-lg transition-all duration-300 font-medium
                  ${isActiveLink(item.path) 
                    ? 'bg-white/20 text-yellow-300 shadow-lg scale-105' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white hover:scale-105'
                  }
                `}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON - DESKTOP */}
          <div className="hidden lg:block">
            <Link
              to="/contactos"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Começar Agora
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`
          lg:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}
        `}>
          <nav className="flex flex-col space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center px-4 py-3 rounded-lg transition-all duration-300 font-medium
                  ${isActiveLink(item.path) 
                    ? 'bg-white/20 text-yellow-300' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            
            {/* MOBILE CTA BUTTON */}
            <Link
              to="/contactos"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-3 rounded-lg font-semibold text-center hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 mt-4"
            >
              Começar Agora
            </Link>
          </nav>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 w-full opacity-80" />
    </header>
  );
}