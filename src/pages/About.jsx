// components/About.jsx
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import React, { useRef, useState } from "react";
import {
  Code2, Rocket, Brain, Palette, Zap, Sparkle,
  GraduationCap, Gamepad2, Music, Coffee, Mountain,
  Github, Linkedin, Mail
} from "lucide-react";

// Fixed AnimatedTorus Component
const AnimatedTorus = ({ mouse }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
    meshRef.current.rotation.x += mouse.y * 0.2;
    meshRef.current.rotation.y += mouse.x * 0.2;
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.8, 0.6, 128, 32]} />
        <MeshDistortMaterial
          color="#a855f7"
          distort={0.5}
          speed={4}
          roughness={0.1}
          metalness={1}
          emissive="#d8b4fe"
          emissiveIntensity={0.8}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </Float>
  );
};

const About = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (clientX / innerWidth) * 2 - 1,
      y: -(clientY / innerHeight) * 2 + 1,
    });
  };

  const skills = [
    { icon: Code2, text: "React / Next.js", color: "from-cyan-400 to-blue-500" },
    { icon: Rocket, text: "Performance First", color: "from-emerald-400 to-teal-500" },
    { icon: Brain, text: "Problem Solver", color: "from-purple-400 to-pink-500" },
    { icon: Palette, text: "UI/UX Obsessed", color: "from-orange-400 to-red-500" },
    { icon: Zap, text: "Fast & Clean Code", color: "from-yellow-400 to-amber-500" },
    { icon: Sparkle, text: "3D Web Magic", color: "from-violet-400 to-purple-600" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 9], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={3} color="#c084fc" />
          <pointLight position={[-10, -10, -10]} intensity={2} color="#ec4899" />
          <AnimatedTorus mouse={mouse} />
          <Sparkles count={200} scale={10} size={2} speed={0.5} opacity={0.6} color="#e9d5ff" />
          <Stars radius={120} depth={60} count={7000} factor={6} saturation={0} fade speed={2} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/90 to-black -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ====== HERO SECTION ====== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 lg:mb-40">
          {/* Left: Photo + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group mb-12"
            >
              <div className="w-96 h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-purple-500/40 bg-white/5 backdrop-blur-xl">
                <img
                  src="https://ibb.co/Tx8qg9C6" // Replace with your photo
                  alt="Sachin Suralkar"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800/70 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    SACHIN SURALKAR
                  </h3>
                  <p className="text-xl text-purple-200 mt-1">MERN Stack • 3D Web Developer</p>
                </div>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-purple-500/30 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 transition`} />
                  <div className="relative flex items-center gap-3">
                    <skill.icon className="w-6 h-6 text-white" />
                    <span className="text-gray-100 font-medium">{skill.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <motion.h2
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-10 leading-tight"
            >
              Crafting Digital<br />Magic with Code
            </motion.h2>

            <div className="space-y-6 text-lg lg:text-xl text-gray-300">
              {[
                "Passionate full-stack developer turning ideas into immersive, high-performance web experiences.",
                "Expert in React, Next.js, Three.js, Node.js, MongoDB and modern web animations.",
                "I don’t just build websites — I create digital art that moves, breathes, and inspires.",
                "Always exploring the future of web: WebGL, shaders, 3D, and beyond.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, index: 0.3 + i * 0.2 }}
                  className="pl-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500 before:rounded-full"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg shadow-2xl shadow-purple-600/50 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700" />
              <Mail className="w-6 h-6" />
              Let's Build Something Epic
            </motion.a>
          </motion.div>
        </div>

        {/* ====== MORE ABOUT ME ====== */}
        <div className="mt-20 lg:mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-5xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16"
          >
            More About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400 transition"
            >
              <GraduationCap className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Sachin Shriram Suralkar</h3>
              <div className="text-gray-300 space-y-2">
                <p>BSC Computer Science</p>
                <p>BAMBU University • 2024</p>
                <p>Persentage: 64%</p>
                <p>Full-Stack & WebGL Focus</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8"
            >
              <Gamepad2 className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Outside Coding</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-300">
                <div>Music</div>
                <div>Gaming</div>
                <div>Trekking</div>
                <div>Coffee</div>
                <div>Photography</div>
                <div>Open Source</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8"
            >
              <Sparkle className="w-12 h-12 text-yellow-400 mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-6">Fun Facts</h3>
              <ul className="text-gray-300 space-y-3">
                <li>50+ live projects built</li>
                <li>Can code with one hand + chai</li>
                <li>Once fixed a bug at 4 AM</li>
                <li>Dream: Next-gen 3D web apps</li>
              </ul>
            </motion.div>
          </div>

          {/* Technologies I Love */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12"
            >
              Technologies I Love
            </motion.h3>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {[
                "React", "Next.js", "Three.js", "Node.js",
                "MongoDB", "Tailwind CSS", "Framer Motion",
                "GSAP", "WebGL", "TypeScript", "Express.js", "Prisma"
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="px-8 py-4 bg-gradient-to-br from-purple-600/80 to-pink-600/80 backdrop-blur-md border border-purple-400/40 rounded-2xl text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-24 pb-20"
          >
            <p className="text-gray-400 mb-8">Let's connect and create something amazing!</p>
            <div className="flex justify-center gap-10">
              <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-8 h-8 text-gray-400 hover:text-white transition" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.3 }} href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-white transition" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.3 }} href="mailto:youremail@gmail.com">
                <Mail className="w-8 h-8 text-gray-400 hover:text-white transition" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;