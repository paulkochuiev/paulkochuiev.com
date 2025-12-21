import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InteractiveBackground = () => {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const x2 = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const y2 = useSpring(mouseY, { damping: 20, stiffness: 150 });
  const x3 = useSpring(mouseX, { damping: 18, stiffness: 120 });
  const y3 = useSpring(mouseY, { damping: 18, stiffness: 120 });
  const x4 = useSpring(mouseX, { damping: 15, stiffness: 100 });
  const y4 = useSpring(mouseY, { damping: 15, stiffness: 100 });
  const x5 = useSpring(mouseX, { damping: 12, stiffness: 80 });
  const y5 = useSpring(mouseY, { damping: 12, stiffness: 80 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #e8f0f8 0%, #d5e5f0 25%, #c2dae8 50%, #b0cfe0 75%, #9ec4d8 100%)',
        }}
      />
      
      {!isMobile && (
        <>
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          x: x2,
          y: y2,
          translateX: '-50%',
          translateY: '-50%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 30%, transparent 60%)',
        }}
        animate={{
          opacity: isVisible ? 0.7 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-xl"
        style={{
          x: x3,
          y: y3,
          translateX: '-50%',
          translateY: '-50%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 35%, transparent 65%)',
        }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-lg"
        style={{
          x: x4,
          y: y4,
          translateX: '-50%',
          translateY: '-50%',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 70%)',
        }}
        animate={{
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          width: 1000,
          height: 1000,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(200, 220, 255, 0.3) 20%, rgba(150, 180, 255, 0.2) 40%, transparent 70%)',
        }}
        animate={{
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          x: x2,
          y: y2,
          translateX: '-50%',
          translateY: '-50%',
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(180, 200, 255, 0.5) 0%, rgba(120, 160, 255, 0.3) 30%, transparent 60%)',
        }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          x: x3,
          y: y3,
          translateX: '-50%',
          translateY: '-50%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(200, 220, 255, 0.4) 0%, rgba(150, 180, 255, 0.25) 35%, transparent 65%)',
        }}
        animate={{
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-xl"
        style={{
          x: x4,
          y: y4,
          translateX: '-50%',
          translateY: '-50%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(180, 200, 255, 0.35) 0%, rgba(120, 160, 255, 0.2) 40%, transparent 70%)',
        }}
        animate={{
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-xl"
        style={{
          x: x5,
          y: y5,
          translateX: '-50%',
          translateY: '-50%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(150, 180, 255, 0.3) 0%, rgba(100, 140, 255, 0.15) 45%, transparent 75%)',
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          width: 1200,
          height: 1200,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
      />
        </>
      )}
    </div>
  );
};

export default InteractiveBackground;
