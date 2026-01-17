// components/Skills.jsx
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import React, { useRef } from "react";
import { Code2, Database, Palette, Zap, Brain, Globe } from "lucide-react";

// Floating 3D Skill Orb
const SkillOrb = ({ color, delay = 0 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + delay) * 0.3;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const Skills = () => {
  const skills = [
    { name: "React / Next.js", level: 95, icon: Code2, color: "#00D8FF" },
    { name: "Three.js / WebGL", level: 88, icon: Globe, color: "#A855F7" },
    { name: "Node.js / Express", level: 90, icon: Database, color: "#10B981" },
    { name: "MongoDB / Prisma", level: 85, icon: Database, color: "#F59E0B" },
    { name: "UI/UX Design", level: 92, icon: Palette, color: "#EC4899" },
    { name: "Framer Motion / GSAP", level: 93, icon: Zap, color: "#FBBF24" },
    { name: "Tailwind CSS", level: 98, icon: Brain, color: "#06B6D4" },
    { name: "TypeScript", level: 87, icon: Code2, color: "#3178C6" },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* 3D Background Orbs */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 80 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#c084fc" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ec4899" />

          <SkillOrb color="#8b5cf6" delay={0} />
          <SkillOrb color="#ec4899" delay={2} />
          <SkillOrb color="#06b6d4" delay={4} />
          <SkillOrb color="#10b981" delay={6} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/90 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My Superpowers
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Tools & technologies I master to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-600/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl group-hover:scale-110 transition">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to right, ${skill.color}, ${skill.color}dd)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus: Floating Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            I don't just code — I craft experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;