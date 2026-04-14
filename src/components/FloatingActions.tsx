"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-xl shadow-green-200 flex items-center justify-center hover:bg-green-600 transition-colors border-2 border-white"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* Call Button — visible on mobile only */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919876543210"
        className="md:hidden w-14 h-14 bg-brand-blue text-white rounded-full shadow-xl shadow-blue-200 flex items-center justify-center hover:bg-brand-navy transition-colors border-2 border-white"
        title="Call Now"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
