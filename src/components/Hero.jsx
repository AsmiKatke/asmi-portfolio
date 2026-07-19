import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, TorusKnot, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Clean, creative 3D mobile shape: A spinning geodesic structure with orbiting atomic rings
const GeodesicCore = () => {
  const outerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate outer geodesic wireframe
    if (outerRef.current) {
      outerRef.current.rotation.y = time * 0.15;
      outerRef.current.rotation.x = time * 0.08;
    }

    // Spin orbiting rings at matching geometric tilts
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.2;
    }
  });

  return (
    <group scale={1.2}>
      {/* Outer spinning wireframe geodesic sphere (Cyan) */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.3, 2]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          wireframe 
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Primary orbiting ring (Magenta) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1.7, 0.025, 12, 80]} />
        <meshBasicMaterial 
          color="#ec4899" 
          transparent
          opacity={0.65}
        />
      </mesh>
      
      {/* Secondary orbiting ring (Cyan) */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, -Math.PI / 4, 0]}>
        <torusGeometry args={[1.85, 0.015, 8, 64]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Central glow pointlight to cast ambient purple shadows */}
      <pointLight position={[0, 0, 0]} color="#c084fc" intensity={2.5} distance={5} />
    </group>
  );
};

const AbstractObject = ({ isMobile }) => {
  if (isMobile) {
    return (
      <Float speed={2.0} rotationIntensity={1.2} floatIntensity={1.5}>
        <GeodesicCore />
      </Float>
    );
  }

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <TorusKnot 
        args={[1, 0.15, 128, 32]} 
        scale={1.8}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#0ea5e9" 
          emissive="#8b5cf6" 
          emissiveIntensity={0.8} 
          wireframe 
        />
      </TorusKnot>
    </Float>
  );
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Stars radius={100} depth={50} count={isMobile ? 1000 : 3000} factor={4} saturation={0} fade speed={2} />
          <Sparkles count={isMobile ? 60 : 200} scale={12} size={isMobile ? 1.5 : 2} speed={0.4} opacity={isMobile ? 0.6 : 1} color="#0ea5e9" />
          <AbstractObject isMobile={isMobile} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enableRotate={!isMobile} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ 
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 20px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 0, 0, 0.9)' 
            }}
          >
            Hi, I'm <span 
              className="text-white"
              style={{ textShadow: '0 0 12px rgba(168, 85, 247, 0.95), 0 0 25px rgba(6, 182, 212, 0.8), 0 0 40px rgba(0, 0, 0, 0.9)' }}
            >
              Asmi Katke
            </span>
          </h1>
          <p 
            className="text-base md:text-lg text-slate-100 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              textShadow: '0 0 15px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 0, 0, 0.9)' 
            }}
          >
            I am a 20-year-old AI engineering student. I develop full-stack applications, AI-powered systems, and scalable infrastructure.
          </p>
          <motion.div
            className="mt-10 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" className="inline-block px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]">
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        {/* The 3D Canvas element acts as the background/right-side element, but we can put an empty div to maintain grid layout */}
        <div className="hidden md:block h-[500px] w-full"></div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-400 z-10">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
