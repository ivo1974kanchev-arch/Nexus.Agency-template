import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus completely transformed our online presence. Our conversion rate doubled within the first month of launching the new site.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The attention to detail and strategic thinking they brought to our project was unmatched. They don't just build websites, they build businesses.",
    author: "Michael Chen",
    role: "Founder, Elevate",
    image: "https://picsum.photos/seed/michael/100/100"
  },
  {
    quote: "Working with Nexus felt like having an in-house design team. They understood our vision perfectly and executed it flawlessly.",
    author: "Emma Rodriguez",
    role: "Director of Product, Nova",
    image: "https://picsum.photos/seed/emma/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight max-w-2xl mx-auto">
            Don't just take our word for it.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-gray-200 mb-6" size={40} />
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
