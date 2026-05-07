import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import { EASE } from './shared/AnimationConfig';
import DecoratedImage from './shared/DecoratedImage';
import novioImg from '../assets/novio.png';
import olivoImg from '../assets/olivo.png';

export default function BibleText() {
  return (
    <section className="overflow-hidden">
      <div
        className="container-narrow"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {/* Olive branch decoration */}
        <div className="flex w-full justify-center">
          <motion.img
            src={olivoImg}
            alt="Rama de olivo decorativa"
            className="w-[494.667px] max-w-full object-contain opacity-80"
            style={{
              imageRendering: 'auto',
              filter: 'contrast(1.04) saturate(1.05)',
            }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.7, ease: EASE }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center py-10 md:py-14"
        >
          {/* SVG ornament */}
          <motion.div
            className="mb-7 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
          >
            <svg
              width="74"
              height="32"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 45C50 45 40 30 20 30C5 30 0 40 0 40" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M50 45C50 45 60 30 80 30C95 30 100 40 100 40" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="25" cy="28" r="2" fill="var(--color-gold)" />
              <circle cx="75" cy="28" r="2" fill="var(--color-gold)" />
            </svg>
          </motion.div>

          {/* Bible verse */}
          <motion.p
            className="text-2xl md:text-3xl font-normal italic leading-relaxed md:leading-[1.85] mb-8 text-[var(--color-text)]"
            style={{ textWrap: 'balance', fontFamily: 'var(--font-title)' }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
          >
            &ldquo;{WEDDING_DATA.bibleVerse.text}&rdquo;
          </motion.p>

          {/* Reference with decorative lines */}
          <motion.div
            className="mb-9 inline-flex items-center gap-3 md:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          >
            <span className="h-px w-8 md:w-10 bg-[var(--color-gold-light)]/80" />
            <span className="text-xs md:text-sm uppercase tracking-[0.34em] text-[var(--color-gold)] font-semibold">
              {WEDDING_DATA.bibleVerse.reference}
            </span>
            <span className="h-px w-8 md:w-10 bg-[var(--color-gold-light)]/80" />
          </motion.div>

          {/* Decorative icon */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.48, duration: 0.6, ease: EASE }}
          >
            <DecoratedImage>
              <img
                src={novioImg}
                alt="Icono decorativo"
                className="h-[100px] w-auto object-contain opacity-90"
              />
            </DecoratedImage>
          </motion.div>

          {/* Blessing text */}
          <motion.p
            className="text-base md:text-lg font-light italic leading-relaxed text-[var(--color-text)] px-2"
            style={{ textWrap: 'balance', fontFamily: 'var(--font-title)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
          >
            Con la bendición de Dios y nuestros queridos padres
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
