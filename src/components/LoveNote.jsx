import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from './shared/AnimationConfig';

export default function LoveNote() {
  return (
    <section className="section-layout text-center">
      <motion.div
        {...scaleIn}
        transition={{ duration: 1.2, ease: scaleIn.transition.ease }}
        className="container-narrow"
      >
        <p
          className="text-3xl md:text-4xl font-light italic leading-relaxed text-[#54582f]"
          style={{ textWrap: 'balance', fontFamily: 'var(--font-title)' }}
        >
          &ldquo;El amor no se trata de cuántos días, meses o años han estado juntos.
          Se trata de cuánto se aman cada uno de esos días.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
