import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaYoutube, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Code, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Aulas", path: "/aulas" },
    { name: "Sobre", path: "/sobre" },
    { name: "Equipe", path: "/perfil" },
    { name: "Contactos", path: "/contactos" }
  ];

  const services = [
    "Desenvolvimento Web Full-Stack",
    "Formação em Excel Avançado & VBA",
    "Dashboards com Power BI",
    "Consultoria em Automação",
    "Desenvolvimento de APIs",
    "Sistemas Personalizados"
  ];

  const socialLinks = [
    { 
      icon: <FaFacebook className="w-5 h-5" />, 
      url: "https://facebook.com", 
      name: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      icon: <FaYoutube className="w-5 h-5" />, 
      url: "https://youtube.com", 
      name: "YouTube",
      color: "hover:text-red-500"
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      url: "https://linkedin.com", 
      name: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaInstagram className="w-5 h-5" />, 
      url: "https://instagram.com", 
      name: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: <FaTwitter className="w-5 h-5" />, 
      url: "https://twitter.com", 
      name: "Twitter",
      color: "hover:text-blue-400"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+258 84 431 4455",
      subtext: "+258 87 431 4455"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "ali.azimo@northweb.com",
      subtext: "info@northweb.com"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Moçambique",
      subtext: "Região Norte"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-400">North Web</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4 text-sm">
              Liderando a revolução digital em Moçambique através de formação prática 
              em tecnologia e desenvolvimento de soluções web inovadoras.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/10 p-2 rounded-lg transition-all duration-300 ${social.color} hover:bg-white/20 backdrop-blur-sm`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-blue-100 hover:text-amber-300 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-blue-100 text-sm leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
              Contactos
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="bg-amber-500/20 p-2 rounded-lg group-hover:bg-amber-500/30 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-blue-100 font-medium text-sm">{contact.text}</p>
                    {contact.subtext && (
                      <p className="text-blue-200 text-xs">{contact.subtext}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              to="/contactos"
              className="inline-flex items-center justify-center w-full mt-6 bg-amber-500 text-blue-900 px-4 py-3 rounded-lg font-semibold hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              <FaEnvelope className="w-4 h-4 mr-2" />
              Entrar em Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} <span className="text-amber-300 font-semibold">North Web</span>. 
              Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-blue-200 text-sm">
              <Link to="/privacy" className="hover:text-amber-300 transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link to="/terms" className="hover:text-amber-300 transition-colors duration-300">
                Termos de Serviço
              </Link>
              <span className="text-amber-400">•</span>
              <span>Feito com 💙 em Moçambique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
    </footer>
  );
}