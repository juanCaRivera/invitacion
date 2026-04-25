import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Hero from './components/Hero';
import BibleText from './components/BibleText';
import Invitation from './components/Invitation';
import Countdown from './components/Countdown';
import Ceremony from './components/Ceremony';
import Reception from './components/Reception';
import Timeline from './components/Timeline';
import Gifts from './components/Gifts';
import Recommendations from './components/Recommendations';
import LoveNote from './components/LoveNote';
import Confirmation from './components/Confirmation';
import Closing from './components/Closing';
import confetti from 'canvas-confetti';
import bgOlivo from './assets/fondo2.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.4 } // Shot from slightly above center to cascade down
    });
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.backgroundColor = '#54582f';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [isOpen]);

  return (
    <>
      {!isOpen && <Intro onOpen={handleOpen} />}

      {isOpen && (
        <main className="relative w-full overflow-x-hidden">
          {/* Global Background Layer */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <img 
              src={bgOlivo} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/30" />
          </div>

          <div className="relative z-10">
            <Hero />
            <BibleText />
            <Invitation />
            <Countdown />
            <Ceremony />
            <Reception />
            <Timeline />
            <Gifts />
            <Recommendations />
            <LoveNote />
            <Confirmation />
            <Closing />
          </div>
        </main>
      )}
    </>
  );
}

export default App;
