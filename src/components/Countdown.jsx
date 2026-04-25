import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { WEDDING_DATA } from '../config/wedding';

// 🔥 Dígito refinado (compacto + elegante)
const Digit = ({ digit }) => (
  <div className="relative w-[22px] md:w-[28px] h-10 md:h-14 overflow-hidden flex items-center justify-center">
    <AnimatePresence mode="wait">
      <motion.span
        key={digit}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -18, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="text-3xl md:text-5xl font-light text-[#54582f] leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        {digit}
      </motion.span>
    </AnimatePresence>
  </div>
);

// 🔥 Número más compacto (CLAVE PRO)
const TimeNumber = ({ value }) => {
  const digits = String(value).padStart(2, '0').split('');
  return (
    <div className="flex items-center -space-x-[4px] md:-space-x-[6px]">
      {digits.map((d, i) => (
        <Digit key={i} digit={d} />
      ))}
    </div>
  );
};

// 🔥 Unidad refinada
const TimeUnit = ({ value, label, showColon }) => (
  <div className="flex items-center">

    <div className="flex flex-col items-center px-2 md:px-3">
      <TimeNumber value={value} />

      {/* 🔥 Label más elegante y separado */}
      <span className="text-[7px] md:text-[9px] tracking-[0.45em] uppercase text-[#b8934d]/70 mt-3">
        {label}
      </span>
    </div>

    {/* 🔥 Separador elegante */}
    {showColon && (
      <span className="text-xl md:text-3xl text-[#b8934d]/40 font-light mx-1 md:mx-2">
        :
      </span>
    )}
  </div>
);

export default function Countdown() {
  const timeLeft = useCountdown(WEDDING_DATA.date);
  const totalDays = (timeLeft.weeks * 7) + timeLeft.days;

  const units = [
    { label: 'Días', value: totalDays },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];

  if (timeLeft.isExpired) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom text-center">

        {/* Título */}
        <h2 className="text-lg md:text-xl tracking-[0.5em] uppercase text-[#54582f]/60 font-light mb-12">
          Faltan
        </h2>

        {/* 🔥 Layout refinado */}
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-x-1 md:gap-x-2">
          {units.map((unit, index) => (
            <TimeUnit
              key={unit.label}
              value={unit.value}
              label={unit.label}
              showColon={index !== units.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}