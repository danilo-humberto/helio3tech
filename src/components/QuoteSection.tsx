import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-32 flex justify-center text-center px-6 bg-black">
      <div className="max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-medium text-white leading-normal mb-8">
          "Construir interfaces hospitalares é terrivelmente difícil, especialmente tentando garantir a conformidade com a LGPD e a usabilidade em tablets. O <span className="text-cyan-400">Helio3Tech</span> torna esse caminho extremamente fácil."
        </h3>
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}foto-doutor.png`} alt="foto do doutor" className="w-full h-full object-cover object-top opacity-80" />
          </div>
          <div className="text-left">
            <div className="text-white text-sm font-medium">Dr. Roberto Almeida</div>
            <div className="text-gray-500 text-xs uppercase tracking-wide">Diretor Clínico, Hospital Santa Vida</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;