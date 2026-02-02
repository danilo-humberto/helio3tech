import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 md:mb-0">
            Integre com qualquer serviço
          </h2>
          <div className="flex gap-8 grayscale opacity-50">
            <span className="text-xl font-bold text-white">AWS</span>
            <span className="text-xl font-bold text-white">Azure</span>
            <span className="text-xl font-bold text-white">Google Cloud</span>
            <span className="text-xl font-bold text-white">Oracle</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={`${import.meta.env.BASE_URL}logo-extendida.png`} alt="Logo Helio3Tech" className="w-40 h-full" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white">PEP Universal</a></li>
              <li><a href="#" className="hover:text-white">Telemedicina</a></li>
              <li><a href="#" className="hover:text-white">Faturamento</a></li>
              <li><a href="#" className="hover:text-white">Portal do Paciente</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white">Documentação</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
              <li><a href="#" className="hover:text-white">Comunidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white">Sobre</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Carreiras</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Helio3Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;