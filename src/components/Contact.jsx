import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 3D Holographic Neural Network Node with orbiting data points
const NeuralNode = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate outer wireframe network
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.12;
      groupRef.current.rotation.x = time * 0.06;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Outer geodesic data frame (Cyan) */}
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          wireframe 
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Floating orbiting data nodes */}
      <Float speed={4.0} rotationIntensity={2.5} floatIntensity={1.5}>
        <mesh position={[1.4, 1.4, 0.2]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color="#ec4899" />
        </mesh>
        <mesh position={[-1.4, -1.4, -0.2]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color="#0ea5e9" />
        </mesh>
        <mesh position={[0.2, -1.6, 1.0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#c084fc" />
        </mesh>
      </Float>

      {/* Central light source */}
      <pointLight position={[0, 0, 0]} color="#c084fc" intensity={3} distance={5} />
    </group>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.errors ? data.errors.map(err => err.message).join(', ') : 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit form. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-900/30 backdrop-blur-xl border border-purple-500/20 p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center flex flex-col items-center justify-center max-w-xl mx-auto h-[450px]"
            >
              {/* Big pulsing success gradient circle with checkmark */}
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(139,92,246,0.6)] animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Your message has been sent successfully. I appreciate you taking the time to reach out and will get back to you as soon as possible!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a
                  href="#home"
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-0.5 text-center"
                >
                  View Home Again
                </a>
              </div>
            </motion.div>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300 mb-6">Get in Touch.</h2>
              <p className="text-gray-400 mb-10 text-lg">
                Ready to build something amazing? Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <form onSubmit={handleSubmit} action="https://formspree.io/f/xbdwzqee" method="POST" className="space-y-6">
                {error && (
                  <div className="text-red-400 text-sm font-semibold mb-4 bg-red-950/20 border border-red-500/20 px-4 py-2 rounded-lg">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-slate-900/40 border border-purple-500/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-cyan-400/50 transition-all placeholder-gray-500"
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
                    className="w-full bg-slate-900/40 border border-purple-500/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all placeholder-gray-500"
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
                    className="w-full bg-slate-900/40 border border-purple-500/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-cyan-400/50 transition-all placeholder-gray-500 resize-none"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
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
              <NeuralNode />
            </Float>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
