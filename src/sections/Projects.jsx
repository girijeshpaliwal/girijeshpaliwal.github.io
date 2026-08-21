import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 140 });
  const springY = useSpring(y, { damping: 18, stiffness: 140 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      aria-label="Selected Mobile Applications and Projects by Girijesh Paliwal"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      <AnimatePresence>
        {preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-52 rounded-xl shadow-2xl pointer-events-none w-80 border border-white/20 hidden md:block"
            src={preview}
            alt="Mobile Project interactive preview"
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
