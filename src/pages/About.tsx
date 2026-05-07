import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Building, Globe2, Shield, PenTool, HardHat, Briefcase} from 'lucide-react';
import ClientSlider from '../components/ClientSlider';
import aboutImg from '../assets/aboutrealiteza.png';
const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Realizing design intent through expert engineering and dedicated support.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="mb-8 leading-tight">
                <span className="text-sm font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Establishment</span>
                <span className="text-3xl md:text-5xl font-black block text-slate-900 tracking-tight">Company Overview</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                REALITEZA (Limitted) incorporated with the desire to offer an incomparable service in our industry. As part of our vision, aiming to be known as a reputed firm offering Building Envelope Engineering Service across the world remotely-efficiently, we engaged to leverage the remote design support/engineering back office for fabrication companies and architects.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The founders decided to begin the REALITEZA for offering entire engineering service for a Project’s envelop system related scope instead of a specific element like (only) the alum & glazing façade. The entire process is led by enthusiastic and enterprising highly experienced façade experts. This ensures less effort for our clients who take over the entire envelope scope of a building and outsource the design & engineering part ranging from concept to as built stage.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img src={aboutImg} alt="Realiteza Company Overview" className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-1 text-primary-light">Established Strategy</p>
                <h3 className="text-xl font-bold">Remote-Efficient Engineering</h3>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 "
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              We work hand in hand with our clients for producing the design & engineering submissions of various trade / disciplines in the contract like all kind of Aluminium & glazing façades and bespoke systems, Stone and metal cladding facades, Temporary wall, rainscreen & SFS system, Steel Roofing structure and roof cladding designs, and all types of stainless steel and metal works scenarios and canopies.
            </p>
          </motion.div>
        </div>
      </section>



 {/* Intro Stats - Light Beautified */}
      <section className="pb-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: 'Global Partners',
                value: '20+',
                icon: <Building size={32} />,
                sub: 'Trusted Collaborations'
              },
              {
                label: 'Projects Delivered',
                value: '50+',
                icon: <Users size={32} />,
                sub: 'Engineering Success'
              },
              {
                label: 'Countries Reached',
                value: '15+',
                icon: <Globe2 size={32} />,
                sub: 'Global Footprint'
              },
              {
                label: 'Years of Excellence',
                value: '5+',
                icon: <Shield size={32} />,
                sub: 'Industry Expertise'
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group p-10 rounded-[40px] border border-slate-200 bg-slate-50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-8 p-5 rounded-2xl bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-black text-slate-900 mb-3 tracking-tight">{stat.value}</h3>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">{stat.label}</p>
                  <p className="text-slate-500 text-sm font-medium">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Mission & Vision - Refined */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/5 flex-shrink-0">
                  <Target size={32} />
                </div>
                <h2 className="leading-tight">
                  <span className="text-sm font-bold block mb-1 text-blue-200 uppercase tracking-[0.4em]">Strategic Path</span>
                  <span className="text-3xl md:text-5xl font-black block text-white tracking-tight">Our Mission</span>
                </h2>
              </div>
              <p className="text-xl leading-relaxed text-blue-50 font-medium italic">
                "To be the leader and our clients' most preferable choice in providing engineering design service."
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/5 flex-shrink-0">
                  <Eye size={32} />
                </div>
                <h2 className="leading-tight">
                  <span className="text-sm font-bold block mb-1 text-blue-200 uppercase tracking-[0.4em]">Core Values</span>
                  <span className="text-3xl md:text-4xl font-black block text-white tracking-tight">Our Vision</span>
                </h2>
              </div>
              <p className="text-xl leading-relaxed text-blue-50 font-medium italic">
                "We are committed to maintaining high-quality drawing standards and high-end engineered building envelope solutions."
              </p>
            </motion.div>
          </div>
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
     

      <ClientSlider />
    </div>
  );
};

export default About;
