import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/realitezaweblogo.jpeg';
import logoScrolledImg from '../assets/realitezaweblogo.jpeg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow,border-color] duration-500 bg-white shadow-md ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoScrolledImg} alt="Realiteza Logo" className="h-10 md:h-14 w-auto object-contain transition-all duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link text-slate-700 ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 rounded-lg transition-colors text-slate-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu - Moved outside header to avoid stacking/transform issues */}
      <div 
        className={`fixed inset-0 w-full h-full bg-slate-950 z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={36} />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-3xl font-bold transition-all duration-300 ${
                location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/contact" 
            className="btn-primary mt-8 px-12 py-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
