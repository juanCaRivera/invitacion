import React from 'react';
import { motion } from 'framer-motion';
import ringsImg from '../assets/anillos.png';
import { LedImageWrap } from './Timeline';
import fechaImg from '../assets/20.png'; // 👈 IMPORT CLAVE

export default function Invitation() {
  return (
    <section className="section-layout2 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-narrow"
      >
        <LedImageWrap className="mx-auto mb-10 inline-flex w-fit justify-center">
          <img
            src={ringsImg}
            alt="Anillos de boda"
            style={{ width: '100px' }}
          />
        </LedImageWrap>

        {/* Texto */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-10 text-[#54582f]">
          Tenemos el agrado de invitarte a nuestra boda
        </h2>

        <div className="w-32 h-[1px] bg-[#cfaa60] mx-auto mb-10 opacity-50"></div>

        {/* 🔥 FECHA COMO IMAGEN */}
        <div className="flex justify-center">
          <img
            src={fechaImg}
            alt="Fecha"
            style={{
              width: '280px',
              maxWidth: '90%',
              height: 'auto'
            }}
          />
        </div>

      </motion.div>
    </section>
  );
}