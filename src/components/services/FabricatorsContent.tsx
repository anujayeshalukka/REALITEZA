import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, Settings, Shield, Layers, PenTool, Cpu, Box,
  CheckCircle2, ArrowRight, ArrowUpRight
} from 'lucide-react';
import FeatureBlock from './FeatureBlock';
import fabricatorImg from '../../assets/factory-cnc.png';

// Service Images
import ucwCurtainwall from '../../assets/services/UCWCurtainwall.webp';
import acousticBarrier from '../../assets/services/acousticbarrierfencingstructuraldesignanddrawings.webp';
import alumiumMashrabiyyah from '../../assets/services/alumiummashrabiyyah.webp';
import balustradeHandrail from '../../assets/services/balustrade&handrail.webp';
import canopyTrellis from '../../assets/services/canopy&trellis.webp';
import catLadders from '../../assets/services/catladdersstructuraldesign&drawings.webp';
import doorsWindows from '../../assets/services/doors&windows.webp';
import framelessSystem from '../../assets/services/framelesssystem.webp';
import interiorSoffit from '../../assets/services/interior&soffitcladding.webp';
import louversImg from '../../assets/services/louvers.webp';
import metalStone from '../../assets/services/metal&stonecladdingsystem.webp';
import perforatedAluminium from '../../assets/services/perforatedaluminiumscreens.webp';
import purlinSteel from '../../assets/services/purlin&steeldrawingsforroof&standingseamsupport.webp';
import rainscreenFacade from '../../assets/services/rainscreenfacade&sfssystems.webp';
import roofLights from '../../assets/services/rooflights.webp';
import securityFencing from '../../assets/services/securityfencingwallstructuraldesign&drawings.webp';
import stickCurtainwall from '../../assets/services/stickcurtainwall.webp';
import superstructureStructural from '../../assets/services/superstructurestructuraldesign&drawingsforfacade.webp';

const FabricatorsContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { title: 'UCW Curtain Wall', type: 'Facade System', service: 'Unitized Curtain Wall Design', img: ucwCurtainwall },
    { title: 'Acoustic Barrier Fencing', type: 'Structural Engineering', service: 'Acoustic Barrier Fencing Structural Design & Drawings', img: acousticBarrier },
    { title: 'Aluminium Mashrabiyyah', type: 'Facade Element', service: 'Aluminium Mashrabiyyah Design', img: alumiumMashrabiyyah },
    { title: 'Balustrade & Handrail', type: 'Architectural Metal', service: 'Balustrade & Handrail Design', img: balustradeHandrail },
    { title: 'Canopy & Trellis', type: 'Structural Support', service: 'Canopy & Trellis Structural Design', img: canopyTrellis },
    { title: 'Cat Ladders', type: 'Access Systems', service: 'Cat Ladders Structural Design & Drawings', img: catLadders },
    { title: 'Doors & Windows', type: 'Fenestration', service: 'Doors & Windows Technical Design', img: doorsWindows },
    { title: 'Frameless System', type: 'Glass Engineering', service: 'Frameless System Design', img: framelessSystem },
    { title: 'Interior & Soffit Cladding', type: 'Envelope Detail', service: 'Interior & Soffit Cladding Design', img: interiorSoffit },
    { title: 'Louvers', type: 'Ventilation', service: 'Louvers Design & Engineering', img: louversImg },
    { title: 'Metal & Stone Cladding', type: 'Cladding System', service: 'Metal & Stone Cladding System Design', img: metalStone },
    { title: 'Perforated Aluminium Screens', type: 'Screening', service: 'Perforated Aluminium Screens Design', img: perforatedAluminium },
    { title: 'Purlin & Steel Drawings', type: 'Roofing Support', service: 'Purlin & Steel Drawings for Roof & Standing Seam Support', img: purlinSteel },
    { title: 'Rainscreen Facade', type: 'Facade System', service: 'Rainscreen Facade & SFS Systems Design', img: rainscreenFacade },
    { title: 'Roof Lights', type: 'Daylighting', service: 'Roof Lights Design & Engineering', img: roofLights },
    { title: 'Security Fencing Wall', type: 'Structural Design', service: 'Security Fencing Wall Structural Design & Drawings', img: securityFencing },
    { title: 'Stick Curtain Wall', type: 'Facade System', service: 'Stick Curtain Wall Design', img: stickCurtainwall },
    { title: 'Superstructure Structural Design', type: 'Facade Support', service: 'Superstructure Structural Design & Drawings for Facade', img: superstructureStructural },
  ];

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="mb-8 leading-tight">
            <span className="text-2xl md:text-4xl lg:text-5xl font-black block text-slate-900 tracking-tight uppercase leading-[1.1]">Services to Facade Fabricators</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
            "We drive factory-floor efficiency by translating approved shop drawings into exact, zero-error manufacturing data. From tender estimation to site execution, we are your technical integration hub."
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img src={fabricatorImg} alt="Fabrication Support" className="border border-slate-200 w-full object-cover aspect-video" />
        </div>
      </div>

      {/* Structural Steel Sub-section */}
      <div className="bg-slate-900 p-12 text-white relative">
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

      <div className="bg-slate-50 p-10 md:p-16 border border-slate-200">
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

      {/* Interactive Project List Section */}
      <section className="relative py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Technical Portfolio</h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl">Explore our diverse range of engineering solutions and technical documentation for facade fabricators.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Side: Scrollable List with Fade Effects */}
            <div className="relative group/scroll">
              {/* Top Fade */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none opacity-100 group-hover/scroll:opacity-50 transition-opacity" />

              <div className="h-[600px] overflow-y-auto pr-6 custom-scrollbar relative z-10 py-8">
                <div className="flex flex-col">
                  {projects.map((project, i) => (
                    <motion.button
                      key={i}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => setActiveIndex(i)}
                      className="group relative py-2 border-b border-slate-100 text-left transition-all duration-500 hover:pl-6 overflow-hidden"
                      initial={false}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex flex-col gap-1 md:gap-2">
                          <h2 className={`text-sm md:text-lg font-medium transition-all duration-500 tracking-tight ${activeIndex === i ? 'text-slate-900 scale-105 origin-left' : 'text-slate-500 group-hover:text-slate-700'}`}>
                            {project.title}
                          </h2>
                        </div>
                        <div className={`transition-all duration-500 ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          <ArrowUpRight className="text-primary w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Hover Background Effect */}
                      <div className={`hidden lg:block absolute inset-0 bg-slate-100 transition-transform duration-500 origin-left -z-0 ${activeIndex === i ? 'scale-x-100' : 'scale-x-0'}`} />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none opacity-100 group-hover/scroll:opacity-50 transition-opacity" />

              <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                  width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #f1f5f9;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #cbd5e1;
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #94a3b8;
                }
                .custom-scrollbar {
                  scrollbar-width: thin;
                  scrollbar-color: #cbd5e1 #f1f5f9;
                }
              `}} />
            </div>

            {/* Right Side: Fixed/Sticky Detail Display */}
            <div className="hidden lg:block sticky top-32 h-[600px]">
              <div className="relative h-full w-full rounded-[40px] overflow-hidden bg-slate-100 shadow-2xl group/img border border-slate-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={projects[activeIndex].img}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover/img:grayscale-0 transition-all duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-10 left-10 right-10 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-[2px] w-8 bg-primary" />
                          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">
                            {projects[activeIndex].type}
                          </span>
                        </div>
                        <h3 className="text-3xl font-black tracking-tight leading-tight">{projects[activeIndex].title}</h3>
                        <p className="text-slate-300 text-base leading-relaxed font-medium italic opacity-90">
                          "{projects[activeIndex].service}"
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <Link to="/contact" className="btn-primary py-4 px-8 text-lg font-bold">
          GET ONE-POINT SUPPORT <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default FabricatorsContent;

