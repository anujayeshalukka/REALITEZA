import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/realitezalogow.png';
import logoColor from '../assets/realitezalogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
    setServicesExpanded(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Determine logo to show
  const currentLogo = isOpen ? logoWhite : (isScrolled ? logoColor : (location.pathname !== '/' ? logoWhite : logoWhite));

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      subServices: [
        { name: 'Developers', path: '/services#developers' },
        { name: 'Architects & Consultants', path: '/services#architects' },
        { name: 'Main Contractors', path: '/services#contractors' },
        { name: 'Facade Fabricators', path: '/services#fabricators' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-2 shadow-sm'
            : (location.pathname !== '/'
              ? 'bg-primary py-4 border-b border-white/10 shadow-lg'
              : 'bg-transparent py-10')
          } ${isOpen ? 'bg-transparent border-transparent shadow-none' : ''}`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-[110]">
              <img
                src={currentLogo}
                alt="REALITEZA Logo"
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled || location.pathname !== '/' ? 'h-12 md:h-14' : 'h-14 md:h-16'
                  }`}
              />
            </Link>

            {/* Menu Toggle */}
            <button
              className={`relative z-[110] p-2 flex items-center group`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`transition-all duration-500 ${isOpen ? 'rotate-90' : ''}`}>
                {isOpen ? (
                  <X size={32} strokeWidth={1.5} className="text-white" />
                ) : (
                  <div className="flex flex-col gap-2.5 items-end">
                    <div className={`w-10 h-[3px] transition-colors duration-500 ${
                      isScrolled ? 'bg-slate-900' : 'bg-white'
                    }`}></div>
                    <div className={`w-7 h-[3px] transition-colors duration-500 ${
                      isScrolled ? 'bg-slate-900' : 'bg-white'
                    }`}></div>
                  </div>
                )}
              </div>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[105] bg-primary flex flex-col justify-center overflow-y-auto overflow-x-hidden pt-24 pb-12"
          >
            {/* Dedicated Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={40} strokeWidth={1} />
            </button>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
              <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10">
                {/* Navigation Items */}
                <div className="flex flex-col gap-10">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      {link.subServices ? (
                        <div className="group">
                          <button
                            onClick={() => setServicesExpanded(!servicesExpanded)}
                            className={`text-4xl md:text-5xl lg:text-6xl font-semibold transition-all duration-300 uppercase tracking-tight text-center justify-center flex items-center gap-4 ${servicesExpanded ? 'text-white' : 'text-white/80 hover:text-white'
                              }`}
                          >
                            {link.name}
                            <div className={`transition-transform duration-300 ${servicesExpanded ? 'rotate-45' : 'rotate-0'}`}>
                              <Plus size={32} strokeWidth={1.5} className="text-white/40" />
                            </div>
                          </button>

                          <AnimatePresence>
                            {servicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mt-6 flex flex-col gap-4 border-l lg:border-l-0 border-white/10 pl-6 lg:pl-0 text-center"
                              >
                                {link.subServices.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="text-lg md:text-2xl font-medium text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 group/sub"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setServicesExpanded(false);
                                    }}
                                  >
                                    <ChevronRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`text-4xl md:text-5xl lg:text-6xl font-semibold transition-all duration-300 uppercase tracking-tight text-center ${location.pathname === link.path ? 'text-white' : 'text-white/80 hover:text-white'
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
