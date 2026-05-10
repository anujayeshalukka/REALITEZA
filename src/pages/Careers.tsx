import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Careers = () => {
  return (
    <div>
      {/* Recruitment Portal Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-12"
          >
            Careers
          </motion.h1>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className=" rounded-[3rem] "
            >
              
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Join Our Team
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                REALITEZA is always looking for exceptional experts to join our global team.
              </p>

              <div className="pt-5 ">
                <p className="text-[12px] font-bold text-slate-800 uppercase tracking-[0.3em] mb-4">
                  Submit your CV & Portfolio for Consideration
                </p>
                <a 
                  href="mailto:contact@realiteza.com" 
                  className="text-2xl md:text-4xl font-black text-primary hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-4 group"
                >
                  <Mail size={32} className="text-primary group-hover:scale-110 transition-transform" />
                  contact@realiteza.com
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
