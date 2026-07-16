import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, TorusKnot, Sparkles } from '@react-three/drei';

const AbstractObject = () => {
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <TorusKnot args={[1, 0.15, 128, 32]} scale={1.8}>
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
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={2} />
          <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={1} color="#0ea5e9" />
          <AbstractObject />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Asmi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            I develop full-stack applications, AI-powered systems, and scalable infrastructure.
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
