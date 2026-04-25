import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import heroImg from '../assets/Imagen2.jpg';

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Novios"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Elegant Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,1) 100%)'
        }}
      />

      {/* Content Container */}
      <motion.div
        className="container-narrow relative z-10 py-20"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight text-[#54582f]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Nos casamos
        </motion.h1>

        <motion.div 
          className="w-24 h-[1px] glow-gold mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        <motion.h2
          className="text-2xl md:text-4xl tracking-[0.3em] font-light uppercase neon-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {WEDDING_DATA.groom} & {WEDDING_DATA.bride}
        </motion.h2>
      </motion.div>
    </section>
  );
}
