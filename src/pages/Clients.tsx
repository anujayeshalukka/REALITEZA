import { motion } from 'framer-motion';
import { Quote, HardHat, Factory, Building2, PenTool } from 'lucide-react';
import ClientSlider from '../components/ClientSlider';
import EndClientSlider from '../components/EndClientSlider';

const Clients = () => {
  return (
    <div>
      <section className="bg-slate-900 pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our Clients
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-4xl leading-relaxed">
            Success in façade engineering is built on integrated partnerships. We provide dedicated engineering support to premier Developers, Architects, Contractors, and Fabricators.
          </p>
        </div>
      </section>

<EndClientSlider />

      {/* Industries Served */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 leading-tight"
            >
              <span className="text-sm md:text-base font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Targeted Expertise</span>
              <span className="text-3xl md:text-5xl font-black block text-slate-900 tracking-tight">
                Industries We Serve
              </span>
            </motion.h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              We specialize in the complex intersection of architectural design and buildable structural reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                industry: 'Developers',
                icon: <HardHat className="text-primary" size={32} />,
                description: 'Safeguarding investments through technical audits, third-party reviews, and value engineering.'
              },
              {
                industry: 'Architects',
                icon: <PenTool className="text-primary" size={32} />,
                description: 'Translating design intent into technical schematic proposals and buildable facade details.'
              },
              {
                industry: 'Fabrication Units',
                icon: <Factory className="text-primary" size={32} />,
                description: 'Providing precise CNC extraction data and zero-error cutting/drilling fabrication tickets.'
              },
              {
                industry: 'Main Contractors',
                icon: <Building2 className="text-primary" size={32} />,
                description: 'Technical audits, interface management, and as-built documentation for site execution.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center group"
              >
                <div className="mb-8 p-6 bg-slate-50 rounded-2xl group-hover:bg-primary/10 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.industry}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 p-16 rounded-[40px] relative overflow-hidden">
              <Quote className="absolute top-12 left-12 text-primary/10" size={120} />
              <div className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl font-medium italic text-slate-800 mb-10 leading-relaxed">
                  "Realiteza has consistently delivered high-quality shop drawings and BIM models for our complex facade projects. Their remote engineering support feels like an extension of our own team."
                </p>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">Director of Operations</h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">Leading Façade Contractor, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ClientSlider />
      
    </div>
  );
};

export default Clients;
