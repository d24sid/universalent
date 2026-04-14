"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent. We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-widest text-sm font-body">Get In Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-navy font-heading">
            Request a <span className="text-brand-blue">Quote</span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-blue mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-brand-border"
          >
            <h3 className="text-2xl font-black text-brand-navy mb-8 font-heading">
              Get a <span className="text-brand-blue">Custom Quote</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-steel mb-2 font-body">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-brand-light border border-brand-border rounded-xl px-5 py-3.5 text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all font-body text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-steel mb-2 font-body">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full bg-brand-light border border-brand-border rounded-xl px-5 py-3.5 text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all font-body text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-steel mb-2 font-body">Product Required</label>
                <select className="w-full bg-brand-light border border-brand-border rounded-xl px-5 py-3.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all appearance-none font-body text-sm">
                  <option>Steel Angles</option>
                  <option>Channels (U, I, H)</option>
                  <option>Hot Rolled Steel</option>
                  <option>Structural Steel</option>
                  <option>Other / Multiple</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-steel mb-2 font-body">Quantity (Approx)</label>
                <input
                  type="text"
                  placeholder="e.g. 50 Tons"
                  className="w-full bg-brand-light border border-brand-border rounded-xl px-5 py-3.5 text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all font-body text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-steel mb-2 font-body">Message</label>
                <textarea
                  rows={4}
                  placeholder="Specific requirements or questions..."
                  className="w-full bg-brand-light border border-brand-border rounded-xl px-5 py-3.5 text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none font-body text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-navy text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200 font-body"
              >
                <Send size={18} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <div className="flex flex-col h-full gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm border border-brand-border p-8"
            >
              <h3 className="text-2xl font-black text-brand-navy mb-8 font-heading">
                Contact <span className="text-brand-blue">Information</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-5 group">
                  <div className="bg-blue-50 border border-blue-100 text-brand-blue p-3.5 rounded-2xl group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-brand-steel font-bold uppercase tracking-widest text-xs mb-1 font-body">Our Location</p>
                    <p className="text-lg font-bold text-brand-navy font-heading">Jamshedpur, Jharkhand, India</p>
                    <p className="text-brand-steel text-sm font-body">Industrial Hub — Leading Steel Supply Chain</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="bg-blue-50 border border-blue-100 text-brand-blue p-3.5 rounded-2xl group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-brand-steel font-bold uppercase tracking-widest text-xs mb-1 font-body">Call Us Now</p>
                    <a href="tel:+919876543210" className="text-xl font-black text-brand-navy hover:text-brand-blue transition-colors font-heading">
                      +91 98765 43210
                    </a>
                    <p className="text-brand-steel text-sm font-body">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="bg-blue-50 border border-blue-100 text-brand-blue p-3.5 rounded-2xl group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-brand-steel font-bold uppercase tracking-widest text-xs mb-1 font-body">Email Us</p>
                    <a href="mailto:info@universalent.com" className="text-lg font-bold text-brand-navy hover:text-brand-blue transition-colors font-heading">
                      info@universalent.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 rounded-3xl overflow-hidden border border-brand-border shadow-sm bg-white h-[240px] relative group min-h-[220px]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin size={40} className="text-brand-blue mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-brand-navy mb-1 font-heading">Find Us in Jamshedpur</h4>
                <p className="text-brand-steel text-sm max-w-xs mb-5 font-body">
                  Strategic location near major industrial centers for fast logistics.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold flex items-center space-x-2 text-sm hover:bg-brand-navy transition-all shadow-md font-body"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
