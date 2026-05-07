import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import logoImg from '../assets/realitezalogow.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="Realiteza Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              REALITEZA provides specialized design and engineering support for building envelope systems, façade detailing, BIM modeling, and structural design support globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors">Clients</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">Facade Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">BIM Modeling</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Fabrication Drawings</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Structural Analysis</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <Mail size={18} className="text-primary" />
                </div>
                <a href="mailto:contact@realiteza.com" className="hover:text-white transition-colors">contact@realiteza.com</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <Phone size={18} className="text-primary" />
                </div>
                <a href="tel:+919447460468" className="hover:text-white transition-colors">+91 9447460468</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm">Kakkanad, Cochin, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} REALITEZA Building Envelope Engineering Service – All Rights Reserved.</p>
          <p>Developer: REALITEZA BEES PVT LTD, Cochin, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
