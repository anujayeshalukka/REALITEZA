import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Building, Globe2, Shield } from 'lucide-react';
import ClientSlider from '../components/ClientSlider';

const About = () => {
  const team = [
    { role: 'Projects & Commercial Operations Manager', icon: <Users size={24} /> },
    { role: 'Technical Manager', icon: < Award size={24} /> },
    { role: 'Project Leader', icon: <Award size={24} /> },
    { role: '2D Designers', icon: <Users size={24} /> },
    { role: '3D Experts – Tekla, BIM Modeling', icon: <Target size={24} /> },
    { role: 'Accounts & Admin', icon: <Users size={24} /> },
  ];

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
              <h2 className="text-3xl font-bold text-slate-900">Company Overview</h2>
              <div className="w-20 h-1.5 bg-primary" />
              <p className="text-lg text-slate-600 leading-relaxed">
                REALITEZA was founded with the desire to provide complete engineering services for building envelope system scopes instead of focusing on only one element. We support fabrication companies, architects, and contractors with remote-efficient engineering back-office services.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our founders decided to begin REALITEZA to offer entire engineering services for a project's envelope system related scope instead of a specific element like only the alum & glazing façade. This ensures less effort for our clients who take over the entire envelope scope of a building.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center p-12 border border-slate-200">
              <div className="text-center space-y-4">
                <p className="text-primary font-bold text-sm uppercase tracking-widest">Established Strategy</p>
                <h3 className="text-2xl font-bold text-slate-800">Remote-Efficient Engineering Back-Office</h3>
                <p className="text-slate-500">Supporting global clients from our engineering hub.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex gap-8 items-start"
            >
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  "To be the leader and our clients' most preferable choice in providing engineering design service."
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex gap-8 items-start"
            >
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Eye size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  "We are committed to maintaining high-quality drawing standards and high-end engineered building envelope solutions."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Team Structure</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
            A specialized hierarchy designed for quality assurance and efficient project delivery.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50 text-left"
              >
                <div className="text-primary mb-4">{member.icon}</div>
                <h4 className="font-bold text-slate-800">{member.role}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Intro Stats - Light Beautified */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                label: 'Global Partners', 
                value: '50+', 
                icon: <Building size={32} />,
                sub: 'Trusted Collaborations'
              },
              { 
                label: 'Projects Delivered', 
                value: '100+', 
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
                value: '10+', 
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

      <ClientSlider />
    </div>
  );
};

export default About;
