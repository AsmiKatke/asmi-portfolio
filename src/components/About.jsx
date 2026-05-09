import { motion } from 'framer-motion';
import { Cpu, Code, Wifi, PenTool } from 'lucide-react';

const skills = [
  { title: 'AI/ML Engineer', icon: <Cpu size={32} className="text-purple-400" /> },
  { title: 'Full-Stack Developer', icon: <Code size={32} className="text-cyan-400" /> },
  { title: 'IoT Specialist', icon: <Wifi size={32} className="text-blue-400" /> },
  { title: 'UI/UX Designer', icon: <PenTool size={32} className="text-pink-400" /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Overview.</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I'm an AI Engineering student specializing in bridging the gap between heavy machine learning models and clean, scalable web architectures. I build real-time computer vision systems, IoT safety devices, and responsive web platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              animate={{ y: [0, -8, 0] }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
