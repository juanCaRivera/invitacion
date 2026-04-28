import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import novioImg from '../assets/novio.png';
import olivoImg from '../assets/olivo.png';

const EASE = [0.22, 1, 0.36, 1];

export default function BibleText() {
  return (
    <section className="overflow-hidden">
      <div
        className="container-narrow"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
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

          <motion.p
            className="text-2xl md:text-3xl font-normal italic leading-relaxed md:leading-[1.85] mb-8 text-[var(--color-text)]"
            style={{
              textWrap: 'balance',
              fontStyle: 'italic',
              fontFamily: 'var(--font-title)',
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
          >
            "{WEDDING_DATA.bibleVerse.text}"
          </motion.p>

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

          <motion.span
            role="img"
            tabIndex={0}
            aria-label="Icono decorativo"
            className="group relative mb-8 inline-flex h-5 w-5 items-center justify-center rounded-full outline-none"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.48, duration: 0.6, ease: EASE }}
          >
            <img
              src={novioImg}
              alt=""
              aria-hidden="true"
              className="h-[100px] w-3 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              style={{
                boxShadow:
                  '0 0 10px 2px rgba(184,147,77,0.75), 0 0 18px 6px rgba(184,147,77,0.45)',
                border: '1px solid rgba(184,147,77,0.75)',
              }}
            />
          </motion.span>

          <motion.p
            className="text-base md:text-lg font-light italic leading-relaxed text-[var(--color-text)] px-2"
            style={{ textWrap: 'balance', fontFamily: 'var(--font-title)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
          >
            Con la bendicion de Dios y nuestros queridos padres
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
