import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Confirmation() {
  // Auto confetti when component appears
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#54582f', '#cfaa60', '#ffffff'],
      });
    }, 500); // slight delay for smoother effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-layout text-center">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => {
              confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#54582f', '#cfaa60', '#ffffff'],
              });
            }}
            className="btn-primary btn-gold text-lg px-12 py-5"
          >
            Confirmar asistencia
          </button>
        </motion.div>
      </div>
    </section>
  );
}
