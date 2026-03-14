import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 border border-gray-200 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-gray-700">Accepting new clients for Q3</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-balance">
              We build digital <span className="italic text-gray-500">experiences</span> that drive growth.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Nexus is an award-winning web agency specializing in high-performance websites, e-commerce, and digital products for ambitious brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
                View Our Work
                <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/face${i}/100/100`}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-gray-600">from 150+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://picsum.photos/seed/workspace/1200/1400" 
              alt="Digital Agency Workspace" 
              className="rounded-[2rem] shadow-2xl object-cover w-full aspect-[4/5] lg:aspect-[3/4]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Success Rate</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-tight">Projects delivered on time and within budget.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </section>
  );
}
