import "./technologies.css";
import { motion } from "framer-motion";

const techs = [
  { name: "Flutter", url: "https://flutter.dev" },
  { name: "React", url: "https://react.dev" },
  { name: "Firebase", url: "https://firebase.google.com" },
  { name: "Node.js", url: "https://nodejs.org" },
  { name: "Inteligencia Artificial", url: "https://www.ibm.com/topics/artificial-intelligence" },
  { name: "Automatización", url: "https://en.wikipedia.org/wiki/Automation" },
  { name: "APIs", url: "https://www.redhat.com/en/topics/api" }
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
                <motion.a
                  key={index}
                  href={tech.url}
                  target="_blank"
                 rel="noopener noreferrer"
                  className="tech-card"
                  variants={item}
                 whileHover={{
                    y: -6,
                    scale: 1.04,
                  }}
                >
                  <span>{tech.name}</span>
                </motion.a>
              ))}
      </motion.div>
    </section>
  );
}