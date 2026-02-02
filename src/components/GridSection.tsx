import React from 'react';
import { Calendar, FileText, Pill, Activity, Users, CreditCard } from 'lucide-react';

const modules = [
  {
    icon: <Activity className="w-6 h-6 text-cyan-400" />,
    title: "Triagem Inteligente",
    description: "Protocolo Manchester automatizado com sugestão de prioridade via IA.",
    preview: (
      <div className="grid grid-cols-2 gap-2 mt-4 opacity-50">
        <div className="h-8 bg-red-500/20 rounded border border-red-500/30"></div>
        <div className="h-8 bg-yellow-500/20 rounded border border-yellow-500/30"></div>
        <div className="h-8 bg-green-500/20 rounded border border-green-500/30"></div>
        <div className="h-8 bg-blue-500/20 rounded border border-blue-500/30"></div>
      </div>
    )
  },
  {
    icon: <CreditCard className="w-6 h-6 text-purple-400" />,
    title: "Faturamento TISS",
    description: "Geração automática de XMLs TISS e validação de glosas pré-envio.",
    preview: (
      <div className="flex items-center gap-2 mt-6 opacity-60">
        <div className="w-8 h-8 rounded bg-white/10"></div>
        <div className="flex-1 space-y-2">
          <div className="h-2 w-full bg-white/10 rounded"></div>
          <div className="h-2 w-2/3 bg-white/10 rounded"></div>
        </div>
      </div>
    )
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    title: "Prontuário Eletrônico",
    description: "Timeline do paciente, prescrição digital e assinatura via certificado A3.",
    preview: (
      <div className="mt-4 space-y-2 opacity-50">
        <div className="h-16 w-full bg-white/5 border border-white/10 rounded p-2">
          <div className="w-4 h-4 rounded-full bg-white/20 mb-2"></div>
          <div className="h-1 w-12 bg-white/20 rounded"></div>
        </div>
      </div>
    )
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Telemedicina",
    description: "Vídeo consultas integradas ao PEP sem necessidade de apps externos.",
    preview: (
       <div className="mt-4 mx-auto w-24 h-16 bg-white/5 border border-white/10 rounded relative flex items-center justify-center">
         <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
         </div>
       </div>
    )
  },
  {
    icon: <Pill className="w-6 h-6 text-pink-400" />,
    title: "Farmácia Clínica",
    description: "Controle de estoque, rastreabilidade por lote e dispensação via código de barras.",
    preview: null
  },
  {
    icon: <Calendar className="w-6 h-6 text-orange-400" />,
    title: "Agendamento",
    description: "Agenda multi-recursos, confirmação via WhatsApp e fila de espera.",
    preview: null
  }
];

const GridSection: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Módulos prontos para a Clínica
          </h2>
          <p className="text-gray-400">
            Copie, cole e configure. O Helio3 é modular, permitindo que você ative apenas o que precisa.
          </p>
          <div className="mt-8">
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              Ver todos os módulos
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => (
            <div key={idx} className="group relative bg-[#0E0E10] border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden">
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="mb-4">{mod.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{mod.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{mod.description}</p>
                {mod.preview && (
                  <div className="mt-auto border-t border-white/5 pt-4">
                    {mod.preview}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridSection;