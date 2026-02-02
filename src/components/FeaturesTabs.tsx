import React, { useState } from 'react';
import { AlertCircle, CheckCircle, BarChart2 } from 'lucide-react';

const features = [
  {
    id: 'ai',
    title: 'IA Assistiva',
    description: 'Analise cada entrada clínica e receba alertas de interações medicamentosas.',
    content: (
      <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
        <div className="flex gap-3">
          <AlertCircle className="text-red-400 w-5 h-5 shrink-0" />
          <div>
            <div className="text-red-200 text-sm font-bold mb-1">Interação Detectada</div>
            <p className="text-red-300/80 text-xs">
              A combinação de <strong>Warfarina</strong> e <strong>Aspirina</strong> aumenta significativamente o risco de sangramento.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'analytics',
    title: 'Analytics Financeiro',
    description: 'Veja a saúde financeira do hospital em tempo real com projeções baseadas em ocupação.',
    content: (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">Receita Projetada</span>
          <span className="text-sm text-green-400 font-mono">+12.5%</span>
        </div>
        <div className="w-full h-32 bg-gradient-to-t from-green-500/20 to-transparent rounded border-b border-green-500/50 relative">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500"></div>
          {/* Simple CSS bars */}
          <div className="absolute bottom-0 left-[10%] w-[10%] h-[40%] bg-green-500/30"></div>
          <div className="absolute bottom-0 left-[30%] w-[10%] h-[60%] bg-green-500/30"></div>
          <div className="absolute bottom-0 left-[50%] w-[10%] h-[50%] bg-green-500/30"></div>
          <div className="absolute bottom-0 left-[70%] w-[10%] h-[80%] bg-green-500/30"></div>
        </div>
      </div>
    )
  },
  {
    id: 'score',
    title: 'Score de Paciente',
    description: 'Algoritmo proprietário que define a gravidade do paciente baseado nos sinais vitais.',
    content: (
      <div className="text-center py-6">
        <div className="text-5xl font-bold text-white mb-2 tracking-tighter">84</div>
        <div className="text-xs text-cyan-400 uppercase tracking-widest font-semibold">Score MEWS</div>
        <div className="mt-4 text-xs text-gray-500">Paciente estável, manter observação a cada 4h.</div>
      </div>
    )
  }
];

const FeaturesTabs: React.FC = () => {
  const [active, setActive] = useState(features[0]);

  return (
    <section id="use-cases" className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Ferramentas Integradas de Gestão</h2>
        <p className="text-gray-400">
          Antes de você prescrever, o Helio3 já analisou. Uma suite de ferramentas para apoiar sua decisão.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-2">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${active.id === f.id
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
            >
              <div className="font-semibold text-sm mb-1">{f.title}</div>
              <div className="text-xs opacity-70 leading-relaxed">{f.description}</div>
            </button>
          ))}
        </div>

        <div className="md:col-span-8">
          <div className="bg-[#111] border border-white/10 rounded-xl p-1 h-[400px] flex flex-col shadow-2xl relative overflow-hidden">
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            </div>

            <div className="flex-1 p-8 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black">
              <div className="w-full max-w-md bg-black/50 backdrop-blur border border-white/10 rounded-xl p-6 shadow-2xl">
                <div className="text-xs text-gray-500 mb-4 border-b border-white/5 pb-2 uppercase tracking-wide">
                  Output do Sistema
                </div>
                {active.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTabs;