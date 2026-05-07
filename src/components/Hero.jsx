import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import { EASE } from './shared/AnimationConfig';
import heroImg from '../assets/Imagen2.jpg';

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center text-center overflow-hidden">

      {/* Background Image — optimized for LCP */}
      <img
        src={heroImg}
        alt="Novios"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
      />

      {/* Vignette — depth without blocking the photo */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 25%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Bottom fade — smooth transition to next section */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 55%, rgba(255,255,255,1) 100%)',
        }}
      />

      {/* Content — NO background panel, text floats directly over the image */}
      <motion.div
        className="container-narrow relative z-10 py-20 flex flex-col items-center"
        style={{ willChange: 'opacity, transform' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {/* Main title */}
        <motion.h1
          className="mb-5"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(3.2rem, 10vw, 7rem)',
            lineHeight: 1.08,
            color: '#ffffff',
            textShadow:
              '0 2px 16px rgba(0,0,0,0.45), 0 0 28px rgba(255,255,255,0.4)',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1.1, ease: EASE }}
        >
          Nos casamos
        </motion.h1>

        {/* Ornamental line */}
        <motion.div
          className="hero-ornamental-line mx-auto mb-6 origin-center"
          style={{
            height: '2px',
            width: '7rem',
            background:
              'linear-gradient(to right, transparent, #e2c781, transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.9, ease: EASE }}
        />

        {/* Names */}
        <motion.h2
          className="hero-led-text"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            lineHeight: 1.15,
            letterSpacing: '0.22em',
            color: '#ffffff',
            textTransform: 'uppercase',
            textShadow:
              '0 2px 12px rgba(0,0,0,0.35), 0 0 18px rgba(255,255,255,0.55)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1, ease: EASE }}
        >
          {WEDDING_DATA.groom} &amp; {WEDDING_DATA.bride}
        </motion.h2>
      </motion.div>

    </section>
  );
}