import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      title: 'Engineering Operations – Cochin, India',
      address: '37/1993, 8th Floor, Infftwua Building, Kakkanad, Thrikkakara, Cochin – 682021',
      email: 'info@realiteza.com',
      hours: '09:00 AM – 06:00 PM (Closed on Public Holidays)',
      phone: null,
      whatsapp: null
    },
    {
      title: 'Marketing – Europe, UK',
      address: '21 Barland Way, Aylesbury, Buckinghamshire, England, HP18 0UZ',
      email: 'info@realiteza.com',
      phone: '+44 7424 652074',
      whatsapp: '+447424652074',
      hours: null
    },
    {
      title: 'Marketing – United Arab Emirates, Dubai',
      address: 'United Arab Emirates Street 13, Melhoof 6, Flat 101, Al Warqa, Dubai',
      email: 'info@realiteza.com',
      phone: '+971 509 261691',
      whatsapp: '+971509261691',
      hours: null
    }
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
            Get In Touch
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Reach out to our global team for your building envelope engineering needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-slate-50 p-10 md:p-12 rounded-[32px] border border-slate-100">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+1 234 567 890" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Company Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Required</label>
                  <select className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                    <option>Facade Shop Drawings</option>
                    <option>BIM Modeling & Tekla</option>
                    <option>Tendering Support</option>
                    <option>Structural Calculations</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="btn-primary w-full py-5 rounded-xl text-lg flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-12">
              {offices.map((office, i) => (
                <div key={i} className="space-y-6">
                  <h3 className="text-xl font-extrabold text-slate-900 border-l-4 border-primary pl-4">{office.title}</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-4 items-start">
                      <MapPin className="text-primary shrink-0 mt-1" size={20} />
                      <span>{office.address}</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <Mail className="text-primary shrink-0 mt-1" size={20} />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">{office.email}</a>
                    </li>
                    {office.phone && (
                      <li className="flex gap-4 items-start">
                        <Phone className="text-primary shrink-0 mt-1" size={20} />
                        <span>{office.phone}</span>
                      </li>
                    )}
                    {office.hours && (
                      <li className="flex gap-4 items-start">
                        <Clock className="text-primary shrink-0 mt-1" size={20} />
                        <span>{office.hours}</span>
                      </li>
                    )}
                  </ul>
                  {office.whatsapp && (
                    <a 
                      href={`https://wa.me/${office.whatsapp.replace('+', '')}`} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
                    >
                      <MessageSquare size={18} /> Message on WhatsApp
                    </a>
                  )}
                </div>
              ))}

              <div className="h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 font-bold border-2 border-dashed border-slate-200">
                GOOGLE MAP PLACEHOLDER
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
