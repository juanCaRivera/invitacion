import React from 'react';
import { motion } from 'framer-motion';
import ringsImg from '../assets/anillos.png';

export default function Invitation() {
  return (
    <section className="section-layout2 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0 }}
        className="container-narrow"
      >
        {/* Imagen de Anillos (Control Estricto de Tamaño) */}
        <div className="flex justify-center mb-10">
          <div className="w-24 md:w-32">
            <img
              src={ringsImg}
              alt="Anillos de boda"
              className="w-full h-auto block object-contain"
              style={{ maxWidth: '100%', display: 'block' }}
            />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-10 text-[#54582f] leading-snug">
          Tenemos el agrado de invitarte a nuestra boda
        </h2>
        <div className="w-32 h-[1px] bg-[#cfaa60] mx-auto mb-10 opacity-50"></div>
        <p className="text-4xl md:text-7xl font-light tracking-widest text-[#b8934d]" style={{ fontFamily: 'var(--font-title)' }}>
          20 / Junio / 2026
        </p>
      </motion.div>
    </section>
  );
}
