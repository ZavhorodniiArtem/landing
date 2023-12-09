import React from 'react';
import useParallax from '../hooks/useParallax';
import BonusBox from './BonusBox.tsx';

interface ParallaxProps {
  background: string;
  parallaxImage1: string;
  parallaxImage2: string;
}

const Parallax: React.FC<ParallaxProps> = ({ background, parallaxImage1, parallaxImage2 }) => {
  const parallaxRef = useParallax({ sensitivity: 20 });

  return (
    <div className="relative">
      <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="relative h-full">
          <img
            src={parallaxImage2}
            alt="Parallax Image 2"
            className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform-gpu"
          />
          <img
            src={parallaxImage1}
            alt="Parallax Image 1"
            className="absolute top-2 -left-[360px] w-full h-full transition-transform duration-300 transform-gpu"
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row 2xl:ml-16">
        <img src={background} alt="witcher" className="hidden md:block xl:h-screen z-50" />
        <div className="mt-16 xl:mt-56 2xl:ml-40">
          <BonusBox bonusCode="WITCHER" />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
