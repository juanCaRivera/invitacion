import React from 'react';
import SectionWrapper from './shared/SectionWrapper';
import DecoratedImage from './shared/DecoratedImage';
import regalos from '../assets/regalos3.jpg';

export default function Gifts() {
  return (
    <SectionWrapper>
      <DecoratedImage className="mb-6">
        <img
          src={regalos}
          alt="Regalos"
          className="mx-auto block h-[110px] w-auto object-contain select-none"
        />
      </DecoratedImage>

      <h3
        className="text-4xl mb-8 text-[#b8934d]"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        Muestras de cariños
      </h3>

      <p className="text-xl font-light text-[#54582f] leading-relaxed">
        Su compañía en este día tan especial es el mejor regalo que podemos recibir.
        Sin embargo, si desean expresarnos un detalle adicional, hemos preparado algunas opciones:
      </p>

      <ul className="list-disc pl-6 text-xl font-light text-[#54582f] leading-relaxed mt-4 text-left max-w-md mx-auto">
        <li>Mesa de reglos</li>
        <li>Lluvia de sobres</li>
      </ul>

      <p className="text-xl font-light text-[#54582f] leading-relaxed mt-4">
        Lo más importante para nosotros es compartir este momento con ustedes
        y celebrar juntos el inicio de nuestra nueva etapa.
      </p>
    </SectionWrapper>
  );
}
