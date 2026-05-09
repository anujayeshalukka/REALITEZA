import { Link } from 'react-router-dom';
import { Target, CheckCircle2, Layers, Calculator, Shield, ArrowRight } from 'lucide-react';
import FeatureBlock from './FeatureBlock';
import contractorImg from '../../assets/contractors2.jpg';

const ContractorsContent = () => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="mb-8 leading-tight">
            <span className="text-2xl md:text-4xl lg:text-5xl font-black block text-slate-900 tracking-tight uppercase">Services to Main Contractors</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary pl-6">
            "As your dedicated facade engineering partner, we protect your critical path by managing the highest-risk structural and envelope packages on your project. We provide comprehensive end-to-end technical oversight, ensuring seamless coordination."
          </p>
        </div>
        <div>
          <img src={contractorImg} alt="Site Execution" className="border border-slate-200 w-full object-cover aspect-video" />
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
        <Link to="/contact" className="btn-primary py-4 px-8 text-lg font-bold">
          HIRE YOUR FACADE SUPPORT <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ContractorsContent;
