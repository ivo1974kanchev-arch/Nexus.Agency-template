import { motion } from 'motion/react';
import { MonitorSmartphone, Code2, LineChart, Zap } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'We craft intuitive, engaging interfaces that users love and businesses rely on.',
    icon: <MonitorSmartphone size={24} className="text-blue-600" />,
    colSpan: 'col-span-1 md:col-span-2',
    bg: 'bg-blue-50',
    image: 'https://picsum.photos/seed/uiux/800/600'
  },
  {
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern tech stacks.',
    icon: <Code2 size={24} className="text-emerald-600" />,
    colSpan: 'col-span-1',
    bg: 'bg-emerald-50',
    image: 'https://picsum.photos/seed/code/400/600'
  },
  {
    title: 'E-Commerce',
    description: 'Conversion-optimized stores that turn visitors into loyal customers.',
    icon: <LineChart size={24} className="text-purple-600" />,
    colSpan: 'col-span-1',
    bg: 'bg-purple-50',
    image: 'https://picsum.photos/seed/ecommerce/400/600'
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast load times for better SEO and user retention.',
    icon: <Zap size={24} className="text-amber-600" />,
    colSpan: 'col-span-1 md:col-span-2',
    bg: 'bg-amber-50',
    image: 'https://picsum.photos/seed/performance/800/600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Everything you need to <span className="italic text-gray-500">dominate</span> your market.
            </h3>
          </div>
          <a href="#contact" className="text-sm font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View all services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${service.bg} ${service.colSpan} p-8 md:p-12 flex flex-col justify-between min-h-[400px]`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 max-w-sm">{service.description}</p>
              </div>
              
              <div className="absolute right-0 bottom-0 w-2/3 h-2/3 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-1/5 group-hover:translate-y-1/5 transition-transform duration-700 ease-out">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover rounded-tl-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/40 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
