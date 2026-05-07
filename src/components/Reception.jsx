import React from 'react';
import SectionWrapper from './shared/SectionWrapper';
import DecoratedImage from './shared/DecoratedImage';
import InviteMapLink from './shared/InviteMapLink';
import { WEDDING_DATA } from '../config/wedding';
import recepcion from '../assets/recepcion.jpg';

export default function Reception() {
  return (
    <SectionWrapper innerClassName="flex flex-col items-center py-10 md:py-14">
      <DecoratedImage className="mb-6">
        <img
          src={recepcion}
          alt="Lugar de la recepción"
          className="mx-auto block h-[110px] w-auto object-contain select-none"
        />
      </DecoratedImage>

      <h3
        className="text-4xl md:text-5xl mb-4 text-[#b8934d]"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        Recepción
      </h3>

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
    </SectionWrapper>
  );
}