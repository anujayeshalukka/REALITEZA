import React from 'react';
import client1 from '../assets/clients/client (1).jpg';
import client2 from '../assets/clients/client (2).jpg';
import client3 from '../assets/clients/client (3).jpg';
import client4 from '../assets/clients/client (4).jpg';
import client5 from '../assets/clients/client (5).jpg';

const clients = [client1, client2, client3, client4, client5];
const ClientSlider: React.FC = () => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl uppercase font-bold text-slate-900 tracking-tight">
              Our Clients
            </h2>
          </div>

          {/* Right Column: Logo Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200 overflow-hidden">
              {clients.map((clientImg, i) => (
                <div key={i} className="bg-white aspect-[3/2] flex items-center justify-center p-3 group hover:bg-slate-50 transition-colors duration-500">
                  <img
                    src={clientImg}
                    alt={`Client ${i + 1}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
