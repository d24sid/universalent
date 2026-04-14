"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Zap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/80 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e3a5f" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-brand-blue px-4 py-2 rounded-full mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider font-body">Trusted by 500+ Businesses</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-navy mb-6 leading-tight font-heading">
              Reliable Steel{" "}
              <span className="text-brand-blue relative">
                Supplier
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-200 rounded-full"></span>
              </span>{" "}
              in Jamshedpur
            </h1>

            <p className="text-lg text-brand-steel mb-10 leading-relaxed max-w-lg font-body">
              Quality Iron & Steel Sections for Industrial and Construction Needs. Fast delivery and competitive pricing guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-brand-blue hover:bg-brand-navy text-white px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center space-x-2 transition-all hover:translate-x-1 shadow-lg shadow-blue-200 font-body"
              >
                <span>Get Free Quote</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white border-2 border-slate-200 hover:border-brand-blue hover:text-brand-blue text-brand-navy px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center space-x-2 transition-all font-body shadow-sm"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: ShieldCheck, label: "Quality Certified" },
                { icon: Zap, label: "Fast Delivery" },
                { icon: Star, label: "Trusted Vendor" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center space-x-2 text-brand-steel font-body">
                  <Icon size={18} className="text-brand-blue" />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/hero-warehouse.png"
                alt="Steel Warehouse — Universal Enterprises"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-white shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-blue font-body mb-1">Our Location</p>
                  <p className="text-brand-navy font-black text-lg font-heading">Jamshedpur, Jharkhand</p>
                  <p className="text-brand-steel text-sm font-body mt-1">India's Steel City — Prime Supply Hub</p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100"
            >
              <p className="text-3xl font-black text-brand-blue font-heading">10+</p>
              <p className="text-xs text-brand-steel font-semibold font-body">Years of Trust</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
