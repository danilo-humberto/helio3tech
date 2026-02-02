import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSplit from './components/FeatureSplit';
import QuoteSection from './components/QuoteSection';
import GridSection from './components/GridSection';
import ComplianceSection from './components/ComplianceSection';
import FeaturesTabs from './components/FeaturesTabs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Header />
      <main>
        <Hero />
        <FeatureSplit />
        <QuoteSection />
        <GridSection />
        <ComplianceSection />
        <FeaturesTabs />
      </main>
      <Footer />
    </div>
  );
};

export default App;