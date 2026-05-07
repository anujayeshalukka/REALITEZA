import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, PenTool, HardHat, Factory, 
  CheckCircle2, ArrowRight, Shield, Settings, Calculator,
  Zap, Target, Globe2, Layers, Cpu, Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

import devImg from '../assets/developers.jpg';
import archImg from '../assets/bim-model.png';
import contractorImg from '../assets/facade-installation.png';
import fabricatorImg from '../assets/factory-cnc.png';

const Services = () => {
  const [activeTab, setActiveTab] = useState('developers');

  const audiences = [
    { id: 'developers', label: 'Developers', icon: <Building2 size={20} /> },
    { id: 'architects', label: 'Architects & Consultants', icon: <PenTool size={20} /> },
    { id: 'contractors', label: 'Main Contractors', icon: <HardHat size={20} /> },
    { id: 'fabricators', label: 'Facade Fabricators', icon: <Factory size={20} /> },
  ];

  const FeatureBlock = ({ title, content, icon: Icon }: { title: string; content: string; icon: any }) => (
    <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
      <div className="w-12 h-12 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={24} />
      </div>
      <p className="text-slate-800 text-lg leading-relaxed">
        <strong className="text-slate-900 font-black block text-xl mb-3">{title}:</strong>
        {content}
      </p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'developers':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="mb-8 leading-tight">
                  <span className="text-sm font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Investment Safeguard</span>
                  <span className="text-4xl md:text-5xl font-black block text-slate-900 tracking-tight">Services to Developers</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
                  "We safeguard your investment by ensuring architectural visions translate into structurally sound, cost-effective realities. We provide critical engineering oversight to mitigate risks, optimize budgets, and guarantee long-term asset performance."
                </p>
              </div>
              <div className="relative">
                <img src={devImg} alt="Commercial Development" className="rounded-[40px] shadow-2xl w-full object-cover aspect-video lg:aspect-auto lg:h-[400px]" />
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                  <p className="text-3xl font-black text-primary mb-1">ROI</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Optimized Budgeting</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureBlock 
                icon={Shield}
                title="Technical Design Audits" 
                content="Identifying engineering bottlenecks and structural risks before the tender stage to prevent costly on-site change orders." 
              />
              <FeatureBlock 
                icon={Zap}
                title="Value Engineering" 
                content="Optimizing material specifications and system profiles to reduce capital expenditure without compromising the architectural intent." 
              />
              <FeatureBlock 
                icon={Target}
                title="Tender Evaluation" 
                content="Providing unbiased, data-driven analysis of contractor bids to ensure technical compliance and fair pricing." 
              />
              <FeatureBlock 
                icon={Globe2}
                title="Performance Verification" 
                content="Validating the thermal, acoustic, and wind-load capacities of proposed facade systems." 
              />
            </div>

            <div className="flex justify-center pt-8">
              <Link to="/contact" className="btn-primary py-6 px-12 text-xl font-black tracking-widest rounded-2xl group flex items-center gap-4">
                ENGAGE ENGINEERING OVERSIGHT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        );

      case 'architects':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <h2 className="mb-8 leading-tight">
                  <span className="text-sm font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Technical Bridge</span>
                  <span className="text-4xl md:text-5xl font-black block text-slate-900 tracking-tight uppercase leading-[1.1]">Services to Architects & Consultants</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
                  "We serve as the technical bridge between your architectural vision and structural reality. By integrating with your team early in the design phase, REALITEZA provides the specialized engineering and visual data required to ensure your concepts are buildable, compliant, and cost-effective."
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img src={archImg} alt="BIM Modeling" className="rounded-[40px] shadow-2xl w-full object-cover aspect-video lg:aspect-auto lg:h-[450px]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureBlock 
                icon={PenTool}
                title="Concept Sketches & Schematic Proposals" 
                content="Translating design intent into structural reality starts with the pen. We provide initial hand-sketched concepts and detailed schematic proposal drawings to quickly validate constructability, explore material variants, and resolve primary building dependencies long before heavy CAD modeling begins." 
              />
              <FeatureBlock 
                icon={Settings}
                title="Geometric Rationalization & Feasibility" 
                content="We protect your aesthetic intent. By evaluating multiple design variants early, We transform complex curves into constructible systems, and standardize panel dimensions to minimize unique variations—drastically reducing fabrication time." 
              />
              <FeatureBlock 
                icon={Shield}
                title="Performance Engineering & Compliance Support" 
                content="We engineer the building physics. REALITEZA provides precise U-Value calculations, condensation risk analysis, and acoustic detailing to assist in achieving strict compliance with international fire safety standards." 
              />
              <FeatureBlock 
                icon={Layers}
                title="Technical Detailing & Interface Management" 
                content="We resolve the complex connections. Our team develops highly accurate 1:5 and 1:2 technical interface details to facilitate seamless transitions between the advanced facade envelope and the primary building structure." 
              />
            </div>

            <div className="flex justify-center pt-8">
              <Link to="/contact" className="btn-primary py-6 px-12 text-xl font-black tracking-widest rounded-2xl group flex items-center gap-4">
                REQUEST A SCHEMATIC PROPOSAL <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        );

      case 'contractors':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="mb-8 leading-tight">
                  <span className="text-sm font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Façade Coordination</span>
                  <span className="text-4xl md:text-5xl font-black block text-slate-900 tracking-tight uppercase">Services to Main Contractors</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
                  "As your dedicated facade engineering partner, we protect your critical path by managing the highest-risk structural and envelope packages on your project. We provide comprehensive end-to-end technical oversight, ensuring seamless coordination."
                </p>
              </div>
              <div>
                <img src={contractorImg} alt="Site Execution" className="rounded-[40px] shadow-2xl w-full object-cover aspect-video" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureBlock 
                icon={Target}
                title="Interface Management & Tolerance Control" 
                content="We manage the complex technical transitions between concrete/steel frameworks and the facade systems. We provide precise embedment layouts and 3D clash detection to absorb building movements." 
              />
              <FeatureBlock 
                icon={CheckCircle2}
                title="Technical Audits & Submittal Review" 
                content="We act as your technical authority to rigorously review and approve subcontractor structural calculations and fabrication shop drawings prior to material procurement." 
              />
              <FeatureBlock 
                icon={Layers}
                title="Pre-Construction & Tender Equalization" 
                content="We conduct rigorous technical audits of facade subcontractor bids, equalizing tender packages and vetting supplier capabilities to select the most competent manufacturing partners." 
              />
              <FeatureBlock 
                icon={Calculator}
                title="Value Engineering (VE) & Cost Modelling" 
                content="We optimize material specifications and system profiles to reduce capital expenditure without compromising the architectural intent." 
              />
              <FeatureBlock 
                icon={Shield}
                title="QA/QC, Testing & Site Inspections" 
                content="We guarantee what gets built matches what was approved. We oversee Visual Mock-Up (VMU) and Performance Mock-Up (PMU) testing to ensure strict compliance." 
              />
            </div>

            <div className="flex justify-center pt-8">
              <Link to="/contact" className="btn-primary py-6 px-12 text-xl font-black tracking-widest rounded-2xl group flex items-center gap-4">
                HIRE YOUR FACADE SUPPORT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        );

      case 'fabricators':
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <h2 className="mb-8 leading-tight">
                  <span className="text-sm font-bold block mb-3 text-primary uppercase tracking-[0.4em]">One-Point Support</span>
                  <span className="text-4xl md:text-5xl font-black block text-slate-900 tracking-tight uppercase leading-[1.1]">Services to Facade Fabricators</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
                  "We drive factory-floor efficiency by translating approved shop drawings into exact, zero-error manufacturing data. From tender estimation to site execution, we are your technical integration hub."
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img src={fabricatorImg} alt="Fabrication Support" className="rounded-[40px] shadow-2xl w-full object-cover aspect-video" />
              </div>
            </div>

            {/* Structural Steel Sub-section */}
            <div className="bg-slate-900 rounded-[40px] p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl md:text-3xl font-black mb-12 text-center uppercase tracking-widest border-b border-white/10 pb-6">
                Structural Steel Engineering
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <Calculator className="text-primary" size={40} />
                  <h4 className="text-xl font-bold uppercase tracking-wide">Pre-Construction Material & Cost Modeling</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-white block mb-2">Intelligent Forecasting:</strong> Providing real-time quantity takeoffs early in the project lifecycle to ensure financial predictability.
                  </p>
                </div>
                <div className="space-y-4">
                  <Settings className="text-primary" size={40} />
                  <h4 className="text-xl font-bold uppercase tracking-wide">Structural Steel Detailing</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-white block mb-2">Zero-Error Execution:</strong> Delivering highly precise, clash-free steel detailing engineered for flawless fabrication and fitment.
                  </p>
                </div>
                <div className="space-y-4">
                  <Shield className="text-primary" size={40} />
                  <h4 className="text-xl font-bold uppercase tracking-wide">Connection Design & PE Stamping</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-white block mb-2">Certified Execution:</strong> Engineering precise connections to manage forces across complex commercial and industrial projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureBlock 
                icon={Layers}
                title="Tender Estimation & QS" 
                content="Winning profitable projects requires exact data. We support fabricators during the bidding phase by providing highly accurate preliminary material take-offs and cost estimations." 
              />
              <FeatureBlock 
                icon={PenTool}
                title="Comprehensive Shop Drawings & Engineering" 
                content="Developing fabrication-ready shop drawings, system detailing (1:1 and 1:2 interface details), and structural validation including die designs and custom extrusions." 
              />
              <FeatureBlock 
                icon={Cpu}
                title="Fabrication Packages Delivery" 
                content="Precision Fabrication Tickets, direct CNC Data Extraction files, and systematic Assembly & Tagging Plans to ensure fast, foolproof factory assembly." 
              />
              <FeatureBlock 
                icon={Box}
                title="Material Optimization & MTO" 
                content="Extrusion & Cutting Optimization to eliminate waste. Hardware & Accessory BOMs detaliing precise counts for fasteners, gaskets, and sealants." 
              />
            </div>

            <div className="bg-slate-50 rounded-[40px] p-10 md:p-16 border border-slate-200">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">
                      Site Execution & <br />Installation Solutions
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      A flawless factory build must translate seamlessly to the construction site. We provide erection teams with exact spatial data.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Site Survey & Tolerance Integration",
                        "Coordinate & Bracket Setting-Out",
                        "Installation Sequencing (Methodologies)",
                        "Comprehensive As-Built Documentation"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm uppercase tracking-wide">
                          <CheckCircle2 className="text-primary" size={18} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-40 bg-slate-200 rounded-3xl animate-pulse"></div>
                        <div className="h-40 bg-slate-300 rounded-3xl animate-pulse"></div>
                        <div className="h-40 bg-slate-300 rounded-3xl animate-pulse"></div>
                        <div className="h-40 bg-slate-200 rounded-3xl animate-pulse"></div>
                     </div>
                     <p className="text-[10px] text-slate-400 mt-4 uppercase text-center font-bold tracking-widest">Construction Site Execution Visual Data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <Link to="/contact" className="btn-primary py-6 px-12 text-xl font-black tracking-widest rounded-2xl group flex items-center gap-4">
                GET ONE-POINT SUPPORT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="overflow-hidden">
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
          <p className="text-xl text-slate-400 max-w-4xl leading-relaxed">
            In the specialized field of facade engineering, we act as a dedicated technical partner for all project stakeholders, delivering specialized solutions for Developers, Architects & consultants, Main contractors, Steel & Aluminium fabricators.
          </p>
        </div>
      </section>

      {/* Audience Tabs Navigation */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-2 py-6">
            {audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-black transition-all text-xs uppercase tracking-[0.2em] min-w-[200px] border-2 ${
                  activeTab === aud.id 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-900/20' 
                  : 'text-slate-500 border-transparent hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                {aud.icon} {aud.label}
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

      {/* Trust Signals Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-4">Quality Assurance</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Technical Authority</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "LOD 400", desc: "Detailed Fabrication Modeling Standards", icon: Layers },
              { title: "BS/EN/ASTM", desc: "International Engineering Compliance", icon: Globe2 },
              { title: "PE Stamping", desc: "Professional Engineer Licensed Review", icon: Shield },
              { title: "Third-Party QC", desc: "Rigorous Multi-Stage Quality Control", icon: CheckCircle2 }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-primary transition-colors duration-500">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
            Ready to optimize your project's <br className="hidden md:block" /> Technical Lifecycle?
          </h2>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-slate-100 border-none py-6 px-16 text-xl rounded-2xl font-black uppercase tracking-widest shadow-2xl">
            Contact Our Technical Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
