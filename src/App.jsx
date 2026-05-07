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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.4 },
    });
    setIsOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  }, [isOpen]);

  return (
    <>
      {!isOpen && <Intro onOpen={handleOpen} />}

      {isOpen && (
        <main className="w-full overflow-x-hidden bg-white">
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
        </main>
      )}
    </>
  );
}

export default App;