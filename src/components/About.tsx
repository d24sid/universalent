"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <div className="h-[480px] w-full bg-gradient-to-br from-brand-navy via-slate-800 to-slate-900 flex items-center justify-center p-12 overflow-hidden relative">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dotgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="white"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dotgrid)" />
                  </svg>
                </div>

                <div className="relative text-center">
                  <div className="w-24 h-24 bg-brand-blue/20 border-2 border-brand-blue/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-black text-white font-heading">AG</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 font-heading">Ajay Goyal</h3>
                  <p className="text-blue-300 font-bold uppercase tracking-widest text-sm font-body mb-8">Founder & Owner</p>
                  <div className="px-8 py-4 border border-white/10 bg-white/5 rounded-2xl text-white/80 italic text-base leading-relaxed font-body max-w-xs mx-auto">
                    "Our commitment is to structural integrity and client satisfaction, every single time."
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100 z-20"
            >
              <p className="text-3xl font-black text-brand-blue font-heading">500+</p>
              <p className="text-sm text-brand-steel font-semibold font-body">Happy Clients</p>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm font-body">Our Story</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-brand-navy leading-tight mb-6 font-heading">
              A Legacy of <span className="text-brand-blue">Excellence</span> in Jamshedpur
            </h2>
            <p className="text-brand-steel text-lg leading-relaxed mb-8 font-body">
              Based in the heart of India's steel city, Universal Enterprises is a trusted supplier led by{" "}
              <span className="font-bold text-brand-navy">Ajay Goyal</span>. We specialize in providing the
              highest quality iron and non-alloy steel products to power the nation's infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {[
                { icon: ShieldCheck, title: "Reliability", text: "Quality certified materials for every project." },
                { icon: TrendingUp, title: "Local Expertise", text: "Deep roots in Jamshedpur's industrial landscape." },
                { icon: Users, title: "Owner-Led", text: "Direct commitment from Ajay Goyal himself." },
                { icon: CheckCircle2, title: "Fast Delivery", text: "Optimized logistics for timely material arrival." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-brand-light border border-brand-border hover:border-brand-blue/30 transition-colors group">
                  <div className="mt-0.5 bg-blue-50 p-2.5 rounded-lg border border-blue-100 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                    <item.icon className="text-brand-blue group-hover:text-white transition-colors" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy font-heading">{item.title}</h4>
                    <p className="text-sm text-brand-steel font-body mt-0.5">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6 p-6 border border-brand-border rounded-2xl bg-brand-light">
              <div className="w-16 h-16 bg-brand-blue flex items-center justify-center rounded-full text-white font-black text-xl shadow-lg shadow-blue-200 font-heading flex-shrink-0">
                10+
              </div>
              <div>
                <p className="font-extrabold text-brand-navy uppercase tracking-wider font-heading">Years of Experience</p>
                <p className="text-sm text-brand-steel font-body mt-1">Serving construction and manufacturing sectors with pride.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
