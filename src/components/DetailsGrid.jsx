import React from 'react';
import { motion } from 'framer-motion';
import { Church, Hotel, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../config/wedding';

export default function DetailsGrid() {
  return (
    <section className="section-layout">
      <div className="flex flex-col gap-12 md:gap-16">
        
        {/* Card 1: Ceremonia */}
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="glass-card text-center flex flex-col items-center min-h-[450px] justify-between py-12 md:py-16"
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
            
            <div className="mt-10">
              <a 
                href={WEDDING_DATA.ceremony.locationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 px-12 py-4"
              >
                <MapPin size={20} />
                <span className="text-lg">Cómo llegar</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Card 2: Recepción */}
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="glass-card text-center flex flex-col items-center min-h-[450px] justify-between py-12 md:py-16"
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
            
            <div className="mt-10">
              <a 
                href={WEDDING_DATA.reception.locationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 px-12 py-4"
              >
                <MapPin size={20} />
                <span className="text-lg">Cómo llegar</span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
