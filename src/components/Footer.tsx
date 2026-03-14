import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm" />
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight">Nexus.</span>
          </div>
          <p className="max-w-sm mb-8">
            A premium web design and development agency focused on building digital experiences that drive growth and inspire trust.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Legal</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Nexus Web Agency. All rights reserved.</p>
        <p>Designed with precision.</p>
      </div>
    </footer>
  );
}
