import { motion } from 'motion/react';

const logos = [
  { name: 'Acme Corp', url: 'https://picsum.photos/seed/logo1/200/80?grayscale' },
  { name: 'Global Tech', url: 'https://picsum.photos/seed/logo2/200/80?grayscale' },
  { name: 'Stark Ind', url: 'https://picsum.photos/seed/logo3/200/80?grayscale' },
  { name: 'Wayne Ent', url: 'https://picsum.photos/seed/logo4/200/80?grayscale' },
  { name: 'Umbrella', url: 'https://picsum.photos/seed/logo5/200/80?grayscale' },
];

export default function Logos() {
  return (
    <section className="py-16 border-y border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              src={logo.url}
              alt={logo.name}
              className="h-8 md:h-10 object-contain filter contrast-200 brightness-0"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
