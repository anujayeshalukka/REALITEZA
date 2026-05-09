import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';
import project4 from '../assets/projects/project4.jpg';
import project5 from '../assets/projects/project5.jpg';
import project6 from '../assets/projects/project6.jpg';
import project7 from '../assets/projects/project7.jpg';
import project8 from '../assets/projects/project8.jpg';
import project9 from '../assets/projects/project9.jpg';
import project10 from '../assets/projects/project10.jpg';
import project11 from '../assets/projects/project11.jpg';
import project12 from '../assets/projects/project12.jpg';

const Projects = () => {
  const projectsData = [
    { id: 1, title: 'Baylor College of Medicine', location: 'USA', year: '2023', img: project1 },
    { id: 2, title: 'Andaz hotel', location: 'Doha', year: 'On going', img: project2 },
    { id: 3, title: 'Sama Beirut', location: 'Beirut', year: '2016', img: project3 },
    { id: 4, title: 'Purva Atmosphere', location: 'Bangalore', year: 'On going', img: project4 },
    { id: 5, title: 'Kaleidoscope', location: 'Abu Dhabi', year: '2013', img: project5 },
    { id: 6, title: 'Jannah Burj Al Sarab', location: 'Abu Dhabi', year: '2013', img: project6 },
    { id: 7, title: 'PLOT B02: CO-LAB 01 & Associated road access', location: 'Masdar Abu Dhabi', year: '2024', img: project7 },
    { id: 8, title: 'B+G+1+R Residential villa at al Furjan', location: 'DUBAI, UAE', year: '2024', img: project8 },
    { id: 9, title: 'Chic Tower', location: 'Dubai', year: '2025', img: project9 },
    { id: 10, title: 'Elegance Tower', location: 'Dubai', year: '2025', img: project10 },
    { id: 11, title: 'Proposed 2b+g+3p+38+r Residential Tower', location: 'Dubai', year: '2025', img: project11 },
    { id: 12, title: 'SINDALAH VILLAGE', location: 'NEOM, KSA', year: '2024', img: project12 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsData.length);
    }, 1500); // Cycle every 2 seconds
    return () => clearInterval(timer);
  }, [projectsData.length]);

  return (
    <div className="bg-white min-h-screen">
      
      <section className="bg-primary pt-48 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>

        </div>
      </section>

      {/* Full View Project Showcase - No Cropping */}
      <section className="bg-gray-100 py-12 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col">
            {/* Image Container - Flexible to prevent cropping */}
            <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-50 rounded-t-3xl overflow-hidden">
              <img 
                key={activeIndex}
                src={projectsData[activeIndex].img} 
                alt={projectsData[activeIndex].title} 
                className="max-w-full max-h-full object-contain p-4 md:p-8"
              />
            </div>

            {/* Info Bar - Positioned just below the image */}
            <div className="bg-primary py-6 px-8 md:px-12 rounded-b-3xl text-white shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">Project Title</span>
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight">{projectsData[activeIndex].title}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">Location</span>
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight">{projectsData[activeIndex].location}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">Year</span>
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight">{projectsData[activeIndex].year}</span>
                  </div>
                </div>
                <div className="text-xs font-black text-white/60">
                  {activeIndex + 1} / {projectsData.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Looking for a specialized <br />
              <span className="text-primary">technical engineering partner?</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 font-medium">
              We provide zero-error drawings and high-fidelity BIM models for complex facade systems across the globe.
            </p>

             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="btn-primary">
                 Start Your Project Consultation <ArrowRight size={22} />
              </Link>
            </motion.div>  



            {/* <button className="bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Start Your Project Consultation
            </button> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

