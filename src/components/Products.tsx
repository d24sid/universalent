"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Steel Angles",
    description: "High-grade equal and unequal angles for structural support and fabrication.",
    image: "/product-angles.png",
    tag: "Most Popular",
  },
  {
    title: "Channels (U, I, H Sections)",
    description: "Comprehensive range of structural channels and beams for construction projects.",
    image: "/product-channels.png",
    tag: "Wide Range",
  },
  {
    title: "Hot Rolled Steel",
    description: "Durable hot-rolled plates and coils suited for heavy industrial applications.",
    image: "/product-hot-rolled.png",
    tag: "Heavy Duty",
  },
  {
    title: "Structural Steel",
    description: "Premium structural materials building the framework of modern infrastructure.",
    image: "/product-structural.png",
    tag: "Premium Grade",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold uppercase tracking-widest text-sm font-body"
          >
            Our Product Range
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl font-black text-brand-navy font-heading"
          >
            Premium Steel <span className="text-brand-blue">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-brand-steel max-w-xl mx-auto font-body"
          >
            Everything your construction and industrial projects need — sourced directly from top manufacturers.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1.5 bg-brand-blue mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-brand-border group transition-all duration-300 h-full"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-body">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-2 font-heading">
                  {product.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed mb-5 font-body">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors font-body group/link"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
