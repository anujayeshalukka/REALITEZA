import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Building2, PenTool, HardHat, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
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

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 leading-tight">
              <span className="text-lg md:text-2xl font-medium block mb-3 text-slate-300 uppercase tracking-widest">Expert Building Envelope</span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold block text-white">Engineering Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-200">
              Innovative engineering services for sustainable building envelopes.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary py-4 px-10 text-lg">
                Get a Free Quote <ArrowRight className="ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary py-4 px-10 text-lg bg-white/10 text-white border-white/30 hover:bg-white/20">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800"
            >
              REALITEZA Building Envelope Engineering Services provides specialized design and engineering support for building envelope systems, façade detailing, BIM modeling, fabrication drawings, and structural design support for clients across the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Realiteza</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield />, title: 'Premium Standards', text: 'We maintain high-quality drawing standards and high-end engineered solutions.' },
              { icon: <Zap />, title: 'Efficiency', text: 'Remote-efficient engineering back-office services that save time and costs.' },
              { icon: <Globe />, title: 'Global Reach', text: 'Supporting fabrication companies, architects, and contractors across the world.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 transition-all"
              >
                <div className="text-primary mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview - Beautified */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background text for architectural feel */}
        <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-slate-50 select-none pointer-events-none z-0">
          ENGINEERING
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Specialized Expertise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight"
              >
                Core Services Preview
              </motion.h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Comprehensive engineering support from tendering to as-built stage, tailored for all project stakeholders.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all duration-300 shadow-xl shadow-slate-200">
                View All Services
                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'For Developers',
                desc: 'Engineering Oversight',
                longDesc: 'Safeguarding investments through technical design audits and value engineering oversight.',
                icon: <Building2 size={32} />,
                num: '01'
              },
              {
                title: 'For Architects',
                desc: 'Concept & BIM Detail',
                longDesc: 'Translating complex design intent into high-fidelity BIM models and schematic proposals.',
                icon: <PenTool size={32} />,
                num: '02'
              },
              {
                title: 'For Contractors',
                desc: 'Shop & As-Built Support',
                longDesc: 'Delivering zero-error shop drawings and comprehensive as-built documentation.',
                icon: <HardHat size={32} />,
                num: '03'
              },
              {
                title: 'For Fabricators',
                desc: 'CNC & Manufacturing Data',
                longDesc: 'Providing precision CNC extraction data and fabrication-ready shop drawings.',
                icon: <Factory size={32} />,
                num: '04'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="absolute top-8 right-10 text-5xl font-black text-slate-50 group-hover:text-primary/5 transition-colors duration-500">
                  {service.num}
                </div>

                <div className="mb-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  {service.desc}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.longDesc}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Explore <ArrowRight size={14} />
                </div>

                <div className="absolute bottom-0 left-10 right-10 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed text-blue-100">
                "To be the leader and our clients' most preferable choice in providing engineering design service."
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed text-blue-100">
                "We are committed to maintaining high-quality drawing standards and high-end engineered building envelope solutions."
              </p>
            </div>
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
    </div>
  );
};

export default Home;
