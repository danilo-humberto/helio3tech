import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const FeatureSplit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hl7' | 'fhir'>('fhir');

  const fhirCode = `
// Exemplo de recurso FHIR (Patient)
const patientData = {
  resourceType: "Patient",
  id: "helio-345",
  active: true,
  name: [{
    use: "official",
    family: "Silva",
    given: ["Mariana"]
  }],
  gender: "female",
  birthDate: "1985-04-20",
  telecom: [{
    system: "phone",
    value: "(11) 99999-8888"
  }]
};

// Integração direta com API Helio3
await helio.patient.create(patientData);
`;

  const hl7Code = `
// Segmento PID (Patient Identification)
// Formato Pipe-delimited legado suportado
const hl7Message = \`
MSH|^~\\&|HELIO3|HOSP|REC|ADT|20231024||ADT^A01|MSG001|P|2.5
PID|1||PATID1234^5^M11||Silva^Mariana||19850420|F
PV1|1|I|2000^2012^01||||0045^Dr. Santos
\`;

// Parser integrado de alta performance
const parsed = helio.hl7.parse(hl7Message);
`;

  return (
    <section id="platform" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Interoperabilidade nativa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conecte-se com legados ou o futuro. Nossa engine suporta HL7 v2, v3 e FHIR R4
            com validação em tempo real e conformidade LGPD.
          </p>

          <div className="flex justify-center mt-8">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 inline-flex">
              <button
                onClick={() => setActiveTab('fhir')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'fhir' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
                  }`}
              >
                FHIR JSON
              </button>
              <button
                onClick={() => setActiveTab('hl7')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'hl7' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
                  }`}
              >
                HL7 V2
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-xl overflow-hidden bg-[#0A0A0A]">

          <div className="p-0 border-b lg:border-b-0 lg:border-r border-white/10 relative group">
            <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-gray-500 hover:text-white bg-white/5 rounded-md">
                <Copy size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono ml-2">integration.ts</span>
            </div>
            <div className="p-6 overflow-x-auto custom-scrollbar h-[400px]">
              <pre className="font-mono text-sm leading-relaxed text-gray-300">
                <code>{activeTab === 'fhir' ? fhirCode : hl7Code}</code>
              </pre>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#111] flex items-center justify-center p-8 h-[400px]">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-transparent opacity-50"></div>

            <div className="w-full max-w-sm bg-black border border-white/10 rounded-2xl shadow-2xl p-6 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-lg font-bold text-white">
                  MS
                </div>
                <div>
                  <h3 className="text-white font-medium">Mariana Silva</h3>
                  <div className="text-xs text-cyan-400 bg-cyan-900/20 px-2 py-0.5 rounded inline-block mt-1">
                    Internação Ativa
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-500 text-sm">Prontuário</span>
                  <span className="text-gray-200 font-mono text-sm">#38492</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-500 text-sm">Convênio</span>
                  <span className="text-gray-200 text-sm">Unimed Premium</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-500 text-sm">Última Aferição</span>
                  <div className="text-right">
                    <div className="text-white text-sm">120/80 mmHg</div>
                    <div className="text-[10px] text-gray-500">Há 15 min</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-white text-black py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                Ver Prontuário Completo
              </button>
            </div>

            <div className="absolute left-0 top-1/2 w-8 h-[1px] bg-white/20"></div>
            <div className="absolute right-0 top-1/2 w-8 h-[1px] bg-white/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;