import React from 'react';
import { motion } from 'framer-motion';

export default function LoveNote() {
  return (
    <section className="section-layout text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="container-narrow"
      >
        <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-[#54582f]" style={{ fontFamily: 'var(--font-title)' }}>
          "El amor no se trata de cuántos días, meses o años han estado juntos. Se trata de cuánto se aman cada uno de esos días."
        </p>
      </motion.div>
    </section>
  );
}
