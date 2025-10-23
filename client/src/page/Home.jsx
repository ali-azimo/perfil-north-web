import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Laptop, 
  BarChart3, 
  Database, 
  ArrowRight, 
  Star, 
  Users, 
  Trophy,
  CheckCircle,
  PlayCircle,
  Shield,
  Globe,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Imagens de exemplo - substitua com suas próprias imagens
const backgroundImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const stats = [
    { number: "500+", label: "Alunos Formados" },
    { number: "50+", label: "Projetos Entregues" },
    { number: "98%", label: "Satisfação" },
    { number: "24/7", label: "Suporte" }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Aulas Práticas",
      description: "Aprenda fazendo com projetos reais do mercado"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentoria Individual",
      description: "Acompanhamento personalizado no seu crescimento"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Metodologia Comprovada",
      description: "Técnicas eficazes com resultados garantidos"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Comunidade Ativa",
      description: "Network com profissionais e estudantes"
    }
  ];
  // Dados do blog
  const blogPosts = [
    {
      id: 1,
      title: "Por Que Aprender React em 2024?",
      excerpt: "Descubra como React continua dominando o desenvolvimento frontend e por que é a escolha certa para sua carreira.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Frontend",
      readTime: "5 min",
      date: "15 Jan 2024",
      author: "Ali Azimo"
    },
    {
      id: 2,
      title: "Power BI vs Excel: Qual Escolher para Análise de Dados?",
      excerpt: "Comparativo completo entre as duas ferramentas da Microsoft e quando usar cada uma no seu fluxo de trabalho.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Análise de Dados",
      readTime: "7 min",
      date: "12 Jan 2024",
      author: "Virgílio Massamba"
    },
    {
      id: 3,
      title: "Automatize Tarefas com VBA: Guia para Iniciantes",
      excerpt: "Aprenda a criar suas primeiras macros no Excel e economize horas de trabalho repetitivo.",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Automação",
      readTime: "6 min",
      date: "10 Jan 2024",
      author: "Ali Azimo"
    },
    {
      id: 4,
      title: "Node.js vs PHP: Qual Backend Escolher em 2024?",
      excerpt: "Análise detalhada das duas tecnologias mais populares para desenvolvimento backend e seus casos de uso.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Backend",
      readTime: "8 min",
      date: "8 Jan 2024",
      author: "Ali Azimo"
    }
  ];

const blogCategories = [
  { name: "Todos", count: 12 },
  { name: "Frontend", count: 4 },
  { name: "Backend", count: 3 },
  { name: "Análise de Dados", count: 3 },
  { name: "Automação", count: 2 }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section com Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay mais transparente para ver melhor a imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/30" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-blue-900 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-blue-900 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500 w-8' : 'bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-5 h-full flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-sm font-medium text-white">Líder em Formação Tecnológica</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Transforme Sua
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Carreira Digital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Domine as tecnologias mais demandadas do mercado com formação prática em 
              <span className="font-semibold text-white"> Programação Web, Análise de Dados </span>
              e
              <span className="font-semibold text-white"> Automação Empresarial</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/aulas"
                className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-2xl flex items-center gap-2 border border-amber-300"
              >
                <PlayCircle className="w-5 h-5" />
                Explorar Cursos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/servicos"
                className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2"
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Especialidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formação completa e soluções personalizadas para impulsionar sua carreira no mundo digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Code className="w-7 h-7 text-white" />,
                title: "Programação Web",
                description: "Desenvolvimento full-stack com tecnologias modernas e melhores práticas",
                features: ['React & Next.js', 'Node.js & Express', 'PHP & MySQL', 'APIs RESTful'],
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: <Laptop className="w-7 h-7 text-white" />,
                title: "Excel & Automação",
                description: "Domine planilhas avançadas e automatize processos com VBA e Power Query",
                features: ['Excel Avançado', 'Macros & VBA', 'Power Query', 'Dashboards'],
                color: 'from-emerald-500 to-green-600'
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-white" />,
                title: "Power BI",
                description: "Transforme dados em insights visuais com dashboards interativos profissionais",
                features: ['DAX & Power Query', 'Visualizações', 'ETL Processes', 'Data Modeling'],
                color: 'from-amber-500 to-yellow-500'
              },
              {
                icon: <Database className="w-7 h-7 text-white" />,
                title: "Consultoria TI",
                description: "Soluções personalizadas para digitalizar e otimizar seu negócio",
                features: ['Websites', 'Sistemas Custom', 'Automação', 'Integração'],
                color: 'from-purple-500 to-violet-600'
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className={`bg-gradient-to-r ${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg border border-blue-100 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-50 transition-all duration-300 shadow-sm border border-blue-100">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-amber-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para o Próximo Nível?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Não espere pelo momento perfeito. Comece agora e transforme seu futuro 
            na tecnologia com formação de qualidade e suporte especializado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/aulas"
              className="group bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-2xl flex items-center gap-2 border border-amber-200"
            >
              <Target className="w-5 h-5" />
              Começar Minha Jornada
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contactos"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              Falar com Consultor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-blue-200 mt-6 text-sm font-medium">
            ⚡ Turmas com Vagas Limitadas • Início Imediato • Garantia de Qualidade
          </p>
        </div>
      </section>

    </div>
  );
}