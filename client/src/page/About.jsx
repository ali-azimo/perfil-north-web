import React from 'react';
import { FaCode, FaFileExcel, FaChartBar, FaKeyboard, FaRocket, FaUsers, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  const cursos = [
    { 
      titulo: 'Programação Web', 
      descricao: 'Domine as tecnologias mais demandadas do mercado: HTML5, CSS3, JavaScript, React e Node.js.', 
      icone: <FaCode size={40} color="#4A90E2" /> 
    },
    { 
      titulo: 'Excel Avançado', 
      descricao: 'Vá além do básico com fórmulas complexas, Power Query e análise de dados profissionais.', 
      icone: <FaFileExcel size={40} color="#21A366" /> 
    },
    { 
      titulo: 'Power BI', 
      descricao: 'Transforme dados em insights visuais poderosos com dashboards interativos e relatórios dinâmicos.', 
      icone: <FaChartBar size={40} color="#F2C80F" /> 
    },
    { 
      titulo: 'VBA e Macros', 
      descricao: 'Automatize processos repetitivos e crie soluções personalizadas para aumentar a produtividade.', 
      icone: <FaKeyboard size={40} color="#FF5733" /> 
    },
  ];

  const valores = [
    { icone: <FaRocket />, titulo: 'Inovação', descricao: 'Sempre à frente com as últimas tecnologias' },
    { icone: <FaUsers />, titulo: 'Comunidade', descricao: 'Construindo juntos o futuro digital' },
    { icone: <FaGraduationCap />, titulo: 'Excelência', descricao: 'Compromisso com a qualidade do ensino' },
  ];

  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '700',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          North-Web
        </h1>
        <p style={{
          fontSize: '1.3rem',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          opacity: '0.9'
        }}>
          Liderando a revolução digital no Norte de Moçambique
        </p>
      </div>

      {/* Sobre a Empresa */}
      <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#1e293b',
              marginBottom: '30px',
              fontWeight: '600'
            }}>
              Nossa Missão
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#475569',
              marginBottom: '25px'
            }}>
              A <strong style={{ color: '#3b82f6' }}>North-Web</strong> é uma organização pioneira fundada em 2024, 
              com o propósito de acelerar o desenvolvimento tecnológico na região norte de Moçambique. 
              Atuamos como catalisadores da transformação digital, capacitando a próxima geração de 
              profissionais através de formação prática e de alta qualidade.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: '#64748b',
              fontSize: '1rem'
            }}>
              <FaMapMarkerAlt style={{ marginRight: '10px' }} />
              <span>Atuando na região norte de Moçambique</span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #3b82f6'
          }}>
            <h3 style={{ color: '#1e293b', marginBottom: '20px' }}>Por que escolher a North-Web?</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>
                ✅ Metodologia prática e baseada em projetos reais
              </li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>
                ✅ Instrutores com experiência de mercado
              </li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>
                ✅ Acompanhamento personalizado
              </li>
              <li style={{ padding: '10px 0' }}>
                ✅ Foco na empregabilidade e empreendedorismo
              </li>
            </ul>
          </div>
        </div>

        {/* Nossos Valores */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#1e293b',
            marginBottom: '50px',
            fontWeight: '600'
          }}>
            Nossos Valores
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {valores.map((valor, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  backgroundColor: '#dbeafe',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  color: '#3b82f6',
                  fontSize: '1.5rem'
                }}>
                  {valor.icone}
                </div>
                <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>
                  {valor.titulo}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cursos */}
        <div>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#1e293b',
            marginBottom: '50px',
            fontWeight: '600'
          }}>
            Nossos Cursos
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {cursos.map((curso, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                borderTop: '4px solid #3b82f6'
              }}>
                <div style={{ marginBottom: '20px' }}>{curso.icone}</div>
                <h3 style={{ 
                  marginBottom: '15px', 
                  color: '#1e293b',
                  fontSize: '1.3rem',
                  fontWeight: '600'
                }}>
                  {curso.titulo}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  {curso.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
          Pronto para transformar seu futuro?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          marginBottom: '30px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          opacity: '0.9'
        }}>
          Junte-se à North-Web e dê o primeiro passo na sua jornada digital.
        </p>
        <button style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '15px 40px',
          fontSize: '1.1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'background-color 0.3s ease'
        }}>
          Inscreva-se Agora
        </button>
      </div>
    </div>
  );
}