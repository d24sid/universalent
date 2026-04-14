"use client";

import { motion } from "framer-motion";
import { Truck, Award, PieChart, Star, CheckCircle, Package, Users } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Quality Materials",
      description: "Direct sourcing from reputed manufacturers ensures the highest grade steel.",
      badge: "Quality Certified",
      color: "from-blue-50 to-blue-100/50",
      iconBg: "bg-blue-100",
      iconColor: "text-brand-blue",
    },
    {
      icon: PieChart,
      title: "Competitive Pricing",
      description: "Optimized supply chain allows us to offer the most competitive market rates.",
      badge: "Best Value",
      color: "from-slate-50 to-slate-100/50",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Strategic location in Jamshedpur ensures rapid delivery across the region.",
      badge: "Swift Logistics",
      color: "from-sky-50 to-sky-100/50",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      icon: Star,
      title: "Trusted Vendor",
      description: "Preferred partner for major construction and fabrication companies.",
      badge: "Local Leader",
      color: "from-indigo-50 to-indigo-100/50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold uppercase tracking-widest text-sm font-body"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl font-black text-brand-navy font-heading"
          >
            Why Choose{" "}
            <span className="text-brand-blue">Universal Enterprises?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-brand-steel max-w-2xl mx-auto font-body"
          >
            We combine high-quality products with exceptional service to ensure your projects are built on a strong foundation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-b ${feature.color} border border-brand-border p-8 rounded-3xl hover:shadow-lg hover:border-brand-blue/20 transition-all group`}
            >
              <div className={`inline-flex p-4 rounded-2xl ${feature.iconBg} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={feature.iconColor} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-navy font-heading">{feature.title}</h3>
              <p className="text-brand-steel text-sm leading-relaxed mb-6 font-body">
                {feature.description}
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-blue uppercase tracking-widest bg-white w-fit px-3 py-1.5 rounded-full border border-blue-100 font-body shadow-sm">
                <CheckCircle size={12} />
                <span>{feature.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-brand-border flex flex-wrap justify-center items-center gap-10 sm:gap-16"
        >
          {[
            { icon: Package, label: "ISO Certified" },
            { icon: Star, label: "Trusted Vendor" },
            { icon: Award, label: "Quality Assured" },
            { icon: Users, label: "Local Partner" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center space-x-3 text-brand-steel group">
              <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-border flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all">
                <Icon size={18} />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider font-body group-hover:text-brand-navy transition-colors">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
