import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Wine, Utensils } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      time: '5:00 PM',
      title: 'Ceremonia',
      subtitle: 'Parroquia Ntra. Sra. de la Candelaria',
      Icon: Heart
    },
    {
      time: '6:00 PM',
      title: 'Cóctel',
      subtitle: 'Recepción del Hotel',
      Icon: Wine
    },
    {
      time: '8:00 PM',
      title: 'Banquete',
      subtitle: 'Salones Madroño y Almendro',
      Icon: Utensils
    },
  ];

  return (
    <section className="section-layout">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="glass-card py-16 md:py-20 relative overflow-hidden"
        >
          {/* 🔥 Título */}
          <h2 className="section-title mb-20 text-center">Itinerario</h2>

          {/* 🔥 Línea base */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#b8934d]/20 -translate-x-1/2"></div>

          {/* 🔥 Línea animada */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-[2px] bg-[#b8934d] -translate-x-1/2 origin-top"
          />

          {/* 🔥 Glow animado en línea */}
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-0 w-[4px] h-24 bg-[#b8934d]/40 blur-md -translate-x-1/2"
          />

          <div className="flex flex-col gap-20">

            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative flex flex-col md:flex-row items-center"
                >

                  {/* 🔹 CONTENIDO */}
                  <div
                    className={`w-full md:w-1/2 ${isLeft
                      ? 'md:pr-16 text-right'
                      : 'md:order-2 md:pl-16 text-left'
                      }`}
                  >
                    <div className="max-w-md mx-auto md:mx-0">

                      <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#b8934d]/80 block mb-2">
                        {event.time}
                      </span>

                      <h4
                        className="text-2xl md:text-3xl text-[#54582f] mb-1"
                        style={{ fontFamily: 'var(--font-title)' }}
                      >
                        {event.title}
                      </h4>

                      <p className="text-base md:text-lg text-[#54582f]/60 italic leading-relaxed">
                        {event.subtitle}
                      </p>

                    </div>
                  </div>

                  {/* 🔥 ICONO PREMIUM */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#b8934d]/40 shadow-lg my-6 md:my-0 shrink-0"
                  >

                    {/* Glow base */}
                    <div className="absolute w-full h-full rounded-full bg-[#b8934d]/20 blur-md"></div>

                    {/* Glow animado */}
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-full h-full rounded-full bg-[#b8934d]/20"
                    />

                    <event.Icon
                      size={22}
                      className="text-[#b8934d] relative z-10"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Espacio */}
                  <div className="hidden md:block w-1/2"></div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>
      </div>
    </section>
  );
}