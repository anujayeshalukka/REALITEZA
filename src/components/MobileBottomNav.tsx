import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Users, Info, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileBottomNav: React.FC = () => {
  const navItems = [
    { to: '/', icon: <Home size={18} />, label: 'Home' },
    { to: '/services', icon: <Briefcase size={18} />, label: 'Services' },
    { to: '/clients', icon: <Users size={18} />, label: 'Clients' },
    { to: '/about', icon: <Info size={18} />, label: 'About' },
    { to: '/contact', icon: <MessageSquare size={18} />, label: 'Contact' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
      {/* Glassmorphism Container */}
      <div className="mx-3 mb-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] px-2 py-2 flex justify-around items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => 
              `relative flex flex-col items-center gap-1 flex-1 transition-all duration-300 ${
                isActive ? 'text-primary' : 'text-slate-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-2 w-8 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className={`p-1 transition-transform duration-300 ${isActive ? 'text-slate-900 scale-110' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
