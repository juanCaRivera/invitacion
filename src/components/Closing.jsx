import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import olivoFinalImg from '../assets/olivofinal.jpg';

export default function Closing() {
  return (
    <section className="section-layout text-center">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 1.2 }}
        >
          <h2
            className="text-5xl md:text-7xl mb-12 text-[#b8934d] leading-tight"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            Con mucha ilusión te esperamos en nuestro gran día
          </h2>

          <div className="flex flex-col items-center gap-6">
            <div className="section-divider" />
            <p
              className="text-4xl md:text-6xl font-light text-[#54582f]"
              style={{ fontFamily: 'var(--font-title)' }}
            >
              {WEDDING_DATA.groom} &amp; {WEDDING_DATA.bride}
            </p>
            <div className="section-divider" />
          </div>
        </motion.div>

        {/* Bottom Olive branch decoration */}
        <div className="flex w-full justify-center mt-16 md:mt-24">
          <motion.img
            src={olivoFinalImg}
            alt="Rama de olivo decorativa final"
            className="w-[494.667px] max-w-full object-contain opacity-80"
            style={{
              imageRendering: 'auto',
              filter: 'contrast(1.04) saturate(1.05)',
            }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
}
