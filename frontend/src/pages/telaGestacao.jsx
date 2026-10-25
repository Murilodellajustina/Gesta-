import React from 'react';
import { ChevronRight } from 'lucide-react';
import TopBar from '../components/TopBar';

export default function TelaGestacao() {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <TopBar titulo="Minha gestação" showBack />
      
      <div className="px-4 py-4">
        <div className="position-relative d-flex justify-content-between align-items-center mb-5 px-2">
          <div className="position-absolute top-50 start-0 w-100 bg-secondary opacity-25" style={{ height: '2px', zIndex: 0 }}></div>
          <div className="position-absolute top-50 start-0 bg-primary" style={{ width: '33%', height: '2px', zIndex: 0, backgroundColor: '#7c3aed !important' }}></div>
          
          <div className="d-flex flex-column align-items-center" style={{ zIndex: 1 }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '32px', height: '32px', backgroundColor: '#7c3aed' }}>1</div>
            <span className="text-dark fw-medium mt-1" style={{ fontSize: '0.7rem' }}>1º trimestre</span>
          </div>
          <div className="d-flex flex-column align-items-center" style={{ zIndex: 1 }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center text-muted fw-bold bg-white border border-2" style={{ width: '32px', height: '32px' }}>2</div>
            <span className="text-muted fw-medium mt-1" style={{ fontSize: '0.7rem' }}>2º trimestre</span>
          </div>
          <div className="d-flex flex-column align-items-center" style={{ zIndex: 1 }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center text-muted fw-bold bg-white border border-2" style={{ width: '32px', height: '32px' }}>3</div>
            <span className="text-muted fw-medium mt-1" style={{ fontSize: '0.7rem' }}>3º trimestre</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow-sm mb-4" style={{ borderRadius: '24px' }}>
          <h2 className="fw-bold mb-1" style={{ color: '#4c1d95', fontSize: '1.5rem' }}>12ª semana</h2>
          <p className="text-muted small mb-3">(11 a 13 semanas)</p>
          <p className="text-secondary small mb-4">
            Seu bebê já tem cerca de 5 a 6 cm e começa a se mexer, mas ainda não é perceptível. 
            Neste período, os principais órgãos continuam em formação.
          </p>
          <button className="btn w-100 d-flex justify-content-between align-items-center px-3 py-2 fw-medium border-0" style={{ backgroundColor: '#f5f3ff', color: '#7c3aed', borderRadius: '16px', fontSize: '0.85rem' }}>
            Saiba mais sobre esta semana
            <ChevronRight size={18} />
          </button>
        </div>

        <h6 className="fw-bold text-dark mb-3 px-1">Desenvolvimento do bebê</h6>
        <div className="bg-white p-4 shadow-sm d-flex align-items-center gap-3" style={{ borderRadius: '24px' }}>
          <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px', backgroundColor: '#fce7f3' }}>
            <span style={{ fontSize: '1.8rem' }}>👶</span>
          </div>
          <ul className="text-secondary small mb-0 ps-3">
            <li>Formação dos órgãos principais</li>
            <li>Início dos movimentos</li>
            <li>Cérebro em desenvolvimento</li>
          </ul>
        </div>
      </div>
    </div>
  );
}