import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="cta-title">Y por último...</h2>
        <p className="cta-description"><span>Te decimos que estamos </span>
          <span className="bold">encantadas </span>
          <span>de que estés por aquí. Nuestro mayor deseo es crear una </span>
          <span className="bold">plataforma fiable</span>
          <span>, donde tengas todos los </span>
          <span className="bold">recursos necesarios a mano </span>
          <span>
            para disfrutar de la cerámica todos los días. Un espacio con las{" "}
          </span>
          <span className="bold">ideas claras </span>
          <span>y </span>
          <span className="bold">ordenadas</span>
          <span>
            . Y si por casualidad quieres saber sobre un tema que no ves por
            aquí,{" "}
          </span>
          <span className="bold">nos lo puedes contar por mail</span>
          <span>
            . Vamos actualizando la web a menudo con nuevas lecciones, pero
            seguramente habrá muchos puntos que se nos quedan en el tintero.
          </span></p>
        <button className="cta-button">Unirse</button>
      </motion.div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="footer-logo">Ceramica Web</div>
          <nav className="footer-nav">
            <div className="footer-nav-item">Inicio</div>
            <div className="footer-nav-item">Por si no lo sabías</div>
            <div className="footer-nav-item">Contacto</div>
          </nav>
          <div className="social-icons">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
