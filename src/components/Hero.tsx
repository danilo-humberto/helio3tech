import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Versão 3.0 Disponível
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              A nova geração de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                sistemas clínicos
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Helio3Tech é uma plataforma unificada que transforma dados complexos em decisões clínicas precisas. Segurança nível militar, performance em tempo real e UX focada no médico.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Agendar Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/10 rounded-full text-gray-300 font-mono text-sm flex items-center justify-center gap-3 cursor-pointer hover:border-white/20 transition-all">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span>npx helio3-connect@latest</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Dashboard Mockup */}
          <div className="relative perspective-1000 hidden lg:block">
            <div className="transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[2deg]">
              {/* Main Dashboard Card */}
              <div className="w-full aspect-[4/3] rounded-xl glass-panel p-1 shadow-2xl relative overflow-hidden bg-[#0A0A0A]">
                {/* Header of the fake window */}
                <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-auto text-[10px] text-gray-600 font-mono">dashboard.helio3.app</div>
                </div>

                {/* Dashboard UI Mockup */}
                <div className="p-6 grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar */}
                  <div className="col-span-2 border-r border-white/5 pr-4 space-y-3">
                    <div className="h-8 w-8 rounded bg-cyan-900/30 mb-6"></div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-2 w-full bg-white/10 rounded"></div>
                    ))}
                  </div>
                  
                  {/* Main Area */}
                  <div className="col-span-10 space-y-4">
                    <div className="flex justify-between items-end mb-6">
                      <div className="space-y-2">
                        <div className="h-3 w-32 bg-white/10 rounded"></div>
                        <div className="h-6 w-64 bg-white/20 rounded"></div>
                      </div>
                      <div className="h-8 w-24 bg-cyan-600/20 rounded border border-cyan-500/30"></div>
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 rounded-lg bg-white/5 border border-white/5 p-4 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-cyan-500/50"></div>
                      </div>
                      <div className="h-32 rounded-lg bg-white/5 border border-white/5 p-4"></div>
                      <div className="h-32 rounded-lg bg-white/5 border border-white/5 p-4 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-500"></div>
                      </div>
                    </div>

                    {/* Table Row */}
                    <div className="space-y-2 mt-4">
                       {[1, 2, 3].map((row) => (
                         <div key={row} className="h-10 w-full bg-white/5 rounded border border-white/5 flex items-center px-4 gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10"></div>
                            <div className="w-24 h-2 bg-white/10 rounded"></div>
                            <div className="ml-auto w-16 h-2 bg-green-500/20 rounded"></div>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements on top of dashboard */}
                <div className="absolute -right-8 top-20 w-48 p-4 glass-panel rounded-lg shadow-xl animate-pulse-slow">
                  <div className="text-xs text-cyan-400 font-mono mb-1">Alerta de UTI</div>
                  <div className="text-sm text-white font-medium">Ocupação 92%</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;