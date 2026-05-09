import React from 'react';
import endClient1 from '../assets/clients/endclients (1).jpg';
import endClient2 from '../assets/clients/endclients (2).jpg';
import endClient3 from '../assets/clients/endclients (3).jpg';
import endClient4 from '../assets/clients/endclients (4).jpg';
import endClient5 from '../assets/clients/endclients (5).jpg';
import endClient6 from '../assets/clients/endclients (6).jpg';

import endClient8 from '../assets/clients/endclients (8).jpg';
import endClient9 from '../assets/clients/endclients (9).jpg';

const endClients = [endClient1, endClient2, endClient3, endClient4, endClient5, endClient6, endClient8, endClient9];

const EndClientSlider: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            End Clients & Associated Projects
          </h2>
          
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        {/* Note: we adjust animation duration based on having 9 items to maintain a nice speed */}
        <div className="flex space-x-10 whitespace-nowrap animate-infinite-scroll py-2 items-center" style={{ animationDuration: '45s' }}>
          {endClients.map((clientImg, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center px-4 py-1 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md group">
              <img src={clientImg} alt={`End Client ${i + 1}`} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {endClients.map((clientImg, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 w-48 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center px-4 py-1 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md group">
              <img src={clientImg} alt={`End Client ${i + 1}`} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
        
        {/* Faded edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default EndClientSlider;
