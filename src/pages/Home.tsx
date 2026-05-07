import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Building2, PenTool, HardHat, Factory, Mail, Phone, Target, Users, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoabout from '../assets/aboutrealiteza.png';
import homeConstruction from '../assets/home-construction.jpg';

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

        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-15 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto px-6 py-6 md:p-8"
          >
            <h1 className="mb-2 sm:mb-4 leading-[1.5]">
              <span className="text-3xl md:text-5xl lg:text-7xl font-bold block text-white tracking-tight">
                The Building Skin Detailer<br/>
               <span className='text-[10px] md:text-xl font-medium block mb-2 mt-2 text-white uppercase tracking-[0.2em]'>Literally, 
                 <span className='font-extrabold text-primary '>Realiteza</span> realizes 
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 leading-tight"
            >
              <span className="text-sm md:text-base font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Who We Are</span>
              <span className="text-3xl md:text-5xl font-black block text-slate-900 tracking-tight">
                Global Technical Authority in <br/>
                Façade Engineering
              </span>
            </motion.h2>
          </div>

          {/* 2-Column Content Below */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center max-w-6xl mx-auto">
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
                className="text-xl md:text-2xl font-medium leading-relaxed text-slate-700"
              >
                REALITEZA Building Envelope Engineering Services provides specialized design and engineering support for building envelope systems, façade detailing, BIM modeling, fabrication drawings, and structural design support for clients across the world.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 leading-tight"
            >
              <span className="text-sm md:text-base font-bold block mb-3 text-primary uppercase tracking-[0.4em]">The Realiteza Advantage</span>
              <span className="text-3xl md:text-5xl font-black block text-slate-900 tracking-tight">
                Why Choose Realiteza
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={28} />, title: 'Premium Standards', text: 'We maintain high-quality drawing standards and high-end engineered solutions.' },
              { icon: <Zap size={28} />, title: 'Efficiency', text: 'Remote-efficient engineering back-office services that save time and costs.' },
              { icon: <Globe size={28} />, title: 'Global Reach', text: 'Supporting fabrication companies, architects, and contractors across the world.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary flex-shrink-0 p-3 bg-primary/5 rounded-xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview - Beautified */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background text for architectural feel */}
        {/* <div className="absolute -bottom-20 -right-20 text-[250px] font-black text-slate-100/50 select-none pointer-events-none z-0 tracking-tighter">
          REALITEZA
        </div> */}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="mb-6 leading-tight">
                <span className="text-sm md:text-base font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Our Expertise</span>
                <span className="text-3xl md:text-5xl font-black block text-slate-900 tracking-tight">
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
              <Link to="/services" className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-slate-200">
                View All Services
                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Developers',
                desc: 'Engineering Oversight',
                longDesc: 'Safeguarding investments through technical design audits and value engineering oversight.',
                icon: <Building2 size={32} />,
                
              },
              {
                title: 'Architects',
                desc: 'Concept & BIM Detail',
                longDesc: 'Translating complex design intent into high-fidelity BIM models and schematic proposals.',
                icon: <PenTool size={32} />,
                
              },
              {
                title: 'Contractors',
                desc: 'Shop & As-Built Support',
                longDesc: 'Delivering zero-error shop drawings and comprehensive as-built documentation.',
                icon: <HardHat size={32} />,
               
              },
              {
                title: 'Fabricators',
                desc: 'CNC & Manufacturing Data',
                longDesc: 'Providing precision CNC extraction data and fabrication-ready shop drawings.',
                icon: <Factory size={32} />,
                
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group relative bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* <div className="absolute top-8 right-10 text-5xl font-black text-slate-50 group-hover:text-primary/5 transition-colors duration-500">
                  {service.num}
                </div> */}

                <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <p className="text-slate-500 text-md leading-relaxed mb-8">
                  {service.longDesc}
                </p>

                <Link to="/services" className="flex items-center gap-2 text-slate-400 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-all duration-500">
                  Explore <ArrowRight size={14} />
                </Link>

                <div className="absolute bottom-0 left-10 right-10 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section - Beautified with Background */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={homeConstruction}
            alt="Realiteza Construction Engineering"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight">
              Ready to elevate your <br />
              <span className="text-primary ">Next engineering project?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Our technical experts are ready to translate your architectural vision into buildable, high-performance reality.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-white py-5 px-14 rounded-full text-lg font-black hover:bg-white hover:text-primary transition-all duration-500 shadow-[0_0_40px_rgba(43,89,195,0.3)]">
              Let's Discuss Your Requirements <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>


<section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.4em] mb-3"
            >
              Our Experts
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
            >
              The Engineering Team
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              A specialized hierarchy designed for quality assurance and efficient project delivery.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { role: 'Projects & Commercial operations Manager', icon: <Briefcase size={24} /> },
              { role: 'Technical Manager', icon: <Award size={24} /> },
              { role: 'Project Leader', icon: <Target size={24} /> },
              { role: '2D Designers', icon: <PenTool size={24} /> },
              { role: '3D experts-Tekla, BIM modeling & Fabrication documents.', icon: <HardHat size={24} /> },
              { role: 'Accounts & Admin', icon: <Users size={24} /> },
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 flex items-center gap-4 text-left"
              >
                <div className="w-12 h-12 shrink-0 bg-slate-50 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {member.icon}
                </div>
                <h4 className="text-base font-bold text-slate-800 leading-snug">
                  {member.role}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
