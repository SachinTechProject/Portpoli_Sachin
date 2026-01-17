// components/MoreInfo.jsx
import { motion } from "framer-motion";
import { Code2, Rocket, Award, Coffee, Zap, Globe } from "lucide-react";
import React from "react";
const stats = [
  { number: "50+", label: "Projects Completed", icon: Rocket },
  { number: "3+", label: "Years Experience", icon: Award },
  { number: "1.2M+", label: "Lines of Code", icon: Code2 },
  { number: "24/7", label: "Available to Work", icon: Coffee },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js / 3D", level: 85 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Node.js", level: 88 },
  { name: "UI/UX Design", level: 92 },
];

const MoreInfo = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex p-5 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 mb-4">
                <stat.icon className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <motion.h3 className="text-4xl md:text-5xl font-bold text-gray-800">
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Title + Description */}
          <motion.div>
            <motion.h2
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Skills & Expertise
            </motion.h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I transform ideas into pixel-perfect, high-performance digital experiences using cutting-edge technologies.
            </p>
            <motion.div
              whileHover={{ x: 10 }}
              className="inline-flex items-center mt-8 text-purple-600 font-semibold"
            >
              <Globe className="w-6 h-6 mr-2" />
              Available for freelance worldwide
            </motion.div>
          </motion.div>

          {/* Right: Animated Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-purple-600 font-bold">{skill.level}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 relative"
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl text-white text-center"
        >
          <Zap className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Fun Fact</h3>
          <p className="text-xl opacity-90">
            I once built a full 3D portfolio in 48 hours using only Three.js and coffee
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreInfo;