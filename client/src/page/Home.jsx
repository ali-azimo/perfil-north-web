import React from "react";
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
  Target
} from "lucide-react";

export default function Home() {
  const stats = [
    { number: "500+", label: "Alunos Formados" },
    { number: "50+", label: "Projetos Entregues" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "24/7", label: "Suporte Disponível" }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Aulas Práticas",
      description: "Conteúdo hands-on com projetos reais do mercado"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentoria Individual",
      description: "Acompanhamento personalizado para seu crescimento"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certificação",
      description: "Certificado reconhecido ao concluir cada curso"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Comunidade Ativa",
      description: "Network com profissionais e estudantes"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Analista de Dados",
      content: "As aulas de Power BI transformaram minha forma de trabalhar com dados. Agora consigo criar dashboards profissionais!",
      rating: 5
    },
    {
      name: "João Silva",
      role: "Desenvolvedor",
      content: "Do zero ao profissional em 6 meses. A North-Web me deu a base sólida que precisava para minha carreira.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">Líder em Formação Tecnológica em Moçambique</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforme Sua
              <span className="block bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Carreira Digital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Domine as tecnologias mais demandadas do mercado com formação prática em 
              <span className="font-semibold text-white"> Programação Web, Análise de Dados </span>
              e
              <span className="font-semibold text-white"> Automação</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/aulas"
                className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Explorar Cursos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/servicos"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2"
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-blue-50"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-blue-50"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-blue-50"></path>
          </svg>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soluções <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Completas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do aprendizado à implementação, oferecemos tudo que você precisa para 
              prosperar na era digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programação Web</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desenvolvimento full-stack com React, Node.js, PHP e as melhores práticas 
                do mercado. Do frontend ao backend, criamos soluções escaláveis.
              </p>
              <ul className="space-y-2 text-gray-700">
                {['React & Next.js', 'Node.js & Express', 'PHP & MySQL', 'APIs RESTful'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excel e VBA</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Domine planilhas avançadas, automação com VBA e crie sistemas completos. 
                Transforme dados em insights poderosos.
              </p>
              <ul className="space-y-2 text-gray-700">
                {['Excel Avançado', 'Macros & VBA', 'Power Query', 'Dashboards'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-100">
              <div className="bg-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Power BI</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crie dashboards interativos e relatórios inteligentes. Tome decisões 
                baseadas em dados com visualizações profissionais.
              </p>
              <ul className="space-y-2 text-gray-700">
                {['DAX & Power Query', 'Visualizações', 'ETL Processes', 'Data Modeling'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoria</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Soluções personalizadas para seu negócio: desenvolvimento web, 
                automação, integração de sistemas e transformação digital.
              </p>
              <ul className="space-y-2 text-gray-700">
                {['Websites', 'Sistemas Custom', 'Automação', 'Integração'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Nossos <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Alunos Dizem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Junte-se a centenas de profissionais que transformaram suas carreiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para o Próximo Nível?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Não espere pelo momento perfeito. Comece agora e transforme seu futuro 
            na tecnologia com quem entende do assunto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/aulas"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Começar Minha Jornada
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contactos"
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              Falar com Consultor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-blue-200 mt-6 text-sm">
            ⚡ Turmas com vagas limitadas • Início imediato • Garantia de qualidade
          </p>
        </div>
      </section>
    </div>
  );
}