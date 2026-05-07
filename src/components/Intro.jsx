import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const EASE = [0.22, 1, 0.36, 1];

export default function Intro({ onOpen }) {
  return (
    <section className="intro" id="intro-screen">
      {/* Envelope image with floating animation */}
      <motion.img
        src="/images/boda.png"
        id="sobre"
        className="envelope-img"
        alt="Sobre de invitación"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      {/* Open button with staggered entrance */}
      <motion.div
        className="open-btn"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label="Abrir invitación de boda"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
          }
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
      >
        Abrir invitación
      </motion.div>
    </section>
  );
}
