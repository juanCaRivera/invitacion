import React from 'react';
import { motion } from 'framer-motion';

export default function Closing() {
  return (
    <section className="section-layout text-center">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-7xl mb-12 text-[#b8934d] leading-tight">
            Con mucha ilusión te esperamos en nuestro gran día
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-[1px] bg-[#b8934d]/40"></div>
            <p className="text-4xl md:text-6xl font-light text-[#54582f]" style={{ fontFamily: 'var(--font-title)' }}>
              Emanuel & Francis
            </p>
            <div className="w-16 h-[1px] bg-[#b8934d]/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
