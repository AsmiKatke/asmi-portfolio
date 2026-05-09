import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Accident Alert Tracking System",
    description: "IoT safety solution using ESP32 and MPU6050 to detect crashes and send GPS coordinates via GSM.",
    tags: ["#c++", "#esp32", "#iot"],
    colors: ["text-blue-400", "text-purple-400", "text-cyan-400"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Nagarsamadhan",
    description: "AI-Powered Smart City Reporting Platform for routing public infrastructure issues via frictionless QR codes.",
    tags: ["#react", "#tailwind", "#ai"],
    colors: ["text-cyan-400", "text-blue-400", "text-purple-400"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Real-time Pothole Detection",
    description: "Computer vision system utilizing YOLO algorithms to identify road hazards in varied lighting conditions.",
    tags: ["#python", "#opencv", "#yolov4"],
    colors: ["text-yellow-400", "text-green-400", "text-orange-400"],
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Crowd Prediction in Railways",
    description: "Full-stack platform tracking commuter density in real-time using custom-trained YOLOv8 models.",
    tags: ["#yolov8", "#react", "#python"],
    colors: ["text-orange-400", "text-cyan-400", "text-yellow-400"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Innovation Mahakumbh Portal",
    description: "Official university-wide portal managing event schedules and registrations for high-traffic audiences.",
    tags: ["#javascript", "#html", "#css"],
    colors: ["text-yellow-300", "text-orange-400", "text-blue-400"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Prawn Feed Optimization",
    description: "Data dashboard calculating biomass and optimizing aquaculture feed distribution using math algorithms.",
    tags: ["#streamlit", "#python", "#data"],
    colors: ["text-red-400", "text-yellow-400", "text-green-400"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-purple-900/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 h-20">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`text-xs font-semibold ${project.colors[i]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
