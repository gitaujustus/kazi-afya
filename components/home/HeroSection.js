'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Arrow, RighArrow } from '../Icons'; // Assuming you have a Play/Pause icon available

const images = [
  '/assets/home/hero-image1.webp',
  '/assets/home/hero-image2.webp',
  '/assets/home/hero-image3.webp',
  '/assets/home/hero-image4.webp',
  '/assets/home/hero-image5.webp',
];

const titles = [
  "Powering Hospitals, Empowering Care",
  "Automated Payroll Processing",
  "Efficient Shift Tracking",
  "Smart Attendance Monitoring",
  "Secure Access Control"
];

const descriptions = [
  "A Complete Hospital Management System Designed to Automate Workflows, Enhance Patient Care, and Optimize Operations—All in One Powerful Platform",
  "Streamline salary processing with automated calculations for deductions and allowances. Ensure timely payments to staff with minimal manual intervention.",
  "Monitor employee work hours in real-time to optimize staffing levels. Easily manage shift schedules to prevent overstaffing or understaffing.",
  "Track employee attendance accurately to ensure compliance with work policies. Generate reports on attendance patterns for better workforce management.",
  "Implement role-based access to secure sensitive information and systems. Assign different permissions to staff based on their roles and responsibilities."
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    zIndex: 0
  }),
  center: {
    x: 0,
    zIndex: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    zIndex: 2
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        setDirection(1);
        setCurrentImageIndex(nextIndex);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [currentImageIndex, isPlaying]);

  const handleImageChange = (newIndex) => {
    setDirection(newIndex > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(newIndex);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageChange(prevIndex);
  };

  return (
    <div className="relative min-h-[900px] lg:min-h-[1024px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.8, ease: "easeInOut" },
            zIndex: { delay: 0.4 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
              handleImageChange(nextIndex);
            } else if (swipe > swipeConfidenceThreshold) {
              prevImage();
            }
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Hero image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      
      
      <div className="absolute  z-10 bottom-[38px]   w-full">
        <div className='bg-[#070734]/35 w-[93%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[89vw] 2xl:w-[85vw] rounded-[20px] sm:rounded-[25px] xl:rounded-[30px] mx-auto backdrop-blur-[35.5px] py-[20px] sm:py-[30px] md:py-[40px] xl:py-[50px] px-[10px] sm:px-[25px] md:px-[35px] xl:px-[45px]'>
          <div className="text-center">
            <motion.h1 
              key={titles[currentImageIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[64px] 2xl:text-[72px] text-sky-blue font-helvetica-bold leading-[120%] mx-auto"
            >
              {titles[currentImageIndex]}
            </motion.h1>
            <motion.p 
              key={descriptions[currentImageIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[14px] sm:text-[16px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] text-white p-[5px] sm:p-[8px] xl:p-[10px] mt-[20px] sm:mt-[25px] md:mt-[30px] xl:mt-[40px] font-figtree font-500 mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[819px] 2xl:w-[900px] mb-[20px] sm:mb-[30px] xl:mb-[40px]"
            >
              {descriptions[currentImageIndex]}
            </motion.p>
            <button className='flex items-center gap-[5px] sm:gap-[8px] xl:gap-[10px] mx-auto text-white text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px]'>
              <Arrow/> <span>learn more</span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation Container */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-[20px] sm:mt-[30px] md:mt-[40px] xl:mt-[53px] 2xl:mt-[60px]">
          <div className="bg-[#1C1C1CCC]/80 rounded-[30px] sm:rounded-[40px] xl:rounded-[50px] py-[10px] xl:py-[14px] px-[20px] sm:px-[30px] xl:px-[40px]">
            <div className="flex gap-1 sm:gap-2 xl:gap-3">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-[6px] sm:h-[7px] xl:h-[8px] w-[40px] xl:w-[50px] rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-london-rain' : 'bg-white/40'
                  }`}
                  onClick={() => handleImageChange(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={togglePlayPause}
            className="bg-[#1C1C1CCC]/80 rounded-full h-[30px] w-[30px] xl:h-[36px] xl:w-[36px] 2xl:h-[40px] 2xl:w-[40px] transition-all flex items-center justify-center"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            <div className="scale-75 xl:scale-100">
              {isPlaying ? (
                // You might want to replace this with a proper Pause icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                // Using RightArrow as Play icon, replace with proper Play icon if available
                <RighArrow />
              )}
            </div>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;