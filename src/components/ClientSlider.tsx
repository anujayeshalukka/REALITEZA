import React from 'react';
import client1 from '../assets/clients/client (1).jpg';
import client2 from '../assets/clients/client (2).jpg';
import client3 from '../assets/clients/client (3).jpg';
import client4 from '../assets/clients/client (4).jpg';
import client5 from '../assets/clients/client (5).jpg';

const clients = [client1, client2, client3, client4, client5, client1, client2, client3];
const ClientSlider: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.4em] mb-3">
            Our Clients
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Global Partnerships
          </h3>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ensuring the seamless realization of complex architectural visions for the industry's leading project owners.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        <div className="flex space-x-10 whitespace-nowrap animate-infinite-scroll py-2 items-center">
          {clients.map((clientImg, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center px-4 py-1 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md group">
              <img src={clientImg} alt={`Client ${i + 1}`} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((clientImg, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 w-48 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center px-4 py-1 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md group">
              <img src={clientImg} alt={`Client ${i + 1}`} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
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
