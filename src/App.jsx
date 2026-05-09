import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-[#020617] min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="relative z-10 py-8 text-center text-gray-500 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Asmi Katke. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
