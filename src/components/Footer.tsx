import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Briefcase, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg">
                <span className="text-white font-black text-xl font-heading">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none text-white font-heading tracking-wide">UNIVERSAL</span>
                <span className="text-[10px] tracking-[0.25em] font-semibold leading-none mt-1 text-white/60 font-body uppercase">Enterprises</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-body">
              Trusted supplier and trader of high-quality iron and steel products in Jamshedpur. Serving construction and industrial needs for over a decade.
            </p>
            <div className="flex space-x-3">
              {[Briefcase, Globe, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 font-heading border-l-2 border-brand-blue pl-3 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-white/60 text-sm font-body">
              {[
                { name: "Home", href: "#home" },
                { name: "Products", href: "#products" },
                { name: "About Us", href: "#about" },
                { name: "Why Choose Us", href: "#why-choose-us" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-1 inline-block transition-all">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-bold mb-6 font-heading border-l-2 border-brand-blue pl-3 uppercase tracking-wider">Our Products</h3>
            <ul className="space-y-3 text-white/60 text-sm font-body">
              {[
                "Steel Angles",
                "Channels (U, I, H Sections)",
                "Hot Rolled Steel",
                "Structural Steel",
              ].map((p) => (
                <li key={p}>
                  <Link href="#products" className="hover:text-white hover:translate-x-1 inline-block transition-all">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-6 font-heading border-l-2 border-brand-blue pl-3 uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/60 font-body">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={16} />
                <span>Jamshedpur, Jharkhand, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60 font-body">
                <Phone className="text-brand-blue shrink-0" size={16} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60 font-body">
                <Mail className="text-brand-blue shrink-0" size={16} />
                <a href="mailto:info@universalent.com" className="hover:text-white transition-colors">info@universalent.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-white/30 font-body">
          <p>© {new Date().getFullYear()} Universal Enterprises. All rights reserved. | Jamshedpur, Jharkhand, India</p>
        </div>
      </div>
    </footer>
  );
}
