import React from 'react';
import { motion } from 'framer-motion';
import { Church, Hotel } from 'lucide-react';
import { WEDDING_DATA } from '../config/wedding';
import InviteMapLink from './InviteMapLink';

export default function DetailsGrid() {
  return (
    <section className="section-layout">
      <div className="flex flex-col gap-12 md:gap-16">
        
        {/* Ceremonia */}
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="text-center flex flex-col items-center min-h-[450px] justify-between py-12 md:py-16"
          >
            <div className="w-16 h-16 rounded-full bg-[#54582f]/5 flex items-center justify-center mb-6">
              <Church size={32} className="text-[#b8934d]" strokeWidth={1.5} />
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl mb-6 text-[#b8934d]" style={{ fontFamily: 'var(--font-title)' }}>
                Ceremonia
              </h3>
              
              <p className="text-xl md:text-2xl text-[#54582f] font-light mb-2">
                {WEDDING_DATA.ceremony.place}
              </p>
              <p className="text-lg md:text-xl font-semibold text-[#b8934d] tracking-widest uppercase mb-0">
                Hora: {WEDDING_DATA.ceremony.time}
              </p>
            </div>
            
            <div className="mt-10 flex justify-center">
              <a
                href={WEDDING_DATA.ceremony.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="invite-map-link group inline-flex max-w-full items-center gap-4 text-left no-underline outline-none transition-[opacity,color] duration-300 hover:opacity-[0.92] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#b8934d]/35 focus-visible:ring-offset-0"
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

        {/* Recepción */}
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-center flex flex-col items-center min-h-[450px] justify-between py-12 md:py-16"
          >
            <div className="w-16 h-16 rounded-full bg-[#54582f]/5 flex items-center justify-center mb-6">
              <Hotel size={32} className="text-[#b8934d]" strokeWidth={1.5} />
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl mb-6 text-[#b8934d]" style={{ fontFamily: 'var(--font-title)' }}>
                Recepción
              </h3>
              
              <div className="mb-0">
                <p className="text-xl md:text-2xl text-[#54582f] font-light mb-1">
                  {WEDDING_DATA.reception.place}
                </p>
                <p className="text-lg md:text-xl text-[#54582f]/60 italic mb-4">
                  {WEDDING_DATA.reception.subPlace}
                </p>
                <p className="text-lg md:text-xl font-semibold text-[#b8934d] tracking-widest uppercase">
                  Hora: {WEDDING_DATA.reception.time}
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
              <a
                href={WEDDING_DATA.reception.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="invite-map-link group inline-flex max-w-full items-center gap-4 text-left no-underline outline-none transition-[opacity,color] duration-300 hover:opacity-[0.92] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#b8934d]/35 focus-visible:ring-offset-0"
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

      </div>
    </section>
  );
}
