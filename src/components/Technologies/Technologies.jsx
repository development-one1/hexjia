import "./technologies.css";
import { motion } from "framer-motion";

const techs = [
  "Flutter",
  "React",
  "Firebase",
  "Node.js",
  "Inteligencia Artificial",
  "Automatización",
  "APIs"
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Technologies() {
  return (
    <section className="technologies" id="tecnologias">
      <motion.div
        className="technologies-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="tech-label">
          TECNOLOGÍAS
        </span>

        <h2>
          Tecnología moderna, software escalable
        </h2>

        <p>
          Seleccionamos tecnologías robustas
          para desarrollar software rápido,
          estable y preparado para crecer.
        </p>
      </motion.div>

      <motion.div
        className="tech-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {techs.map((tech, index) => (
          <motion.div
            className="tech-card"
            key={index}
            variants={item}
            whileHover={{
              y: -6,
              scale: 1.04,
            }}
          >
            <span>{tech}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}