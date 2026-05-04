import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../config/wedding';
import iglesiaImg from '../assets/iglesia4.jpg';

export default function Ceremony() {
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
          {/* Icono */}
  {/*       <div className="w-20 h-20 rounded-full bg-[#54582f]/5 flex items-center justify-center mb-6">
            <Church size={40} className="text-[#b8934d]" strokeWidth={1.5} />
          </div>
*/}
<img
  src={iglesiaImg}
  alt=""
  className="mb-6 mx-auto block h-[110px] w-auto object-contain select-none"
/>

          {/* Título */}
          <h3
            className="text-4xl md:text-5xl mb-4 text-[#b8934d]"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            Ceremonia
          </h3>

          {/* Contenido siempre visible */}
          <div className="pt-6 flex flex-col items-center">
            <p className="text-xl md:text-2xl text-[#54582f] font-light mb-2 px-4">
              {WEDDING_DATA.ceremony.place}
            </p>

            <p className="text-lg md:text-xl font-semibold text-[#b8934d] tracking-widest uppercase mb-10">
              Hora: {WEDDING_DATA.ceremony.time}
            </p>

            <a
              href={WEDDING_DATA.ceremony.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="invite-map-link group mx-auto inline-flex max-w-full items-center gap-4 text-left no-underline outline-none transition-[opacity,color] duration-300 hover:opacity-[0.92] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#b8934d]/35 focus-visible:ring-offset-0"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b8934d]/45 text-[#b8934d] transition-[border-color,background-color,color] duration-300 group-hover:border-[#b8934d] group-hover:bg-[#b8934d]/[0.08]"
              >
                <MapPin size={20} strokeWidth={1.5} />
              </span>
              <span className="min-w-0 text-[0.8125rem] font-normal uppercase leading-snug tracking-[0.2em] text-[#54582f]/90 transition-colors duration-300 group-hover:text-[#b8934d] md:text-sm md:tracking-[0.24em]">
                Ver mapa
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}