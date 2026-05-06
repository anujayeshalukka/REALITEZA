import { motion } from 'framer-motion';
import { Mail, Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
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
            Join Our Team
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Join a forward-thinking firm redefining the building envelope industry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-4">
              <Briefcase className="text-primary" /> Current Openings
            </h2>
            
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 mb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Engineering</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Full Time</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Facade Structural Engineer</h3>
                  <div className="flex flex-wrap gap-6 text-slate-500 font-medium">
                    <div className="flex items-center gap-2"><MapPin size={18} /> Cochin, India / Remote</div>
                    <div className="flex items-center gap-2"><Clock size={18} /> Immediate Joiner</div>
                  </div>
                </div>
                <button className="btn-primary">Apply Now <ArrowRight className="ml-2" size={18} /></button>
              </div>
              <div className="mt-10 pt-10 border-t border-slate-200">
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our firm is looking for experienced structural engineers who wish to be part of our growing team. Candidates should have a strong background in building envelope structural analysis and facade detailing.
                </p>
                <div className="flex items-center gap-3 text-slate-900 font-bold">
                  <Mail className="text-primary" /> 
                  <span>Interested? Send your resume to <a href="mailto:info@realiteza.com" className="text-primary hover:underline">info@realiteza.com</a></span>
                </div>
              </div>
            </motion.div>

            <div className="bg-slate-900 p-12 rounded-[32px] text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Don't see a matching role?</h3>
              <p className="text-slate-400 mb-8">We are always looking for talented designers, 3D experts, and project leaders. Send us your portfolio and CV for future considerations.</p>
              <a href="mailto:info@realiteza.com" className="btn-primary bg-white text-slate-900 hover:bg-slate-200 border-none px-12 py-4">
                General Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
