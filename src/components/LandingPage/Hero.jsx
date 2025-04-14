import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <TypeAnimation
              sequence={[
                "te ayudamos a convertir tu pasión en un negocio rentable.",
              ]}
              speed={50}
              cursor={true}
              repeat={0}
            />
          </h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Si ya no sabes qué hacer con todas las tazas que estás haciendo, véndelas.
          </motion.p>
        </div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <button className="button-outline">Leer más</button>
          <button className="button-solid">Registrarse</button>
        </motion.div>
      </div>

      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92820650e5e0c4ffbb9dae2bb1fa3539a4422100"
        alt="Container"
        className="hero-image"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Hero;
