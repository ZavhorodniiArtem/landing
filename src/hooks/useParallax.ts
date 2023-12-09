import { useEffect, useRef } from 'react';

interface UseParallaxProps {
  sensitivity: number;
}

const useParallax = ({ sensitivity }: UseParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxContainer = parallaxRef.current;

      if (parallaxContainer) {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = parallaxContainer;

        const offsetX = (clientX / offsetWidth - 0.5) * sensitivity;
        const offsetY = (clientY / offsetHeight - 0.5) * sensitivity;

        parallaxContainer.style.transform = `perspective(1000px) translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    const parallaxContainer = parallaxRef.current;
    parallaxContainer?.addEventListener('mousemove', handleMouseMove);

    return () => {
      parallaxContainer?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sensitivity]);

  return parallaxRef;
};

export default useParallax;
