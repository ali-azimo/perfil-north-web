import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Briefcase, 
  User, 
  ArrowRight, 
  Star, 
  Award,
  Code,
  BookOpen,
  Languages,
  Settings
} from 'lucide-react';

// Importe suas imagens reais aqui
import aliImage from '../assets/Ali.png';
import virgilioImage from '../assets/Virgilio.png'; // Atualize para a imagem real do Virgilio

export default function Perfil() {
  const perfis = [
    {
      id: 'ali',
      nome: 'Ali Azimo',
      titulo: 'Fundador & Desenvolvedor Full-Stack',
      cargos: [
        { icone: <Code className="w-4 h-4" />, texto: 'Desenvolvedor Full-Stack na North-Web' },
        { icone: <BookOpen className="w-4 h-4" />, texto: 'Estudante de Contabilidade e Fiscalidade' },
        { icone: <Languages className="w-4 h-4" />, texto: 'Tradutor Profissional de Inglês' },
        { icone: <User className="w-4 h-4" />, texto: 'Técnico de Gestão de Recursos Humanos' },
        { icone: <Settings className="w-4 h-4" />, texto: 'Especialista em Desenvolvimento Web' }
      ],
      imagem: aliImage,
      contactos: [
        { tipo: 'phone', valor: '+258 844314455' },
        { tipo: 'phone', valor: '+258 874314455' },
        { tipo: 'phone', valor: '+258 824533491' },
        { tipo: 'email', valor: 'ali.azimo@northweb.com' }
      ],
      habilidades: ['JavaScript', 'React', 'Node.js', 'Python', 'Power BI', 'Excel Avançado'],
      experiencia: '4+ anos',
      projetos: '50+',
      rating: 4.8,
      corPrimaria: 'from-blue-500 to-cyan-500',
      corSecundaria: 'blue'
    },
    {
      id: 'virgilio',
      nome: 'Virgílio Mario Massamba',
      titulo: 'Coordenador Acadêmico & Consultor',
      cargos: [
        { icone: <BookOpen className="w-4 h-4" />, texto: 'Estudante de Contabilidade' },
        { icone: <User className="w-4 h-4" />, texto: 'Professor Particular Multidisciplinar' },
        { icone: <Briefcase className="w-4 h-4" />, texto: 'Administrador da North-Web' },
        { icone: <Award className="w-4 h-4" />, texto: 'Consultor em Métodos de Estudo' }
      ],
      imagem: virgilioImage,
      contactos: [
        { tipo: 'phone', valor: '+258 862541650' },
        { tipo: 'email', valor: 'virgilio.massamba@northweb.com' }
      ],
      habilidades: ['Contabilidade', 'Gestão', 'Docência', 'Administração', 'Excel'],
      experiencia: '3+ anos',
      projetos: '30+',
      rating: 4.7,
      corPrimaria: 'from-green-500 to-emerald-500',
      corSecundaria: 'green'
    }
  ];

  const getIconeContato = (tipo) => {
    switch (tipo) {
      case 'phone': return <Phone className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      default: return <Phone className="w-4 h-4" />;
    }
  };

  const getCorContato = (tipo) => {
    switch (tipo) {
      case 'phone': return 'text-blue-600';
      case 'email': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Equipe</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que tornam a North-Web uma referência em formação tecnológica
          </p>
        </div>

        {/* Grid de Perfis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {perfis.map((perfil, index) => (
            <div key={perfil.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Header do Card */}
              <div className={`bg-gradient-to-r ${perfil.corPrimaria} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={perfil.imagem}
                        alt={perfil.nome}
                        className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                        <div className={`w-3 h-3 rounded-full bg-${perfil.corSecundaria}-500`}></div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{perfil.nome}</h2>
                      <p className="text-white/80">{perfil.titulo}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="font-semibold">{perfil.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{perfil.experiencia}</div>
                    <div className="text-sm text-gray-600">Experiência</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{perfil.projetos}</div>
                    <div className="text-sm text-gray-600">Projetos</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{perfil.cargos.length}</div>
                    <div className="text-sm text-gray-600">Funções</div>
                  </div>
                </div>

                {/* Cargos e Funções */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                    Funções e Especialidades
                  </h3>
                  <div className="space-y-2">
                    {perfil.cargos.map((cargo, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="text-blue-500 mt-0.5">{cargo.icone}</div>
                        <span className="text-gray-700 text-sm flex-1">{cargo.texto}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Habilidades */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Habilidades Técnicas</h3>
                  <div className="flex flex-wrap gap-2">
                    {perfil.habilidades.map((habilidade, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {habilidade}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contactos */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Contactos</h3>
                  <div className="space-y-2">
                    {perfil.contactos.map((contato, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`${getCorContato(contato.tipo)}`}>
                          {getIconeContato(contato.tipo)}
                        </div>
                        <span className="text-gray-700 text-sm">{contato.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão para Dashboard */}
                <Link
                  to={`/dashboard/${perfil.id}`}
                  className="group w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-md"
                >
                  <User className="w-5 h-5 mr-2" />
                  Acessar Dashboard
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Informação Adicional */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Equipe Multidisciplinar
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa equipe combina expertise técnica sólida com paixão por ensino. 
              Cada membro traz experiências únicas que enriquecem o aprendizado 
              e garantem uma formação completa e atualizada com as demandas do mercado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Dedicados ao seu sucesso</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Suporte disponível</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
                <div className="text-gray-600">Anos de experiência combinada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}