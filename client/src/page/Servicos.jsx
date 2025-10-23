import React from "react";
import { Globe, Settings, Database, BarChart3 } from "lucide-react";

export default function Servicos() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="text-center py-16 bg-blue-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Serviços Web e Consultoria</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Desenvolvimento de websites modernos, automação de processos com VBA,
          e análise de dados com Power BI — soluções completas para empresas e
          profissionais.
        </p>
      </div>

      {/* Serviços principais */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <Globe className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
          <p className="text-gray-600 mb-3">
            Criação de sites profissionais e sistemas personalizados com React,
            Node.js e integração a bases de dados.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <Settings className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Automação com VBA</h3>
          <p className="text-gray-600 mb-3">
            Automatiza tarefas repetitivas e cria ferramentas inteligentes no
            Excel para aumentar a produtividade da tua equipa.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <Database className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Integração de Dados</h3>
          <p className="text-gray-600 mb-3">
            Conectamos diferentes sistemas e bases de dados para centralizar a
            informação e facilitar decisões.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Análise e Power BI</h3>
          <p className="text-gray-600 mb-3">
            Criação de dashboards dinâmicos e relatórios inteligentes para
            transformar dados em insights estratégicos.
          </p>
        </div>
      </div>

      {/* Contacto */}
      <div className="text-center py-16 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Quer desenvolver o teu projecto?</h2>
        <p className="text-lg mb-8">
          Fala connosco e descobre como podemos ajudar a transformar as tuas
          ideias em soluções reais.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/258845826662"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:bgs.soluction@gmail.com"
            className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
