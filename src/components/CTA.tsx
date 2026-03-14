import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight">
              Ready to <span className="italic text-gray-400">elevate</span> your brand?
            </h2>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Let's build something extraordinary together. Reach out to discuss your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="mailto:hello@nexus.com" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Start a Project
                <ArrowRight size={18} />
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all">
                Book a Call
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-400">First Name</label>
                    <input type="text" id="firstName" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Jane" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-400">Last Name</label>
                    <input type="text" id="lastName" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                  <input type="email" id="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="jane@company.com" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Project Details</label>
                  <textarea id="message" rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                
                <button type="button" className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 pointer-events-none"></div>
    </section>
  );
}
