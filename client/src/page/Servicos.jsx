import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Settings, 
  Database, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Code,
  Laptop,
  PieChart,
  Zap,
  MessageCircle
} from "lucide-react";

export default function Servicos() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites profissionais e sistemas personalizados com React, Node.js e integração a bases de dados.",
      features: ["React & Next.js", "Node.js & Express", "APIs RESTful", "Design Responsivo"],
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automação com VBA",
      description: "Automatiza tarefas repetitivas e cria ferramentas inteligentes no Excel para aumentar a produtividade.",
      features: ["Macros Avançadas", "Power Query", "Formulários Personalizados", "Relatórios Automáticos"],
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integração de Dados",
      description: "Conectamos diferentes sistemas e bases de dados para centralizar informação e facilitar decisões.",
      features: ["ETL Processes", "APIs Integration", "Data Migration", "Sincronização em Tempo Real"],
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise com Power BI",
      description: "Criação de dashboards dinâmicos e relatórios inteligentes para transformar dados em insights.",
      features: ["DAX & Power Query", "Visualizações Interativas", "Data Modeling", "KPI Tracking"],
      color: "from-slate-600 to-slate-700"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Analisamos suas necessidades e objetivos para entender o projeto"
    },
    {
      step: "02",
      title: "Proposta Personalizada",
      description: "Desenvolvemos um plano detalhado com escopo e orçamento"
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Implementação ágil com acompanhamento constante"
    },
    {
      step: "04",
      title: "Entrega & Suporte",
      description: "Entrega do projeto completo com treinamento e suporte contínuo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções <span className="text-slate-300">Tecnológicas</span> Sob Medida
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos soluções web modernas, automatizamos processos e transformamos dados 
            em insights estratégicos para impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contactos"
              className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-all duration-300 shadow-md"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="#servicos"
              className="border border-slate-500 text-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Nossos <span className="text-slate-600">Serviços</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Soluções completas desde desenvolvimento web até análise de dados avançada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group">
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-100 px-8 py-4 bg-slate-50 rounded-b-xl">
                  <button className="text-slate-700 hover:text-slate-900 font-medium text-sm flex items-center group">
                    Saber mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Como <span className="text-slate-600">Trabalhamos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Um processo transparente e colaborativo para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-slate-700 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-200">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-slate-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Entre em contacto para discutirmos seu projeto e encontrarmos a melhor solução.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://chat.whatsapp.com/FvrIwrO7IESGfIdK3Ww7iD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <Laptop className="w-5 h-5" />
              WhatsApp
            </a>
            
            <a
              href="mailto:webdesign.aejl@gmail.com"
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              Enviar E-mail
            </a>

            <Link
              to="/aulas"
              className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 flex items-center gap-2"
            >
              <PieChart className="w-5 h-5" />
              Ver Cursos
            </Link>
          </div>
          
          <p className="text-slate-400 mt-6 text-sm">
            ⚡ Resposta em 24h • Orçamento Gratuito • Projeto Piloto Sem Compromisso
          </p>
        </div>
      </section>
    </div>
  );
}