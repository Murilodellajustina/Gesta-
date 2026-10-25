import React from 'react';
import { ChevronRight, AlertCircle, HeartPulse, Droplets, Smile } from 'lucide-react';
import TopBar from '../components/TopBar';

export default function TelaSintomas() {
  const sintomas = [
    { icon: HeartPulse, color: '#8b5cf6', bg: '#ede9fe', title: 'Enjoos', desc: 'Mais comuns no início da gestação. Costumam melhorar após o 3º mês.' },
    { icon: AlertCircle, color: '#ec4899', bg: '#fce7f3', title: 'Cansaço', desc: 'É normal se sentir mais cansada. Seu corpo está trabalhando muito!' },
    { icon: HeartPulse, color: '#f97316', bg: '#ffedd5', title: 'Seios sensíveis', desc: 'Podem ficar mais doloridos e inchados.' },
    { icon: Smile, color: '#3b82f6', bg: '#dbeafe', title: 'Alterações de humor', desc: 'As variações hormonais podem influenciar no seu emocional.' },
    { icon: Droplets, color: '#14b8a6', bg: '#ccfbf1', title: 'Vontade de urinar', desc: 'É comum e acontece por causa das mudanças no corpo.' }
  ];

  return (
    <div className="d-flex flex-column h-100 bg-light">
      <TopBar titulo="Sintomas" showBack />
      
      <div className="px-4 py-3">
        <div className="d-flex gap-2 mb-4 overflow-auto" style={{ scrollbarWidth: 'none' }}>
          <button className="btn rounded-pill px-4 py-1 text-white fw-medium border-0" style={{ backgroundColor: '#7c3aed', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Comuns</button>
          <button className="btn rounded-pill px-4 py-1 text-secondary fw-medium bg-white border" style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Atenção</button>
          <button className="btn rounded-pill px-4 py-1 text-secondary fw-medium bg-white border" style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Dicas</button>
        </div>

        <div className="d-flex flex-column gap-3">
          {sintomas.map((s, i) => (
            <div key={i} className="bg-white p-3 shadow-sm d-flex align-items-start gap-3" style={{ borderRadius: '20px' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1" style={{ width: '40px', height: '40px', backgroundColor: s.bg, color: s.color }}>
                <s.icon size={20} />
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.95rem' }}>{s.title}</h6>
                <p className="text-muted mb-0 pe-2" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{s.desc}</p>
              </div>
              <ChevronRight size={18} className="text-muted align-self-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}