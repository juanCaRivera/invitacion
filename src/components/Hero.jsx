import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import heroImg from '../assets/Imagen2.jpg';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap');

        @keyframes ledGlow {
          0%,
          100% {
            text-shadow:
              0 0 6px rgba(255, 255, 255, 0.9),
              0 0 14px rgba(255, 255, 255, 0.75),
              0 0 24px rgba(255, 255, 255, 0.55),
              0 0 36px rgba(255, 255, 255, 0.35);
          }
          50% {
            text-shadow:
              0 0 10px rgba(255, 255, 255, 1),
              0 0 22px rgba(255, 255, 255, 0.9),
              0 0 36px rgba(255, 255, 255, 0.75),
              0 0 52px rgba(255, 255, 255, 0.55);
          }
        }

        .hero-led-text {
          animation: ledGlow 2.2s ease-in-out infinite;
        }

        @keyframes floatGentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes linePulse {
          0%,
          100% {
            opacity: 0.88;
            box-shadow:
              0 0 14px 2px rgba(214, 190, 130, 0.65),
              0 0 28px 6px rgba(214, 190, 130, 0.35);
          }
          50% {
            opacity: 1;
            box-shadow:
              0 0 24px 4px rgba(226, 199, 129, 0.9),
              0 0 42px 10px rgba(226, 199, 129, 0.55);
          }
        }

        .hero-panel {
          background:
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(2px);
          border-radius: 1rem;
          padding: clamp(1.4rem, 2.8vw, 2.4rem) clamp(1.2rem, 4vw, 3.2rem);
          animation: floatGentle 6s ease-in-out infinite;
        }

        .hero-ornamental-line {
          animation: linePulse 2.8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative w-full min-h-dvh flex items-center justify-center text-center overflow-hidden">

        {/* Background Image — optimizado para LCP */}
        <img
          src={heroImg}
          alt="Novios"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        />

        {/* Vignette perimetral — da profundidad sin tapar la foto */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 25%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        {/* Fade inferior — transicion suave hacia el siguiente segmento */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 55%, rgba(255,255,255,1) 100%)',
          }}
        />

        {/* Content */}
        <motion.div
          className="container-narrow relative z-10 py-20 flex flex-col items-center"
          style={{ willChange: 'opacity, transform' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="hero-panel">
            <motion.p
              style={{
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                marginBottom: '0.9rem',
              }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
            >
             
            </motion.p>

            {/* Titulo principal */}
            <motion.h1
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
                lineHeight: 1.08,
                color: '#ffffff',
                textShadow:
                  '0 2px 16px rgba(0,0,0,0.45), 0 0 28px rgba(255,255,255,0.4)',
              }}
              className="mb-5"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1.1, ease: EASE }}
            >
              Nos casamos
            </motion.h1>

            {/* Linea ornamental con scaleX desde el centro */}
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

            {/* Nombres */}
            <motion.h2
              className="hero-led-text"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.1rem, 3.5vw, 2.25rem)',
                letterSpacing: '0.28em',
                color: '#ffffff',
                textTransform: 'uppercase',
                textShadow: '0 0 12px rgba(255,255,255,0.7)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1, ease: EASE }}
            >
              {WEDDING_DATA.groom} &amp; {WEDDING_DATA.bride}
            </motion.h2>
          </div>

        </motion.div>

      </section>
    </>
  );
}