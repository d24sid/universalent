"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "navbar-glass py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-sm py-5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-xl font-heading">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none text-brand-navy font-heading tracking-wide">
                  UNIVERSAL
                </span>
                <span className="text-[10px] tracking-[0.25em] font-semibold leading-none mt-1 text-brand-steel font-body uppercase">
                  Enterprises
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-steel hover:text-brand-blue transition-colors font-body"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="bg-brand-blue hover:bg-brand-navy text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 font-body shadow-md shadow-blue-200"
            >
              <PhoneCall size={16} />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-navy"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-semibold text-brand-navy hover:bg-brand-light border-b border-slate-100 font-body"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="tel:+919876543210"
                  className="w-full bg-brand-blue text-white px-4 py-4 rounded-xl text-center font-bold flex items-center justify-center space-x-2 font-body"
                >
                  <PhoneCall size={20} />
                  <span>Call Now for Quote</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
