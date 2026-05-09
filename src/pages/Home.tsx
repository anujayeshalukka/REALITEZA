import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoabout from '../assets/aboutrealiteza.png';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Vimeo Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/887301734?h=3e6a7509d0&background=1&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0&dnt=1"
            className="absolute top-1/2 left-1/2 min-w-[177.77vh] min-h-screen w-[100vw] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Blueish Multiply Overlay */}
          <div className="absolute inset-0 bg-[#47689D]/30 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-15 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto px-6 py-6 md:p-8"
          >
            <h1 className="mb-2 sm:mb-4 leading-[1.5]">
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold block text-white tracking-tight">
                The Building Skin Detailer<br />
                <span className='text-[10px] md:text-xl font-medium block mb-2 mt-2 text-white uppercase tracking-[0.2em]'>Literally,
                  <span className='font-extrabold  '>Realiteza</span> realizes
                  Your design intent.</span>
              </span>
            </h1>

            {/* Contact Info Row */}
            {/* <div className="flex flex-col md:flex-row items-end md:items-center justify-end gap-3 md:gap-6 text-white/90 text-sm md:text-base font-medium mt-2 sm:mt-4">
              <a href="mailto:contact@realiteza.com" className="flex items-center gap-3 hover:text-primary transition-all group">
                <div className="p-2 bg-white/10 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="group-hover:translate-x-0.5 transition-transform">contact@realiteza.com</span>
              </a>
              <div className="hidden md:block w-px h-4 bg-white/50" />
              <a href="tel:+919447460468" className="flex items-center gap-3 hover:text-primary transition-all group">
                <div className="p-2 bg-white/10 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="group-hover:translate-x-0.5 transition-transform">+91 9447460468</span>
              </a>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Centered Heading */}
          {/* <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 leading-tight"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold block text-slate-900 tracking-tight">
                About Realiteza
              </span>
            </motion.h2>
          </div> */}

          {/* 2-Column Content Below */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-16 items-center max-w-6xl mx-auto">
            {/* Logo Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img src={logoabout} alt="Realiteza Logo" className="h-24 md:h-32 w-auto object-contain" />
            </motion.div>

            {/* Content Column */}
            <div className="lg:col-span-2 text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className=" text-lg font-medium leading-relaxed text-slate-700"
              >
                REALITEZA Building Envelope Engineering Services provides specialized design and engineering support for building envelope systems, façade detailing, BIM modeling, fabrication drawings, and structural design support for clients across the world.
              </motion.p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Services Preview - Beautified */}
      <section className="py-16 md:py-28 bg-slate-100 relative overflow-hidden">
        {/* Subtle background text for architectural feel */}
        {/* <div className="absolute -bottom-20 -right-20 text-[250px] font-black text-slate-100/50 select-none pointer-events-none z-0 tracking-tighter">
          REALITEZA
        </div> */}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end sm:mb-20 mb-10 gap-8 lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="sm:mb-6 mb-4 leading-tight">
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold block text-slate-900 tracking-tight">
                  Featured Services
                </span>
              </h2>
              <p className="text-slate-500 text-lg font-medium">
                Comprehensive engineering support for the building skin, from conceptual design to final fabrication drawings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="btn-primary">
                View All Services <ArrowRight size={22} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Developers',
                desc: 'Engineering Oversight',
                longDesc: 'Safeguarding investments through technical design audits and value engineering oversight.',

              },
              {
                title: 'Architects',
                desc: 'Concept & BIM Detail',
                longDesc: 'Translating complex design intent into high-fidelity BIM models and schematic proposals.',

              },
              {
                title: 'Contractors',
                desc: 'Shop & As-Built Support',
                longDesc: 'Delivering zero-error shop drawings and comprehensive as-built documentation.',

              },
              {
                title: 'Fabricators',
                desc: 'CNC & Manufacturing Data',
                longDesc: 'Providing precision CNC extraction data and fabrication-ready shop drawings.',

              }
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 border border-slate-200 hover:border-primary transition-all duration-300"
              >
                <div className="flex flex-col gap-6">

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600  leading-relaxed my-6">
                  {service.longDesc}
                </p>

                <Link to="/services" className="btn-primary text-xs">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-16 md:py-28 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center sm:mb-20 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:mb-6 mb-4 leading-tight"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold block text-slate-900 tracking-tight">
                Why Choose Realiteza
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={28} />, title: 'Premium Standards', text: 'We maintain high-quality drawing standards and high-end engineered solutions.' },
              { icon: <Zap size={28} />, title: 'Efficiency', text: 'Remote-efficient engineering back-office services that save time and costs.' },
              { icon: <Globe size={28} />, title: 'Global Reach', text: 'Supporting fabrication companies, architects, and contractors across the world.' }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                className="bg-white sm:p-10 px-6 py-4 border border-slate-200 transition-all"
              >
                <div className="flex items-center gap-4 sm:mb-6 mb-4">
                  <div className="text-primary flex-shrink-0 p-3 bg-primary/5 rounded-xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* CTA Section - Beautified with Background */}
      <section className="relative py-16 md:py-28 bg-primary overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black sm:mb-10 mb-6 leading-tight tracking-tight text-slate-900">
              Ready to elevate your <br />
              <span className="text-white/80">Next engineering project?</span>
            </h2>
            <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Our technical experts are ready to translate your architectural vision into buildable, high-performance reality.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn-white text-lg">
                Let's Discuss Your Requirements <ArrowRight size={22} />
              </Link>
            </motion.div>


            
          </motion.div>
        </div>
      </section>





    </div>
  );
};

export default Home;
