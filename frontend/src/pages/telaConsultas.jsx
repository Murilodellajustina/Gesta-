import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import TopBar from '../components/TopBar';

export default function TelaConsultas() {
  const navigate = useNavigate();
  const exames = [
    { date: '08', month: 'OCT', title: 'Consulta pré-natal', loc: 'UBS Centro', done: true },
    { date: '15', month: 'OCT', title: 'Exame de sangue', loc: 'Lab. São José', done: true },
    { date: '22', month: 'OCT', title: 'Ultrassom obstétrico', loc: 'Clínica Vida', done: false }
  ];

  return (
    <div className="d-flex flex-column h-100 bg-light position-relative">
      <TopBar titulo="Consultas e exames" showBack />
      
      <div className="px-4 py-3">
        <div className="d-flex bg-secondary bg-opacity-10 p-1 rounded-pill mb-4">
          <button className="btn w-50 rounded-pill text-white fw-medium border-0" style={{ backgroundColor: '#8b5cf6', fontSize: '0.85rem' }}>Calendário</button>
          <button 
            onClick={() => navigate('/exames')} 
            className="btn w-50 rounded-pill text-secondary fw-medium border-0" style={{ fontSize: '0.85rem' }}
          >
            Recomendados
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 px-2">
          <button className="btn btn-link text-secondary text-decoration-none fw-bold p-0">&lt;</button>
          <span className="fw-bold text-dark">Outubro 2026</span>
          <button className="btn btn-link text-secondary text-decoration-none fw-bold p-0">&gt;</button>
        </div>

        <div className="d-flex flex-column gap-3 pb-5">
          {exames.map((exame, i) => (
            <div key={i} className="bg-white p-3 d-flex align-items-center gap-3" style={{ borderRadius: '20px', border: exame.done ? '1px solid #ccfbf1' : '1px solid #f3f4f6', backgroundColor: exame.done ? '#f0fdfa' : '#fff' }}>
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '48px' }}>
                <span className="fs-5 fw-bold" style={{ color: exame.done ? '#0d9488' : '#4c1d95' }}>{exame.date}</span>
                <span className="fw-bold text-muted" style={{ fontSize: '10px' }}>{exame.month}</span>
              </div>
              <div className="flex-grow-1 border-start ps-3" style={{ borderColor: '#f3f4f6' }}>
                <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.9rem' }}>{exame.title}</h6>
                <p className="text-muted mb-0 mt-1" style={{ fontSize: '0.75rem' }}>{exame.loc}</p>
              </div>
              <div>
                {exame.done ? (
                  <CheckCircle2 size={24} style={{ color: '#14b8a6' }} />
                ) : (
                  <Circle size={24} style={{ color: '#d1d5db' }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="position-absolute w-100 px-4" style={{ bottom: '20px' }}>
        <button className="btn w-100 py-3 fw-bold text-white shadow" style={{ backgroundColor: '#7c3aed', borderRadius: '50px' }}>
          Adicionar consulta
        </button>
      </div>
    </div>
  );
}