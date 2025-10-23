import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaCode, 
  FaChalkboardTeacher, 
  FaInfoCircle, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaUserCircle
} from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Efeito de scroll para header dinâmico
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Início", icon: <FaHome className="text-lg" /> },
    { path: "/servicos", label: "Serviços", icon: <FaCode className="text-lg" /> },
    { path: "/aulas", label: "Aulas", icon: <FaChalkboardTeacher className="text-lg" /> },
    { path: "/sobre", label: "Sobre", icon: <FaInfoCircle className="text-lg" /> },
    { path: "/perfil", label: "Equipe", icon: <FaUserCircle className="text-lg" /> },
    { path: "/contactos", label: "Contactos", icon: <FaEnvelope className="text-lg" /> }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-500
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-gradient-to-br from-slate-800 to-slate-900 text-white'
      }
    `}>
      {/* Progress Bar Indicator */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* LOGO */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className={`
              p-2 rounded-xl transition-all duration-500 group-hover:scale-110
              ${isScrolled 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white/10 text-yellow-300'
              }
            `}>
              <FaCode className="text-2xl" />
            </div>
            <div>
              <h1 className={`
                text-2xl font-bold transition-colors duration-500
                ${isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' 
                  : 'text-white'
                }
              `}>
                North Web
              </h1>
              <p className={`
                text-xs transition-all duration-500
                ${isScrolled 
                  ? 'text-gray-600' 
                  : 'text-blue-200 opacity-90'
                }
                ${isScrolled ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}>
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
                  flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 font-medium relative
                  ${isScrolled 
                    ? isActiveLink(item.path)
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    : isActiveLink(item.path)
                    ? 'text-yellow-300 bg-white/20 shadow-lg'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }
                  ${isActiveLink(item.path) ? 'scale-105' : 'hover:scale-105'}
                `}
              >
                {item.icon}
                <span className="font-semibold">{item.label}</span>
                
                {/* Indicador de página ativa */}
                {isActiveLink(item.path) && (
                  <div className={`
                    absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full
                    ${isScrolled ? 'bg-blue-600' : 'bg-yellow-300'}
                  `} />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON - DESKTOP */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/aulas"
              className={`
                px-4 py-2 rounded-lg font-semibold transition-all duration-300 border
                ${isScrolled 
                  ? 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white' 
                  : 'text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-blue-900'
                }
              `}
            >
              Ver Cursos
            </Link>
            <Link
              to="/contactos"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 px-6 py-2.5 rounded-xl font-bold hover:from-yellow-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Começar Agora
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              lg:hidden p-3 rounded-xl transition-all duration-300
              ${isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }
            `}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`
          lg:hidden transition-all duration-500 ease-out overflow-hidden
          ${isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0'
          }
        `}>
          <nav className={`
            flex flex-col space-y-2 rounded-2xl p-4 border transition-all duration-500
            ${isScrolled 
              ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-2xl' 
              : 'bg-white/10 backdrop-blur-md border-white/20'
            }
          `}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 font-semibold
                  ${isScrolled 
                    ? isActiveLink(item.path)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    : isActiveLink(item.path)
                    ? 'bg-yellow-400 text-blue-900 shadow-lg'
                    : 'text-white hover:bg-white/20'
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* MOBILE CTA BUTTONS */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                to="/aulas"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 border
                  ${isScrolled 
                    ? 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white' 
                    : 'text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-blue-900'
                  }
                `}
              >
                Ver Cursos
              </Link>
              <Link
                to="/contactos"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 px-4 py-3 rounded-xl font-bold text-center hover:from-yellow-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Começar
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}