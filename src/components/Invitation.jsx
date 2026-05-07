import React from 'react';
import SectionWrapper from './shared/SectionWrapper';
import DecoratedImage from './shared/DecoratedImage';
import ringsImg from '../assets/anillos.png';
import fechaImg from '../assets/20.png';

export default function Invitation() {
  return (
    <SectionWrapper layout="flush">
      <DecoratedImage className="mx-auto mb-10">
        <img
          src={ringsImg}
          alt="Anillos de boda"
          style={{ width: '100px' }}
        />
      </DecoratedImage>

      <h2
        className="text-3xl md:text-5xl lg:text-6xl mb-10 text-[#54582f]"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        Tenemos el agrado de invitarte a nuestra boda
      </h2>



      <div className="section-divider mb-10" />

      <div className="flex justify-center">
        <img
          src={fechaImg}
          alt="Fecha de la boda"
          style={{
            width: '280px',
            maxWidth: '90%',
            height: 'auto',
          }}
        />
      </div>
    </SectionWrapper>
  );
}