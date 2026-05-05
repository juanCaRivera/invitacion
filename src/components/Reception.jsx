import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/wedding';
import { InviteMapLink } from './Timeline';
import recepcion from '../assets/recepcion.jpg';
import { LedImageWrap } from './Timeline';


export default function Reception() {
  return (
    <section className="section-layout">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center py-10 md:py-14"
        >
          {/* Icono 
          <div className="w-20 h-20 rounded-full bg-[#54582f]/5 flex items-center justify-center mb-6">
            <Hotel size={40} className="text-[#b8934d]" strokeWidth={1.5} />
          </div>*/}

          <LedImageWrap className="mb-6 inline-block">
            <img
              src={recepcion}
              alt=""
              className="mx-auto block h-[110px] w-auto object-contain select-none"
            />
          </LedImageWrap>

          {/* Título */}
          <h3
            className="text-4xl md:text-5xl mb-4 text-[#b8934d]"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            Recepción
          </h3>

          {/* Contenido siempre visible */}
          <div className="pt-6 flex flex-col items-center">
            <p className="text-xl md:text-2xl text-[#54582f] font-light mb-1 px-4">
              {WEDDING_DATA.reception.place}
            </p>

            <p className="text-lg md:text-xl text-[#54582f]/60 italic mb-4">
              {WEDDING_DATA.reception.subPlace}
            </p>

            <p className="text-lg md:text-xl font-semibold text-[#b8934d] tracking-widest uppercase mb-10">
              Hora: {WEDDING_DATA.reception.time}
            </p>

            <InviteMapLink href={WEDDING_DATA.reception.locationUrl} className="mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}