import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
      earthRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial 
        color="#0ea5e9"
        emissive="#0c4a6e"
        emissiveIntensity={0.5}
        wireframe={true}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch.</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Ready to build something amazing? Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form action="https://formspree.io/f/xbdwzqee" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder-gray-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-500 resize-none"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, -10, 0] }}
          className="h-[500px] w-full relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={3} speed={0.5} opacity={0.5} color="#0ea5e9" />
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
              <Earth />
            </Float>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
