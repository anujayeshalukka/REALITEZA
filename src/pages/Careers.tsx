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
            Join Our Growing Team
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Help us redefine the building envelope industry through expert engineering.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[40px] border border-slate-100 bg-slate-50 shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                <Briefcase size={32} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Facade Structural Engineer
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Our firm is in need of experienced structural engineers who wish to be part our growing team. 
              </p>

              <div className="inline-flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-sm">
                  <Mail size={18} /> Get In Touch
                </div>
                <p className="text-slate-500 text-sm">You may please reach out to us on:</p>
                <a 
                  href="mailto:info@realiteza.com" 
                  className="text-2xl md:text-3xl font-black text-slate-900 hover:text-primary transition-colors duration-300"
                >
                  info@realiteza.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
