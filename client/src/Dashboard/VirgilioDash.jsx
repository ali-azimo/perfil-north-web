import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Star, 
  Calendar,
  TrendingUp,
  FileText,
  MessageSquare,
  Settings,
  ArrowLeft,
  Download,
  Filter,
  GraduationCap,
  Clock,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VirgilioDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: 'Estudantes Atendidos', value: '183', change: '+8%' },
    { icon: <BookOpen className="w-6 h-6" />, label: 'Matérias Ministradas', value: '12', change: '+3' },
    { icon: <Star className="w-6 h-6" />, label: 'Avaliação Média', value: '4.7', change: '+0.1' },
    { icon: <GraduationCap className="w-6 h-6" />, label: 'Taxa de Aprovação', value: '94%', change: '+2%' }
  ];

  const recentActivities = [
    { time: '30 min atrás', action: 'Sessão de explicação de Matemática', student: 'Maria João' },
    { time: '2 horas atrás', action: 'Corrigiu exercícios de Contabilidade', students: 'Turma A' },
    { time: '4 horas atrás', action: 'Preparou material de estudo', subject: 'Estatística' },
    { time: '1 dia atrás', action: 'Reunião com pais', student: 'Carlos Mendes' },
    { time: '2 dias atrás', action: 'Workshop: Métodos de Estudo', participants: '45 estudantes' }
  ];

  const subjects = [
    { name: 'Matemática', students: 45, progress: 85, satisfaction: 4.8 },
    { name: 'Contabilidade', students: 38, progress: 92, satisfaction: 4.9 },
    { name: 'Estatística', students: 29, progress: 78, satisfaction: 4.6 },
    { name: 'Gestão Financeira', students: 34, progress: 88, satisfaction: 4.7 }
  ];

  const schedule = [
    { time: '08:00 - 10:00', activity: 'Aula de Matemática - Turma A', type: 'Presencial' },
    { time: '10:30 - 12:00', activity: 'Explicações de Contabilidade', type: 'Online' },
    { time: '14:00 - 15:30', activity: 'Preparação de Material', type: 'Administrativo' },
    { time: '16:00 - 17:30', activity: 'Apoio Individual - Estatística', type: 'Presencial' }
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
              <h1 className="text-2xl font-bold text-gray-900">Dashboard do Virgílio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
                <Download className="w-4 h-4 mr-2" />
                Relatório
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
                <div className="text-green-600 bg-green-50 p-3 rounded-lg">
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
            {/* Subjects Performance */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Performance por Matéria</h2>
                <select className="text-sm border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                  <option>Este Semestre</option>
                  <option>Semestre Passado</option>
                  <option>Ano Lectivo</option>
                </select>
              </div>
              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{subject.name}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500">{subject.students} estudantes</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm text-gray-500">{subject.satisfaction}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-24">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progresso</span>
                        <span className="font-medium">{subject.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Agenda de Hoje</h2>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">{item.time}</p>
                        <p className="text-sm text-gray-600">{item.activity}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Presencial' 
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'Online'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                ))}
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
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.student || activity.students || activity.subject}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-green-600 hover:text-green-700 font-medium">
                Ver todas as atividades
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Ações Rápidas</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Contactar estudantes</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Preparar exercícios</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Actualizar horários</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Award className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Emitir certificados</span>
                </button>
              </div>
            </div>

            {/* Student Progress */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Progresso dos Estudantes</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Em progresso</span>
                  <span className="text-sm text-gray-500">124 estudantes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Precisa de apoio</span>
                  <span className="text-sm text-gray-500">18 estudantes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Aguardando revisão</span>
                  <span className="text-sm text-gray-500">23 exercícios</span>
                </div>
                <div className="pt-3 border-t">
                  <button className="w-full text-sm text-green-600 hover:text-green-700 font-medium">
                    Ver relatório completo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}