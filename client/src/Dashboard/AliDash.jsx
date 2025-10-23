import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Code, 
  Star, 
  Calendar,
  TrendingUp,
  FileText,
  MessageSquare,
  Settings,
  ArrowLeft,
  Download,
  Share2,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AliDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: 'Alunos Ativos', value: '247', change: '+12%' },
    { icon: <BookOpen className="w-6 h-6" />, label: 'Cursos Ministrados', value: '15', change: '+2' },
    { icon: <Star className="w-6 h-6" />, label: 'Avaliação Média', value: '4.8', change: '+0.2' },
    { icon: <Code className="w-6 h-6" />, label: 'Projetos Entregues', value: '53', change: '+5' }
  ];

  const recentActivities = [
    { time: '2 min ago', action: 'Publicou nova aula de React', course: 'Frontend Avançado' },
    { time: '1 hora atrás', action: 'Revisou projeto do aluno', student: 'João Silva' },
    { time: '3 horas atrás', action: 'Atualizou material de JavaScript', course: 'JS Moderno' },
    { time: '5 horas atrás', action: 'Live: Power BI Dashboards', students: '89 participantes' },
    { time: '1 dia atrás', action: 'Novo curso lançado', course: 'Node.js API Development' }
  ];

  const courses = [
    { name: 'React.js Completo', students: 89, progress: 78, revenue: '25.4K' },
    { name: 'JavaScript Moderno', students: 124, progress: 92, revenue: '18.7K' },
    { name: 'Power BI Profissional', students: 67, progress: 65, revenue: '15.2K' },
    { name: 'Excel & VBA', students: 156, progress: 88, revenue: '22.1K' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/perfil" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar aos Perfis
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard do Ali</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-2">desde último mês</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses Performance */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Performance dos Cursos</h2>
                <select className="text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                  <option>Este ano</option>
                </select>
              </div>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{course.name}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500">{course.students} alunos</span>
                        <span className="text-sm text-gray-500">{course.revenue} MZN</span>
                      </div>
                    </div>
                    <div className="w-24">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progresso</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Projetos Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">React</span>
                    <span className="text-xs text-gray-500">2 dias atrás</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Sistema de Gestão Académica</h3>
                  <p className="text-sm text-gray-600 mb-3">Plataforma completa para gestão de estudantes e notas</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">85% completo</span>
                    <button className="text-xs text-blue-600 hover:text-blue-700">Ver detalhes</button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs text-gray-500">1 semana atrás</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">API REST North-Web</h3>
                  <p className="text-sm text-gray-600 mb-3">Backend para plataforma de cursos online</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Concluído</span>
                    <button className="text-xs text-blue-600 hover:text-blue-700">Ver detalhes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Atividade Recente</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.course || activity.student || activity.students}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
                Ver todas as atividades
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Ações Rápidas</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Responder mensagens</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Criar nova aula</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Configurações do perfil</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Agendar live</span>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Próximos Eventos</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Live: React Hooks</p>
                    <p className="text-xs text-gray-600">Amanhã, 15:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mentoria em Grupo</p>
                    <p className="text-xs text-gray-600">Sexta, 10:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}