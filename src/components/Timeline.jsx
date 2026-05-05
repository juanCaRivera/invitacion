import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
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

export function LedImageWrap({ children, className = '', ariaLabel = 'Imagen con brillo al interactuar' }) {
  const [burst, setBurst] = useState(false);
  const timerRef = useRef(null);

  const startBurst = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setBurst(true);
    timerRef.current = window.setTimeout(() => {
      setBurst(false);
      timerRef.current = null;
    }, 2200);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const cls = ['invite-img-led-trigger', burst ? 'invite-img-led-burst' : '', className].filter(Boolean).join(' ');

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={() => {
        startBurst();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startBurst();
        }
      }}
      className={cls}
    >
      {children}
    </span>
  );
}

export function InviteMapLink({ href, label = 'Ver mapa', className = '' }) {
  const i = label.indexOf(' ');
  const a = i > -1 ? label.slice(0, i) : label;
  const b = i > -1 ? label.slice(i + 1).trim() : '';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir mapa"
      className={
        'invite-map-link invite-map-link-pair group inline-flex max-w-full items-center text-left no-underline outline-none transition-[opacity,color] duration-300 hover:opacity-[0.92] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#b8934d]/35 focus-visible:ring-offset-0 ' +
        className
      }
    >
      <span className="relative inline-flex items-center">
        <span
          aria-hidden
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b8934d]/45 bg-white/90 text-[#b8934d] shadow-sm transition-[border-color,background-color,box-shadow] duration-300 group-hover:border-[#b8934d] group-hover:bg-[#b8934d]/[0.08] group-hover:shadow-[0_0_0_1px_rgba(184,147,77,0.2)]"
        >
          <MapPin size={20} strokeWidth={1.5} />
        </span>
        <span className="relative z-0 -ml-6 flex h-[3.35rem] w-[3.35rem] shrink-0 flex-col items-center justify-center rounded-full border border-[#b8934d]/35 bg-white/55 py-1 pl-7 pr-2 text-center shadow-sm backdrop-blur-[1px] transition-[border-color,color,background-color] duration-300 group-hover:border-[#b8934d] group-hover:bg-[#faf9f6]/92 group-hover:text-[#b8934d] md:h-[3.5rem] md:w-[3.5rem] md:pl-8">
          <span className="text-[0.58rem] font-normal uppercase leading-none tracking-[0.18em] text-[#54582f]/90 transition-colors group-hover:text-[#b8934d] md:text-[0.62rem] md:tracking-[0.2em]">
            {a}
          </span>
          {b ? (
            <span className="mt-0.5 text-[0.58rem] font-normal uppercase leading-none tracking-[0.18em] text-[#54582f]/90 transition-colors group-hover:text-[#b8934d] md:text-[0.62rem] md:tracking-[0.2em]">
              {b}
            </span>
          ) : null}
        </span>
      </span>
    </a>
  );
}
