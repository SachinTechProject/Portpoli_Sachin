// components/Projects.jsx
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Box } from "@react-three/drei";
import React, { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

// Floating 3D Cube Background (subtle)
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#c084fc" />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Box args={[2, 2, 2]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.4}
            speed={3}
            roughness={0}
            metalness={0.9}
            emissive="#a78bfa"
            emissiveIntensity={0.5}
            wireframe
          />
        </Box>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      title: "Neon Dashboard",
      desc: "Futuristic admin panel with real-time analytics & 3D visualizations",
      tags: ["Next.js", "Three.js", "Prisma", "Tailwind"],
      live: "https://neon-dashboard.vercel.app",
      code: "https://github.com/yourusername/neon-dashboard",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "E-Commerce 3D",
      desc: "Next-gen e-commerce with 3D product viewer & AR try-on",
      tags: ["React", "Three.js", "GSAP", "Stripe"],
      live: "https://ecom-3d.vercel.app",
      code: "https://github.com/yourusername/ecom-3d",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "AI SaaS Landing",
      desc: "High-converting landing page with animated gradients & Lottie",
      tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
      live: "https://ai-saas-landing.vercel.app",
      code: "https://github.com/yourusername/ai-saas",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Portfolio X",
      desc: "This very portfolio you're viewing — built with love & magic",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
      live: "#",
      code: "https://github.com/yourusername/portfolio",
      color: "from-pink-500 to-rose-600",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 80 }}>
          <Scene />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Some of my favorite creations that blend design, performance & magic
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Card */}
              <div
                className="relative bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:border-purple-400 hover:shadow-purple-600/40"
                style={{
                  transform: hovered === i ? "translateZ(50px) rotateX(5deg) rotateY(5deg)" : "translateZ(0)",
                  transition: "transform 0.6s",
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/40 border-b border-purple-500/30 flex items-center justify-center">
                  <div className="text-6xl font-black text-white/20 select-none">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/10 backdrop-blur border border-purple-500/30 rounded-full text-sm text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white text-center shadow-lg hover:shadow-purple-600/50 transition flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.code}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 px-6 bg-white/10 backdrop-blur border border-purple-500/50 rounded-xl font-semibold text-white text-center hover:bg-white/20 transition flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.a>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-1000 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-2xl text-gray-400 mb-8">
            Want to see more?{" "}
            <a href="https://github.com/yourusername" target="_blank" className="text-purple-400 hover:text-purple-300 underline">
              Check my GitHub
            </a>
            for 50+ projects
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl shadow-2xl shadow-purple-600/50"
          >
            Got a Project? Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;