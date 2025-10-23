import React from 'react';
import aliImage from '../assets/Ali.png';
import virgilioImage from '../assets/Ali.png';

export default function Perfil() {
  const perfis = [
    {
      nome: 'Ali Azimo',
      cargos: [
        'Desenvolvedor da North-Web',
        'Estudante de Contabilidade e Fiscalidade',
        'Tradutor da Língua Inglesa',
        'Técnico de Gestão de Recursos',
        'Programador Web'
      ],
      imagem: aliImage,
      contactos: ['+258 844314455', '+258 874314455', '+258 824533491']
    },
    {
      nome: 'Virgílio Mario Massamba',
      cargos: [
        'Estudante de Contabilidade',
        'Assistente Profissional em Explicação de Matérias Diversas',
        'Administrativo da North-Web'
      ],
      imagem: virgilioImage,
      contactos: ['+258 862541650']
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Perfis Profissionais</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {perfis.map((perfil, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '20px',
            width: '280px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img
              src={perfil.imagem}
              alt={perfil.nome}
              style={{ borderRadius: '50%', width: '120px', height: '120px', marginBottom: '15px' }}
            />
            <h2 style={{ marginBottom: '10px' }}>{perfil.nome}</h2>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '15px', fontSize: '14px', color: '#555' }}>
              {perfil.cargos.map((cargo, i) => (
                <li key={i}>{cargo}</li>
              ))}
            </ul>
            <div style={{ fontSize: '14px', color: '#333' }}>
              <strong>Contactos:</strong>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '5px' }}>
                {perfil.contactos.map((cont, i) => (
                  <li key={i}>{cont}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
