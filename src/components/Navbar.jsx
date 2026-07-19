import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between ${
        scrolled || isOpen ? 'bg-black/60 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <span 
          className="text-xl font-bold tracking-wider text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Asmi Katke <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-extrabold">| AI & Full-Stack</span>
        </span>
        
        {/* Hamburger Toggle Button for Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none p-1 hover:text-purple-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        
        <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden flex flex-col items-center gap-6 mt-6 pb-6 text-base font-semibold text-gray-300 w-full"
          >
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="hover:text-cyan-400 transition-colors py-2 w-full text-center border-b border-white/5"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)} 
              className="hover:text-cyan-400 transition-colors py-2 w-full text-center border-b border-white/5"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="hover:text-cyan-400 transition-colors py-2 w-full text-center border-b border-white/5"
            >
              Contact
            </a>
            
            <div className="flex items-center justify-center gap-6 pt-4 w-full">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors p-2 bg-white/5 rounded-full">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors p-2 bg-white/5 rounded-full">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
