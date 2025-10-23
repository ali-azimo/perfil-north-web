import React, { useState } from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaChartBar, 
  FaFileExcel, 
  FaKeyboard, 
  FaExternalLinkAlt, 
  FaPlay, 
  FaClock, 
  FaLevelUpAlt,
  FaPhp,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare
} from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiJquery } from 'react-icons/si';

export default function Aulas() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('frontend');

  const categorias = [
    { id: 'frontend', nome: 'Frontend', icone: <FaCode />, cor: 'from-blue-500 to-cyan-500' },
    { id: 'backend', nome: 'Backend', icone: <FaDatabase />, cor: 'from-green-500 to-emerald-500' },
    { id: 'powerbi', nome: 'Power BI', icone: <FaChartBar />, cor: 'from-yellow-500 to-amber-500' },
    { id: 'excel', nome: 'Excel', icone: <FaFileExcel />, cor: 'from-green-600 to-green-700' },
    { id: 'vba', nome: 'VBA', icone: <FaKeyboard />, cor: 'from-orange-500 to-red-500' },
    { id: 'php', nome: 'PHP', icone: <FaPhp />, cor: 'from-purple-500 to-indigo-500' },
    { id: 'frameworks', nome: 'Frameworks CSS', icone: <FaCss3Alt />, cor: 'from-pink-500 to-rose-500' },
    { id: 'banco-dados', nome: 'Banco de Dados', icone: <FaDatabase />, cor: 'from-blue-600 to-blue-800' }
  ];

  const aulas = {
    frontend: [
      {
        titulo: 'HTML5 & CSS3 Fundamentos',
        descricao: 'Aprenda a estrutura base da web com HTML5 semântico e estilização com CSS3 moderno.',
        duracao: '4 horas',
        nivel: 'Iniciante',
        recursos: ['Tags Semânticas', 'Flexbox', 'Grid Layout', 'Responsividade'],
        links: [
          { nome: 'MDN Web Docs', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
          { nome: 'W3Schools', url: 'https://www.w3schools.com/html/' },
          { nome: 'CSS Tricks', url: 'https://css-tricks.com/' }
        ]
      },
      {
        titulo: 'JavaScript Moderno (ES6+)',
        descricao: 'Domine JavaScript com as últimas features: arrow functions, destructuring, async/await.',
        duracao: '6 horas',
        nivel: 'Intermediário',
        recursos: ['ES6+ Features', 'Promises', 'Async/Await', 'Modules'],
        links: [
          { nome: 'JavaScript.info', url: 'https://javascript.info/' },
          { nome: 'MDN JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
          { nome: 'ES6 Features', url: 'http://es6-features.org/' }
        ]
      },
      {
        titulo: 'React.js Completo',
        descricao: 'Desenvolva aplicações modernas com React, Hooks, Context API e React Router.',
        duracao: '8 horas',
        nivel: 'Intermediário',
        recursos: ['Hooks', 'Context API', 'React Router', 'Componentes'],
        links: [
          { nome: 'React Official', url: 'https://reactjs.org/docs/getting-started.html' },
          { nome: 'React Tutorial', url: 'https://react-tutorial.app/' },
          { nome: 'Awesome React', url: 'https://github.com/enaqx/awesome-react' }
        ]
      },
      {
        titulo: 'jQuery para Iniciantes',
        descricao: 'Aprenda a simplificar manipulação DOM e eventos com jQuery.',
        duracao: '3 horas',
        nivel: 'Iniciante',
        recursos: ['Seletores', 'Event Handling', 'Animations', 'AJAX'],
        links: [
          { nome: 'jQuery Official', url: 'https://jquery.com/' },
          { nome: 'jQuery Learning Center', url: 'https://learn.jquery.com/' },
          { nome: 'jQuery API Docs', url: 'https://api.jquery.com/' }
        ]
      }
    ],
    backend: [
      {
        titulo: 'Node.js & Express',
        descricao: 'Crie APIs RESTful robustas com Node.js e Express framework.',
        duracao: '5 horas',
        nivel: 'Intermediário',
        recursos: ['Express.js', 'Middlewares', 'REST APIs', 'Autenticação'],
        links: [
          { nome: 'Node.js Docs', url: 'https://nodejs.org/docs/' },
          { nome: 'Express Guide', url: 'https://expressjs.com/en/guide/routing.html' },
          { nome: 'REST API Tutorial', url: 'https://restfulapi.net/' }
        ]
      },
      {
        titulo: 'MongoDB & Mongoose',
        descricao: 'Trabalhe com bancos NoSQL e ODM Mongoose para aplicações escaláveis.',
        duracao: '4 horas',
        nivel: 'Intermediário',
        recursos: ['CRUD Operations', 'Schemas', 'Aggregation', 'Indexing'],
        links: [
          { nome: 'MongoDB University', url: 'https://university.mongodb.com/' },
          { nome: 'Mongoose Docs', url: 'https://mongoosejs.com/docs/guide.html' },
          { nome: 'NoSQL Explained', url: 'https://www.mongodb.com/nosql-explained' }
        ]
      },
      {
        titulo: 'API Security & JWT',
        descricao: 'Implemente autenticação e autorização seguras com JWT e boas práticas.',
        duracao: '3 horas',
        nivel: 'Avançado',
        recursos: ['JWT Tokens', 'bcrypt', 'CORS', 'Helmet'],
        links: [
          { nome: 'JWT.io', url: 'https://jwt.io/' },
          { nome: 'OWASP Security', url: 'https://owasp.org/www-project-api-security/' },
          { nome: 'Auth0 Docs', url: 'https://auth0.com/docs/' }
        ]
      }
    ],
    php: [
      {
        titulo: 'PHP Básico ao Intermediário',
        descricao: 'Aprenda a linguagem de backend mais popular para desenvolvimento web.',
        duracao: '6 horas',
        nivel: 'Iniciante',
        recursos: ['Sintaxe PHP', 'Funções', 'Arrays', 'Form Handling'],
        links: [
          { nome: 'PHP Official Docs', url: 'https://www.php.net/docs.php' },
          { nome: 'PHP The Right Way', url: 'https://phptherightway.com/' },
          { nome: 'W3Schools PHP', url: 'https://www.w3schools.com/php/' }
        ]
      },
      {
        titulo: 'PHP Orientado a Objetos',
        descricao: 'Domine os conceitos de OOP em PHP com classes, objetos e herança.',
        duracao: '5 horas',
        nivel: 'Intermediário',
        recursos: ['Classes & Objects', 'Herança', 'Polimorfismo', 'Namespaces'],
        links: [
          { nome: 'PHP OOP Guide', url: 'https://www.php.net/manual/pt_BR/language.oop5.php' },
          { nome: 'PHP OOP Tutorial', url: 'https://www.tutorialrepublic.com/php-tutorial/php-classes-and-objects.php' },
          { nome: 'Object-Oriented PHP', url: 'https://code.tutsplus.com/series/object-oriented-php--cms-1270' }
        ]
      },
      {
        titulo: 'PHP com MySQL',
        descricao: 'Integre PHP com MySQL para criar aplicações dinâmicas com banco de dados.',
        duracao: '4 horas',
        nivel: 'Intermediário',
        recursos: ['PDO Connection', 'MySQLi', 'Prepared Statements', 'CRUD Operations'],
        links: [
          { nome: 'PHP MySQL Docs', url: 'https://www.php.net/manual/pt_BR/book.mysqli.php' },
          { nome: 'PHP PDO Tutorial', url: 'https://www.php.net/manual/pt_BR/book.pdo.php' },
          { nome: 'MySQL with PHP', url: 'https://www.w3schools.com/php/php_mysql_intro.asp' }
        ]
      }
    ],
    frameworks: [
      {
        titulo: 'Tailwind CSS Completo',
        descricao: 'Aprenda CSS utility-first para desenvolver interfaces modernas rapidamente.',
        duracao: '5 horas',
        nivel: 'Iniciante',
        recursos: ['Utility Classes', 'Responsive Design', 'Customization', 'Components'],
        links: [
          { nome: 'Tailwind Docs', url: 'https://tailwindcss.com/docs' },
          { nome: 'Tailwind Components', url: 'https://tailwindui.com/components' },
          { nome: 'Tailwind Play', url: 'https://play.tailwindcss.com/' }
        ]
      },
      {
        titulo: 'Bootstrap 5',
        descricao: 'Domine o framework CSS mais popular para desenvolvimento responsivo.',
        duracao: '4 horas',
        nivel: 'Iniciante',
        recursos: ['Grid System', 'Components', 'Utilities', 'Customization'],
        links: [
          { nome: 'Bootstrap Docs', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
          { nome: 'Bootstrap Examples', url: 'https://getbootstrap.com/docs/5.3/examples/' },
          { nome: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/' }
        ]
      },
      {
        titulo: 'Tailwind vs Bootstrap',
        descricao: 'Compare e escolha o melhor framework para seus projetos.',
        duracao: '2 horas',
        nivel: 'Intermediário',
        recursos: ['Comparação', 'Casos de Uso', 'Performance', 'Customização'],
        links: [
          { nome: 'Comparison Article', url: 'https://www.sitepoint.com/tailwind-css-bootstrap-ui-frameworks/' },
          { nome: 'Tailwind vs Bootstrap', url: 'https://www.freecodecamp.org/news/tailwind-css-vs-bootstrap/' },
          { nome: 'Framework Choice Guide', url: 'https://css-tricks.com/tailwind-css-vs-bootstrap/' }
        ]
      }
    ],
    'banco-dados': [
      {
        titulo: 'MySQL Fundamentos',
        descricao: 'Aprenda SQL e administração básica do MySQL para aplicações web.',
        duracao: '5 horas',
        nivel: 'Iniciante',
        recursos: ['SQL Syntax', 'CRUD Operations', 'Joins', 'Indexes'],
        links: [
          { nome: 'MySQL Docs', url: 'https://dev.mysql.com/doc/' },
          { nome: 'MySQL Tutorial', url: 'https://www.mysqltutorial.org/' },
          { nome: 'W3Schools MySQL', url: 'https://www.w3schools.com/mysql/' }
        ]
      },
      {
        titulo: 'MySQL Avançado',
        descricao: 'Domine stored procedures, triggers e otimização de queries.',
        duracao: '4 horas',
        nivel: 'Intermediário',
        recursos: ['Stored Procedures', 'Triggers', 'Query Optimization', 'Transactions'],
        links: [
          { nome: 'MySQL Advanced', url: 'https://dev.mysql.com/doc/refman/8.0/en/advanced-features.html' },
          { nome: 'MySQL Performance', url: 'https://www.mysql.com/why-mysql/performance/' },
          { nome: 'Database Design', url: 'https://www.databasejournal.com/features/mysql/' }
        ]
      },
      {
        titulo: 'PHP + MySQL Integration',
        descricao: 'Crie aplicações web completas integrando PHP com MySQL.',
        duracao: '6 horas',
        nivel: 'Intermediário',
        recursos: ['Database Connection', 'Security Best Practices', 'CRUD Application', 'Data Validation'],
        links: [
          { nome: 'PHP MySQL Tutorial', url: 'https://www.tutorialrepublic.com/php-tutorial/php-mysql-crud-application.php' },
          { nome: 'Secure PHP MySQL', url: 'https://websitebeaver.com/php-pdo-prepared-statements-to-prevent-sql-injection' },
          { nome: 'PHP MySQL CRUD', url: 'https://www.positronx.io/php-mysql-crud-operations-tutorial-with-example/' }
        ]
      }
    ],
    powerbi: [
      {
        titulo: 'Power BI Básico ao Avançado',
        descricao: 'Transforme dados em insights visuais com dashboards interativos e relatórios dinâmicos.',
        duracao: '6 horas',
        nivel: 'Iniciante',
        recursos: ['DAX Formulas', 'Power Query', 'Visualizações', 'Dashboards'],
        links: [
          { nome: 'Microsoft Learn', url: 'https://learn.microsoft.com/pt-br/power-bi/' },
          { nome: 'Power BI Guide', url: 'https://www.powerbi.guide/' },
          { nome: 'DAX Guide', url: 'https://dax.guide/' }
        ]
      }
    ],
    excel: [
      {
        titulo: 'Excel Avançado',
        descricao: 'Vá além do básico com fórmulas complexas, tabelas dinâmicas e análise de dados.',
        duracao: '5 horas',
        nivel: 'Intermediário',
        recursos: ['Pivot Tables', 'Advanced Formulas', 'Data Analysis', 'Charts'],
        links: [
          { nome: 'Microsoft Excel Help', url: 'https://support.microsoft.com/pt-pt/excel' },
          { nome: 'Exceljet', url: 'https://exceljet.net/' },
          { nome: 'Contextures Excel', url: 'https://www.contextures.com/' }
        ]
      }
    ],
    vba: [
      {
        titulo: 'VBA para Automação',
        descricao: 'Automatize tarefas repetitivas e crie macros personalizadas no Excel.',
        duracao: '4 horas',
        nivel: 'Iniciante',
        recursos: ['Macros Recording', 'VBA Editor', 'Loops', 'User Forms'],
        links: [
          { nome: 'Microsoft VBA Docs', url: 'https://learn.microsoft.com/pt-br/office/vba/api/overview/' },
          { nome: 'Automate Excel', url: 'https://www.automateexcel.com/' },
          { nome: 'Excel VBA Tutorial', url: 'https://www.excel-easy.com/vba.html' }
        ]
      }
    ]
  };

  const getIconeCategoria = (categoriaId) => {
    const icones = {
      'frontend': <FaCode className="text-xl" />,
      'backend': <FaDatabase className="text-xl" />,
      'php': <FaPhp className="text-xl" />,
      'frameworks': <FaCss3Alt className="text-xl" />,
      'banco-dados': <SiMysql className="text-xl" />,
      'powerbi': <FaChartBar className="text-xl" />,
      'excel': <FaFileExcel className="text-xl" />,
      'vba': <FaKeyboard className="text-xl" />
    };
    return icones[categoriaId] || <FaCode className="text-xl" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Aulas</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa coleção completa de cursos em desenvolvimento web, dados e automação
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaAtiva(categoria.id)}
              className={`
                flex items-center px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2
                ${categoriaAtiva === categoria.id
                  ? `bg-gradient-to-r ${categoria.cor} text-white shadow-lg border-transparent`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-gray-200'
                }
              `}
            >
              <span className="mr-2">{getIconeCategoria(categoria.id)}</span>
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Informação da Categoria Ativa */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-md">
            <span className="mr-2">{getIconeCategoria(categoriaAtiva)}</span>
            <span className="font-semibold text-gray-700">
              {categorias.find(cat => cat.id === categoriaAtiva)?.nome} 
              <span className="text-gray-500 font-normal ml-2">
                ({aulas[categoriaAtiva]?.length || 0} aulas disponíveis)
              </span>
            </span>
          </div>
        </div>

        {/* Grid de Aulas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aulas[categoriaAtiva]?.map((aula, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{aula.titulo}</h3>
                  <span className={`ml-2 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    aula.nivel === 'Iniciante' ? 'bg-green-100 text-green-800' :
                    aula.nivel === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {aula.nivel}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{aula.descricao}</p>

                {/* Duração */}
                <div className="flex items-center text-gray-500 mb-4">
                  <FaClock className="mr-2" />
                  <span className="text-sm">{aula.duracao}</span>
                </div>

                {/* Recursos */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FaLevelUpAlt className="mr-2 text-green-500" />
                    Conteúdo da Aula:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aula.recursos.map((recurso, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {recurso}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Externos */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <FaExternalLinkAlt className="mr-2 text-blue-500" />
                    Recursos para Aprofundar:
                  </h4>
                  <div className="space-y-2">
                    {aula.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
                      >
                        <FaPlay className="mr-2 text-xs text-green-500" />
                        <span className="group-hover:underline flex-1">{link.nome}</span>
                        <FaExternalLinkAlt className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mensagem quando não há aulas */}
        {!aulas[categoriaAtiva] && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Em Desenvolvimento</h3>
            <p className="text-gray-600">Novas aulas para esta categoria estarão disponíveis em breve!</p>
          </div>
        )}
      </div>
    </div>
  );
}