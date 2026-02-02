import React from 'react';
import { Shield, Lock, Database, Globe, Server, Key } from 'lucide-react';

const items = [
  { icon: <Shield />, label: "HIPAA Ready" },
  { icon: <Lock />, label: "LGPD Compliant" },
  { icon: <Database />, label: "TISS 3.05+" },
  { icon: <Globe />, label: "HL7 / FHIR" },
  { icon: <Server />, label: "SLA 99.99%" },
  { icon: <Key />, label: "SSO / SAML" },
];

const ComplianceSection: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2">Conformidade e Segurança</h2>
        <p className="text-gray-400 mb-12">Todas as primitivas são testadas nos ambientes mais rigorosos.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-cyan-500/50 group-hover:bg-cyan-900/10 transition-all duration-300">
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;