import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './shared/SectionWrapper';
import DecoratedImage from './shared/DecoratedImage';
import recomendaciones from '../assets/recomendaciones.jpg';

export default function Recommendations() {
  const items = [
    'Agradecemos su llegada a tiempo a la ceremonia.',
    'Confirmar su asistencia.',
    'Aunque nos gusten los niños, esta será una celebración solo para adultos.',
    'Venir con ganas de celebrar con nosotros este momento tan especial.',
  ];

  return (
    <SectionWrapper>
      <div className="mb-6 flex items-center justify-center">
        <DecoratedImage>
          <img
            src={recomendaciones}
            alt="Recomendaciones"
            className="mx-auto block h-[110px] w-auto object-contain select-none"
          />
        </DecoratedImage>
      </div>

      <h3
        className="text-4xl mb-10 text-[#b8934d]"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        Recomendaciones
      </h3>

      <ul className="text-left max-w-md mx-auto space-y-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start text-xl font-light text-[#54582f]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#b8934d] mr-6 mt-2 shrink-0 shadow-[0_0_8px_rgba(184,147,77,0.4)]" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
