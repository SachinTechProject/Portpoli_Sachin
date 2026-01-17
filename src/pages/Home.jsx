// Home.jsx
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import React,{ useEffect, useState } from "react";
import MoreInfo from "./MoreInfo";

const FloatingSpheres = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 5]} intensity={1.5} />
      
      {/* Main Large Sphere */}
      <Sphere args={[1.5, 100, 100]} scale={2.5} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Floating Smaller Orbs */}
      <Sphere args={[0.8, 64, 64]} scale={1} position={[-3, 2, -2]}>
        <MeshDistortMaterial
          color="#ec4899"
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
        />
      </Sphere>

      <Sphere args={[0.6, 64, 64]} scale={0.8} position={[4, -1, -3]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.8}
          speed={2.5}
          roughness={0.2}
        />
      </Sphere>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-black to-pink-900">
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <FloatingSpheres />
        </Canvas>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Hello Wave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block text-white text-5xl"
            role="img"
            aria-label="waving hand"
          >
            Hello
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Sachin Suralkar
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl md:text-4xl text-gray-300 mb-8 font-light"
        >
          <span className="text-purple-400">{"<"}</span>
          {text}
          <span className="animate-pulse text-purple-400">|</span>
          <span className="text-purple-400">{" />"}</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting beautiful, high-performance web experiences with modern technologies.
          Passionate about clean code, animations, and pixel-perfect design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-purple-500 text-purple-400 font-bold text-lg rounded-full backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
    <MoreInfo/>
    </>
  );
};

export default Home;