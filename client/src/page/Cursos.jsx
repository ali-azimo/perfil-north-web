import React from "react";
import { Code, Laptop, BarChart3 } from "lucide-react";

export default function Cursos() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="text-center py-16 bg-blue-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Aulas e Formação Profissional</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Aprende connosco as ferramentas mais utilizadas no mercado: Programação Web,
          Excel, VBA e Power BI. Cursos práticos e direcionados para resultados.
        </p>
      </div>

      {/* Cursos */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <Code className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Programação Web</h3>
          <p className="text-gray-600 mb-3">
            Aprende HTML, CSS, JavaScript, React e Node.js criando sites e aplicações
            completas do zero.
          </p>
          <p className="font-semibold text-blue-700">Duração: 8 semanas</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <Laptop className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Excel e VBA</h3>
          <p className="text-gray-600 mb-3">
            Domina funções avançadas, dashboards e cria automações com VBA para otimizar
            processos.
          </p>
          <p className="font-semibold text-blue-700">Duração: 6 semanas</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Power BI</h3>
          <p className="text-gray-600 mb-3">
            Aprende a transformar dados em relatórios visuais e painéis
            interativos para a tua empresa.
          </p>
          <p className="font-semibold text-blue-700">Duração: 4 semanas</p>
        </div>
      </div>

      {/* Chamada à ação */}
      <div className="text-center py-16 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Inscreve-te já!</h2>
        <p className="text-lg mb-8">
          Entra em contacto e garante o teu lugar nas próximas turmas presenciais
          ou online.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/258875826662"
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
