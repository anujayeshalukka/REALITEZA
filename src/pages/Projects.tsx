import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ucw from '../assets/UCWCurtainwall.webp';
import stick from '../assets/stickcurtainwall.webp';
import louvers from '../assets/louvers.webp';
import skylight from '../assets/rooflights.webp';

const Projects = () => {
  const projects = [
    { title: 'Modern Office Complex', type: 'UCW Curtain Wall', service: 'Shop Drawings', img: ucw },
    { title: 'Residential Tower', type: 'Stick Curtain Wall', service: 'Fabrication', img: stick },
    { title: 'Commercial Plaza', type: 'Louver Systems', service: 'Concept Design', img: louvers },
    { title: 'Skylight Installation', type: 'Roof Lights', service: 'BIM Modeling', img: skylight },
    { title: 'Bespoke Facade Project', type: 'Custom Envelope', service: 'Full Support', img: ucw },
    { title: 'Institutional Building', type: 'Stone Cladding', service: 'Structural Analysis', img: stick },
  ];

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
            Our Portfolio
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A showcase of expert engineering support for landmark projects worldwide.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="mb-8 leading-tight">
              <span className="text-sm font-bold block mb-3 text-primary uppercase tracking-[0.4em]">Selected Works</span>
              <span className="text-3xl md:text-5xl font-black block text-slate-900 tracking-tight">Project Portfolio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{project.type}</p>
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Service: {project.service}</span>
                    <button className="text-primary hover:text-slate-900 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-slate-500 mb-6 italic">More projects are being added to our portfolio. Stay tuned.</p>
            <button className="btn-secondary">Request Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
