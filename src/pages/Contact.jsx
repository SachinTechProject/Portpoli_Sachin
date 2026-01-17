// components/Contact.jsx
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import * as THREE from "three";

// Floating 3D Particles Background
const Particles = () => {
  const points = useRef();

  const particlesCount = 3000;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5mc9bht",
        "template_1wmdxx9",
        form.current,
        "36yQPPx5JS1Gi5rxn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData("")
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 lg:py-32 bg-black overflow-hidden">
      {/* 3D Particles Background */}
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 1], fov: 90 }}>
          <Particles />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's turn your vision into a stunning digital reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-10 shadow-2xl shadow-purple-900/20">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-20"
                >
                  <Sparkles className="w-20 h-20 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-4xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-300">I'll get back to you within 24 hours</p>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-3">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 border border-purple-500/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 border border-purple-500/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-3">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 border border-purple-500/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/30 resize-none transition-all"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Magnetic Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 px-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl text-white shadow-2xl shadow-purple-600/50 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700" />
                    <span className="relative flex items-center justify-center gap-3">
                      <Send className="w-6 h-6" />
                      Send Message
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-bold text-white mb-10">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "sachin.test.9579@gmail.com", href: "mailto:sachin.test.9579@gmail.com" },
                { icon: Phone, title: "Phone", value: "+91 9579095930", href: "tel:+919579095930" },
                { icon: MapPin, title: "Location", value: "Pune, Maharashtra, India", href: "#" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-xl border border border-purple-500/30 rounded-2xl group"
                >
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl group-hover:scale-110 transition">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-300 text-sm">{item.title}</p>
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-gray-400  mb-6">Or find me on</p>
              <div className="flex gap-6">
                {[
                  { icon: "GitHub", href: "https://github.com/yourusername" },
                  { icon: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
                  { icon: "Twitter", href: "https://twitter.com/yourhandle" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="p-4 bg-white/10 text-white backdrop-blur-md border border-purple-500/30 rounded-2xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;