import React from 'react';
import './Intro.css';

export default function Intro({ onOpen }) {
  return (
    <section className="intro" id="intro-screen">
      <div className="lights">
        <div className="bulb"></div>
        <div className="bulb"></div>
        <div className="bulb"></div>
        <div className="bulb"></div>
        <div className="bulb"></div>
      </div>
      <img src="/images/boda.png" id="sobre" className="envelope-img" alt="Sobre de invitación" />
      <div className="open-btn" onClick={onOpen} aria-label="Abrir invitación de boda">Abrir invitación</div>
    </section>
  );
}
