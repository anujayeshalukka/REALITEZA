import React from 'react';

const ClientSlider: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-primary/20 flex-grow" />
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary whitespace-nowrap">Global Partnerships</h2>
          <div className="h-px bg-primary/20 flex-grow" />
        </div>
        <p className="text-center text-slate-500 font-medium text-sm">Ensuring the seamless realization of complex architectural visions for the industry's leading project owners.</p>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        <div className="flex space-x-12 whitespace-nowrap animate-infinite-scroll py-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex-shrink-0 w-56 h-28 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer group">
              <span className="text-slate-300 font-black text-lg group-hover:text-primary transition-colors italic">CLIENT_{i}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 w-56 h-28 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer group">
              <span className="text-slate-300 font-black text-lg group-hover:text-primary transition-colors italic">CLIENT_{i}</span>
            </div>
          ))}
        </div>
        
        {/* Faded edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default ClientSlider;
