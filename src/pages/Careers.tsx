import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Careers = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-12 lg:pt-48 lg:pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Careers
          </motion.h1>
        </div>
      </section>

      {/* Recruitment Portal Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
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
                Realiteza is always looking for exceptional experts to join our global team.
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
