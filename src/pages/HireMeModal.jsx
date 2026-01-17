// components/HireMeModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Send, Sparkles } from "lucide-react";

const HireMeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-96 z-50"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      Let's Work Together!
                    </h3>
                    <p className="text-purple-100 mt-1">I'm excited to hear about your project</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Send Button */}
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {/* Quick Contact */}
                <div className="text-center text-sm text-gray-500 pt-4 border-t">
                  Or reach me directly at:{" "}
                  <a href="mailto:you@email.com" className="text-purple-600 font-medium">
                    you@email.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;