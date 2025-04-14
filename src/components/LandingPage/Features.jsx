import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        <div className="feature-cards">
          <motion.div 
            className="feature-card brown-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/654814d986d8c122aedee82d0f4a408362942136"
              alt="message-question-square"
              className="feature-icon"
            />
            <h2 className="feature-title">
              ¿Te apasiona la cerámica pero no sabes cómo convertirla en tu profesión?
            </h2>
            <p className="feature-description">
            Nosotras, Laura y Paula, vivimos ese proceso. Empezamos con dudas
              y experimentos, sin saber cómo dar el siguiente paso. Hoy vivimos
              de lo que amamos y queremos compartir contigo todo lo que
              aprendimos.
            </p>
          </motion.div>

         <div className="feature-card-pink-border-container"><motion.div 
            className="feature-card pink-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74639e0b62474897ef98c1e9957aa413bfc6213d"
              alt="message-question-square"
              className="feature-icon"
            />
            <h2 className="feature-title">
              ¿Sientes que emprender en cerámica es abrumador?
            </h2>
            <p className="feature-description">
            Lo entendemos. Cursos largos y llenos de teoría pueden frenar más
              de lo que ayudan. Por eso creamos un método práctico y concreto,
              con lecciones fáciles y tips que te guiarán paso a paso en tu
              camino.
            </p>
          </motion.div></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
