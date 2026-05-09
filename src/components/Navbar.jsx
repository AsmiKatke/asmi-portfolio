import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled ? 'bg-black/40 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-wider text-white">
          Asmi Katke <span className="text-purple-400">|</span> AI & Full-Stack
        </span>
      </div>

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
    </nav>
  );
};

export default Navbar;
