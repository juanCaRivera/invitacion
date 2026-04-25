import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import novioImg from '../assets/novio.png';

export default function BibleText() {
  return (
    <section className="section-layout2 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="container-narrow flex flex-col items-center text-center"
      >
        {/* 1. Icono Inicial */}
        <div className="mb-8 opacity-60">
          <svg width="60" height="30" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 45C50 45 40 30 20 30C5 30 0 40 0 40" stroke="#6B8E23" strokeWidth="1" strokeLinecap="round" />
            <path d="M50 45C50 45 60 30 80 30C95 30 100 40 100 40" stroke="#6B8E23" strokeWidth="1" strokeLinecap="round" />
            <circle cx="25" cy="28" r="2" fill="#6B8E23" />
            <circle cx="75" cy="28" r="2" fill="#6B8E23" />
          </svg>
        </div>

        {/* 2. Versículo */}
        <p className="text-2xl md:text-3xl font-light text-[#54582f] italic mb-6 leading-relaxed">
          "{WEDDING_DATA.bibleVerse.text}"
        </p>

        {/* 3. Referencia */}
        <span className="text-sm md:text-base uppercase tracking-[0.4em] text-[#b8934d] font-semibold mb-12">
          {WEDDING_DATA.bibleVerse.reference}
        </span>

        {/* 4. Imagen de Pareja (Más Pequeña y Pegada al Texto) */}
        <div className="flex justify-center mb-4">
          <div className="relative w-12 md:w-14">
            <img
              src={novioImg}
              alt="Decoración"
              className="w-full h-auto block object-contain opacity-80"
              style={{ maxWidth: '100%', display: 'block' }}
            />
          </div>
        </div>

        {/* 5. Texto Final */}
        <p className="text-lg md:text-xl font-medium text-[#54582f] tracking-widest uppercase">
          Con la bendición de Dios y nuestros queridos padres
        </p>
      </motion.div>
    </section>
  );
}
