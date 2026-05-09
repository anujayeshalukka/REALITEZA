import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceAccordion from './ServiceAccordion';
import devImg from '../../assets/developers.jpg';

const DevelopersContent = () => {
  const developersServices = [
    {
      title: "Technical Design Audits",
      content: "Identifying engineering bottlenecks and structural risks before the tender stage to prevent costly on-site change orders."
    },
    {
      title: "Value Engineering",
      content: "Optimizing material specifications and system profiles to reduce capital expenditure without compromising the architectural intent."
    },
    {
      title: "Tender Evaluation",
      content: "Providing unbiased, data-driven analysis of contractor bids to ensure technical compliance and fair pricing."
    },
    {
      title: "Performance Verification",
      content: "Validating the thermal, acoustic, and wind-load capacities of proposed facade systems."
    }
  ];

  return (
    <div className="sm:space-y-16 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-center">
        <div className="space-y-8">
          <h2 className="mb-8 leading-tight">
            <span className="text-2xl md:text-4xl lg:text-5xl font-black block text-slate-900 tracking-tight">Services to Developers</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium border-l-4 border-primary pl-6">
            "We safeguard your investment by ensuring architectural visions translate into structurally sound, cost-effective realities. We provide critical engineering oversight to mitigate risks, optimize budgets, and guarantee long-term asset performance."
          </p>
        </div>
        <div className="relative">
          <img src={devImg} alt="Commercial Development" className="border border-slate-200 w-full object-cover aspect-video lg:aspect-auto lg:h-[400px]" />
          {/* <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 border border-white/10 hidden md:block">
            <p className="text-3xl font-black text-primary mb-1">ROI</p>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Optimized Budgeting</p>
          </div> */}
        </div>
      </div>

      <div>
        <ServiceAccordion items={developersServices} />
      </div>

      <div className="flex justify-center ">
        <Link to="/contact" className="btn-primary text-md font-bold">
          Engage Engineering Oversight<ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default DevelopersContent;
