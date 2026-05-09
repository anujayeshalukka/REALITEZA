import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, PenTool, HardHat, Factory
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

import ClientSlider from '../components/ClientSlider';
import EndClientSlider from '../components/EndClientSlider';

// Service Content Components
import DevelopersContent from '../components/services/DevelopersContent';
import ArchitectsContent from '../components/services/ArchitectsContent';
import ContractorsContent from '../components/services/ContractorsContent';
import FabricatorsContent from '../components/services/FabricatorsContent';

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('developers');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['developers', 'architects', 'contractors', 'fabricators'].includes(hash)) {
      setActiveTab(hash);
      // Scroll to the tabs section if needed with a small delay for layout stability
      setTimeout(() => {
        const element = document.getElementById('services-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const audiences = [
    { id: 'developers', label: 'Developers', icon: <Building2 size={20} /> },
    { id: 'architects', label: 'Architects & Consultants', icon: <PenTool size={20} /> },
    { id: 'contractors', label: 'Main Contractors', icon: <HardHat size={20} /> },
    { id: 'fabricators', label: 'Facade Fabricators', icon: <Factory size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'developers': return <DevelopersContent />;
      case 'architects': return <ArchitectsContent />;
      case 'contractors': return <ContractorsContent />;
      case 'fabricators': return <FabricatorsContent />;
      default: return null;
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary pt-48 pb-32 text-white relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Audience Tabs Navigation */}
      <section id="services-content" className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 py-6">
            {audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex-1 flex items-center justify-center px-6 py-4 font-bold transition-all text-xs uppercase tracking-[0.2em] min-w-[200px] border-b-4 ${
                  activeTab === aud.id 
                  ? 'bg-primary text-white border-primary-dark shadow-lg scale-[1.02]' 
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-primary hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {aud.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Area */}
      <section className="py-24 bg-white min-h-[800px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ClientSlider />
      <EndClientSlider />
    </div>
  );
};

export default Services;


