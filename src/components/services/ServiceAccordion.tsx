import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface ServiceAccordionProps {
  items: AccordionItem[];
}

const ServiceAccordion = ({ items }: ServiceAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split items into two columns
  const midPoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midPoint);
  const rightItems = items.slice(midPoint);

  const renderItem = (item: AccordionItem, globalIndex: number) => (
    <div 
      key={globalIndex} 
      className={`border-b border-slate-200 transition-all duration-300 ${openIndex === globalIndex ? 'bg-slate-50/50' : ''}`}
    >
      <button
        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
        className="w-full flex items-center justify-between py-6 px-4 text-left group"
      >
        <span className={`text-md md:text-lg font-semibold uppercase tracking-tight transition-colors duration-300 ${openIndex === globalIndex ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}`}>
          {item.title}
        </span>
        <div className={`transition-transform duration-300 ${openIndex === globalIndex ? 'rotate-180' : ''}`}>
          {openIndex === globalIndex ? (
            <Minus className="text-primary" size={24} />
          ) : (
            <Plus className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {openIndex === globalIndex && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ willChange: 'height' }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-4 pb-8">
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl whitespace-pre-line">
                {item.content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 w-full items-start">
      <div className="flex flex-col">
        {leftItems.map((item, index) => renderItem(item, index))}
      </div>
      <div className="flex flex-col">
        {rightItems.map((item, index) => renderItem(item, index + midPoint))}
      </div>
    </div>
  );
};

export default ServiceAccordion;
