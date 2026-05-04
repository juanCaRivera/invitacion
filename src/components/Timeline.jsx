import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { WEDDING_DATA } from '../config/wedding';
import iglesiaImg from '../assets/iglesia4.jpg';
import recepcionImg from '../assets/recepcion.jpg';

function HeartNode() {
  return (
    <motion.div
      whileHover={{ scale: 1.12 }}
      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#b8934d]/40 bg-white shadow-lg"
    >
      <div className="absolute h-full w-full rounded-full bg-[#b8934d]/20 blur-md" />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute h-full w-full rounded-full bg-[#b8934d]/20"
      />
      <Heart
        size={22}
        strokeWidth={1.35}
        className="relative z-10 text-[#b8934d]"
        fill="rgba(184, 147, 77, 0.22)"
      />
    </motion.div>
  );
}

function EventBlock({ event, align }) {
  const isRight = align === 'right';

  return (
    <div
      className={`flex min-w-0 max-w-md flex-col gap-2 ${
        isRight
          ? 'items-end justify-center text-right md:ml-auto md:pr-2'
          : 'items-start justify-center text-left md:mr-auto md:pl-2'
      }`}
    >

      <img
        src={event.image}
        alt={event.imageAlt}
        className="h-[100px] w-auto select-none object-contain sm:h-12 md:h-14"
      />
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[#b8934d]/80 sm:text-xs md:text-sm md:tracking-[0.35em]">
        {event.time}
      </span>
      <h4
        className="text-xl text-[#54582f] sm:text-2xl md:text-3xl"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        {event.title}
      </h4>
    </div>
  );
}

export default function Timeline() {
  const events = [
    {
      time: WEDDING_DATA.ceremony.time,
      title: 'Ceremonia religiosa',
      image: iglesiaImg,
      imageAlt: 'Ceremonia',
    },
    {
      title: 'Cóctel',
      image: recepcionImg,
      time: '6:00 PM',
      imageAlt: 'Cóctel',
    },
    {
      time: WEDDING_DATA.reception.time,
      title: 'Recepción',
      image: recepcionImg,
      imageAlt: 'Recepción',
    },
    {
      title: 'Cena',
      image: recepcionImg,
      time: '8:00 PM',
      imageAlt: 'Cena',
    },
  ];

  return (
    <section className="section-layout">
      <div className="container-narrow">
        <div className="relative py-16 md:py-20">
          <h2 className="section-title relative z-[1] mb-16 text-center md:mb-20">
            Itinerario
          </h2>

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[2px] -translate-x-1/2 bg-[#b8934d]/20"
              aria-hidden
            />

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-0 z-0 w-[2px] origin-top -translate-x-1/2 bg-[#b8934d]"
            />

            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-24 w-[4px] -translate-x-1/2 bg-[#b8934d]/40 blur-md"
              aria-hidden
            />

            <div className="relative z-[1] flex flex-col gap-16 md:gap-20">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: '0px 0px -48px 0px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
                  className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 sm:gap-x-5 md:gap-x-10"
                >
                  {isLeft ? (
                    <EventBlock event={event} align="right" />
                  ) : (
                    <div className="min-w-0" aria-hidden />
                  )}

                  <div className="flex justify-center px-0.5">
                    <HeartNode />
                  </div>

                  {isLeft ? (
                    <div className="min-w-0" aria-hidden />
                  ) : (
                    <EventBlock event={event} align="left" />
                  )}
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
