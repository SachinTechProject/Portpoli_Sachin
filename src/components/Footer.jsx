// components/Footer.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import React from "react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100 }}
            animate={{ x: "100%" }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Have a project in mind? I'm just one message away.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          {[
            { Icon: Github, link: "https://github.com/yourusername", label: "GitHub" },
            { Icon: Linkedin, link: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
            { Icon: Twitter, link: "https://twitter.com/yourusername", label: "Twitter" },
            { Icon: Mail, link: "mailto:you@email.com", label: "Email" },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all"
              aria-label={social.label}
            >
              <social.Icon className="w-7 h-7" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-gray-500"
        >
          <span>Made with</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </motion.span>
          <span>by SACHIN SURALKAR © {new Date().getFullYear()}</span>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 p-4 bg-purple-600 rounded-full shadow-2xl hover:shadow-purple-600/50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;