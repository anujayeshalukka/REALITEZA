import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, PenTool, HardHat, Factory, 
  CheckCircle2, ArrowRight, Zap, Target,
  Shield, Settings, Calculator
} from 'lucide-react';

import devImg from '../assets/commercial-dev.png';
import archImg from '../assets/bim-model.png';
import contractorImg from '../assets/facade-installation.png';
import fabricatorImg from '../assets/factory-cnc.png';

const Services = () => {
  const [activeTab, setActiveTab] = useState('fabricators');

  const audiences = [
    { id: 'developers', label: 'Investors & Developers', icon: <Building2 size={20} /> },
    { id: 'architects', label: 'Architects & Consultants', icon: <PenTool size={20} /> },
    { id: 'contractors', label: 'Main Contractors', icon: <HardHat size={20} /> },
    { id: 'fabricators', label: 'Facade Fabricators', icon: <Factory size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'developers':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Engineering Oversight for <span className="text-primary">Investors & Developers</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We safeguard your investment by ensuring architectural visions translate into structurally sound, cost-effective realities. We provide critical engineering oversight to mitigate risks, optimize budgets, and guarantee long-term asset performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-800 font-bold mb-2">Technical Design Audits:</p>
                  <p className="text-slate-600 text-sm">Identifying engineering bottlenecks and structural risks before the tender stage to prevent costly on-site change orders.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-800 font-bold mb-2">Value Engineering:</p>
                  <p className="text-slate-600 text-sm">Optimizing material specifications and system profiles to reduce capital expenditure without compromising the architectural intent.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-800 font-bold mb-2">Tender Evaluation:</p>
                  <p className="text-slate-600 text-sm">Providing unbiased, data-driven analysis of contractor bids to ensure technical compliance and fair pricing.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-800 font-bold mb-2">Performance Verification:</p>
                  <p className="text-slate-600 text-sm">Validating the thermal, acoustic, and wind-load capacities of proposed facade systems.</p>
                </div>
              </div>
              <button className="btn-primary py-4 px-10 text-lg uppercase tracking-wider font-bold">
                Engage Engineering Oversight <ArrowRight className="ml-2" />
              </button>
            </div>
            <div className="relative">
              <img src={devImg} alt="Luxury Commercial Development" className="rounded-[40px] shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-4xl font-black text-primary mb-1">100%</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Compliance Rate</p>
              </div>
            </div>
          </div>
        );

      case 'architects':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  The Technical Bridge for <span className="text-primary">Architectural Vision</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We integrate with your team early in the design phase, providing specialized engineering and visual data to ensure your concepts are buildable, compliant, and cost-effective.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary h-fit"><PenTool size={24} /></div>
                    <div>
                      <p className="text-slate-800 font-bold mb-1">Concept Sketches & Schematic Proposals:</p>
                      <p className="text-slate-600">Translating design intent into structural reality with hand-sketched concepts and detailed schematic proposals to validate constructability early.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary h-fit"><Settings size={24} /></div>
                    <div>
                      <p className="text-slate-800 font-bold mb-1">Geometric Rationalization & Feasibility:</p>
                      <p className="text-slate-600">Transforming complex curves into constructible systems and standardizing dimensions to minimize variations and reduce fabrication time.</p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={archImg} alt="Architectural BIM Model" className="rounded-[40px] shadow-2xl" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3"><Zap className="text-primary" /> Performance Engineering</h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Performance Engineering & Compliance Support:</strong> We engineer the building physics, providing U-Value calculations, condensation risk analysis, and acoustic detailing while auditing for fire safety compliance.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3"><Target className="text-primary" /> Interface Management</h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Technical Detailing & Interface Management:</strong> Developing highly accurate 1:5 and 1:2 interface details to ensure seamless transitions between the facade envelope and primary structure.
                </p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-primary py-4 px-10 text-lg uppercase tracking-wider font-bold">
                Request a Schematic Proposal <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 'contractors':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Façade Coordination & <span className="text-primary">Technical Authority</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  As your dedicated facade engineering partner, we protect your critical path by managing the highest-risk structural and envelope packages, ensuring seamless coordination and strict quality control.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 text-sm"><strong>Interface Management & Tolerance Control:</strong> Managing complex transitions between framework and facade with 3D clash detection to absorb construction tolerances.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 text-sm"><strong>Technical Audits & Submittal Review:</strong> Acting as your technical authority to rigorously review subcontractor structural calculations and fabrication drawings prior to procurement.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 text-sm"><strong>Pre-Construction & Tender Equalization:</strong> Conducting unbiased, data-driven analysis of contractor bids to ensure technical compliance and fair pricing.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 text-sm"><strong>QA/QC, Testing & Site Inspections:</strong> Overseeing VMU and PMU testing and conducting third-party factory fabrication audits to prevent costly NCRs.</span>
                  </div>
                </div>
                <button className="btn-primary py-4 px-10 text-lg uppercase tracking-wider font-bold">
                  Hire Your Facade Support <ArrowRight className="ml-2" />
                </button>
              </div>
              <img src={contractorImg} alt="Site Execution" className="rounded-[40px] shadow-2xl" />
            </div>

            <div className="bg-slate-900 rounded-[40px] p-12 text-white">
              <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest text-primary">Structural Steel Engineering</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-4"><Calculator size={24} /></div>
                  <h4 className="font-bold text-lg">Material & Cost Modeling</h4>
                  <p className="text-slate-400 text-sm"><strong>Pre-Construction Material & Cost Modeling:</strong> Transforming conceptual designs into exact, BIM-integrated material forecasts to ensure financial predictability.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-4"><Settings size={24} /></div>
                  <h4 className="font-bold text-lg">Steel Detailing</h4>
                  <p className="text-slate-400 text-sm"><strong>Structural Steel Detailing:</strong> Delivering highly precise, clash-free steel detailing engineered for flawless fabrication and seamless on-site assembly.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-4"><Shield size={24} /></div>
                  <h4 className="font-bold text-lg">Connection Design</h4>
                  <p className="text-slate-400 text-sm"><strong>Connection Design & PE Stamping:</strong> Engineering precise joints to manage shear and moment forces, ensuring absolute stability and certified compliance.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'fabricators':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Zero-Error Solutions for <span className="text-primary">Facade Fabricators</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Winning profitable projects requires exact data. We support fabricators from bidding through zero-error factory production with complete technical integration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-800 font-bold mb-2 text-sm uppercase tracking-wider">Bidding Support</p>
                    <p className="text-slate-600 text-sm"><strong>Tender Estimation & QS:</strong> Providing highly accurate material take-offs and cost estimations to empower competitive, risk-free tenders.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-800 font-bold mb-2 text-sm uppercase tracking-wider">Design Support</p>
                    <p className="text-slate-600 text-sm"><strong>Comprehensive Shop Drawings:</strong> Fabrication-ready drawings rigorously engineered for rapid approval and structural compliance.</p>
                  </div>
                </div>
                <button className="btn-primary py-4 px-10 text-lg uppercase tracking-wider font-bold">
                  Get One-Point Support <ArrowRight className="ml-2" />
                </button>
              </div>
              <img src={fabricatorImg} alt="CNC Machining Factory" className="rounded-[40px] shadow-2xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'System Detailing', text: '1:1 and 1:2 interface details including die designs and custom extrusions.' },
                { title: 'CNC Data Extraction', text: 'Tailored CNC export files to eliminate manual programming errors and accelerate production.' },
                { title: 'Fabrication Tickets', text: 'Individual part drawings (glass, aluminum, steel, gaskets) with exact machining dimensions.' },
                { title: 'Material Optimization', text: 'High-end software optimization for maximized bar-length yield and scrap reduction.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed"><strong>{item.title}:</strong> {item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100">
              <h3 className="text-2xl font-extrabold mb-8 text-slate-900">Fabrication Packages & Site Logistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-800 font-bold mb-2">Fabrication Packages Delivery:</p>
                    <p className="text-slate-600 text-sm"><strong>Precision Fabrication Tickets:</strong> Zero-error cutting and drilling data. <strong>Assembly & Tagging Plans:</strong> Systematic plans for foolproof factory assembly.</p>
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold mb-2">Material Optimization & MTO:</p>
                    <p className="text-slate-600 text-sm"><strong>Glass & Panel Orders:</strong> Exact cutting sizes to streamline orders. <strong>Hardware BOMs:</strong> Precise counts for brackets and fasteners.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-800 font-bold mb-2">Site Execution & Installation:</p>
                    <p className="text-slate-600 text-sm"><strong>Coordinate & Bracket Setting-Out:</strong> Precise global points to guarantee perfect grid alignment. <strong>Installation Sequencing:</strong> Step-by-step methodologies to minimize crane time.</p>
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold mb-2">Documentation:</p>
                    <p className="text-slate-600 text-sm"><strong>As-Built Documentation:</strong> Comprehensive handover manuals reflecting exact site conditions for smooth project closeout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Specialized engineering support segmented by project stakeholder.
          </p>
        </div>
      </section>

      {/* Audience Tabs Navigation */}
      <section className="sticky top-20 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-2 py-4">
            {audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${
                  activeTab === aud.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {aud.icon} {aud.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Area */}
      <section className="py-24 bg-white min-h-[600px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Signals & Compliance Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[120%] bg-primary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-widest">Technical Authority & <br/><span className="text-primary">Global Compliance</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our engineering hub operates under rigorous international standards, ensuring that every drawing, calculation, and BIM model we deliver is ready for the most demanding consultant reviews.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-primary font-bold mb-2">LOD 400</p>
                  <p className="text-sm text-slate-300">Detailed Fabrication Modeling Standards</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-primary font-bold mb-2">BS/EN/ASTM</p>
                  <p className="text-sm text-slate-300">International Engineering Compliance</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                  <CheckCircle2 className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">PE Stamping</h3>
                  <p className="text-slate-400 text-sm">Professional Engineer licensed review for structural calculations.</p>
                </div>
                <div className="bg-primary p-8 rounded-[32px] text-white">
                  <Shield className="text-white mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Third-Party QC</h3>
                  <p className="text-blue-100 text-sm">Rigorous internal quality control before any project submission.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8 md:pt-16">
                <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                  <Target className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">CNC Precision</h3>
                  <p className="text-slate-400 text-sm">Zero-error data extraction for automated factory production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Global CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-extrabold mb-8 text-slate-900 uppercase tracking-widest">Ready to optimize your project?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Whether you are at the concept stage or site installation, our engineering hub is ready to support your technical requirements.
          </p>
          <button className="btn-primary py-5 px-16 text-xl rounded-2xl font-black">
            Contact Our Technical Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
