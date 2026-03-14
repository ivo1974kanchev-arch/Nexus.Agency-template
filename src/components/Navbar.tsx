import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight">Nexus.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#work" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="bg-black text-white px-5 py-3 rounded-xl text-center font-medium mt-4" onClick={() => setIsOpen(false)}>
            Start a Project
          </a>
        </motion.div>
      )}
    </nav>
  );
}
