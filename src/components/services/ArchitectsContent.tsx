import { Link } from 'react-router-dom';
import { PenTool, Settings, Shield, Layers, ArrowRight } from 'lucide-react';
import FeatureBlock from './FeatureBlock';
import archImg from '../../assets/architect.jpg';

const ArchitectsContent = () => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="mb-8 leading-tight">
            <span className="text-2xl md:text-4xl lg:text-5xl font-black block text-slate-900 tracking-tight uppercase leading-[1.1]">Services to Architects & Consultants</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
            "We serve as the technical bridge between your architectural vision and structural reality. By integrating with your team early in the design phase, REALITEZA provides the specialized engineering and visual data required to ensure your concepts are buildable, compliant, and cost-effective."
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img src={archImg} alt="BIM Modeling" className="border border-slate-200 w-full object-cover aspect-video lg:aspect-auto lg:h-[450px]" />
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
        <Link to="/contact" className="btn-primary py-4 px-8 text-lg font-bold">
          REQUEST A SCHEMATIC PROPOSAL <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ArchitectsContent;
