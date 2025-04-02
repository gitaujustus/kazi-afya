"use client";
import React from "react";
import { ArrowTopRightIcon } from "@/icons";
import { motion } from "framer-motion";

const CTASection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const popIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }
  };

  const iconAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: index => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.2 * index,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };
  
  return (
    <section className="relative w-full min-h-screen bg-[#f2f4f5] flex items-center justify-center overflow-hidden">
      {/* Container that preserves the 1440x1024 design on large screens */}
      <div className="relative w-full max-w-[1440px] min-h-[1024px] mx-auto">
        {/* Radial gradient background - responsive but maintains original size on xl */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[700px] md:h-[700px] xl:w-[800px] xl:h-[800px] rounded-full bg-[radial-gradient(circle,#0031CB_0%,#F2F4F5_70%)]"
        >
          {/* White card container - responsive with preserved original size on xl */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={popIn}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto md:w-[600px] lg:w-[700px] xl:w-[756px] xl:h-[448px] bg-white rounded-[20px] md:rounded-[30px] shadow-lg p-6 md:p-8 lg:p-10 xl:p-[60px] flex flex-col items-center gap-4 md:gap-6 lg:gap-[30px]"
          >
            {/* Heading - responsive text size */}
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-helvetica-semibold text-center text-cosmic-void"
            >
              What are you waiting for?
              <span className="block text-london-rain mb-2 md:mb-4">
                Your success starts here!
              </span>
            </motion.h2>
            
            {/* Subtext - responsive text size */}
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ delay: 0.2 }}
              className="text-[14px] md:text-[15px] xl:text-[16px] font-figtree font-medium text-center"
            >
              Let&apos;s transform healthcare together. Bring your vision to life with Kazi Afya and build a smarter, more efficient hospital system.
            </motion.p>
            
            {/* Book Now button - responsive size */}
            <motion.button 
              initial="rest"
              whileHover="hover"
              variants={buttonAnimation}
              className="bg-wizard-white flex items-center gap-[10px] md:gap-[15px] w-[150px] md:w-[171px] h-[40px] md:h-[44px] rounded-[30px] pr-[30px] md:pr-[37px] py-[8px] md:py-[10px]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  repeatDelay: 5
                }}
              >
                <ArrowTopRightIcon width="44" height="44" />
              </motion.div>
              <span className="text-[14px] md:text-[16px] text-london-rain font-helvetica-regular text-nowrap">Book Now</span>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* SMALL SCREEN ICONS - Only visible on small screens */}
        <div className="block md:hidden absolute top-[20%] left-0 w-full flex justify-center">
          <div className="w-[90%] flex justify-between">
            {/* Icon 1 - Red Clock */}
            <motion.div 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-red-600 rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            {/* Icon 2 - Blue Document */}
            <motion.div 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-blue-600 rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
            
            {/* Icon 3 - Teal Question */}
            <motion.div 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#006655] rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15848 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom row of icons on mobile */}
        <div className="block md:hidden absolute bottom-[20%] left-0 w-full flex justify-center">
          <div className="w-[90%] flex justify-between">
            {/* Icon 4 - Green File */}
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-green-600 rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7H10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
            
            {/* Icon 5 - Dark Red User */}
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#6E0000] rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
            
            {/* Icon 6 - Black Award */}
            <motion.div 
              custom={5}
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#1E1E1E] rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* LARGE SCREEN ICONS - Original positions preserved for md and up */}
        {/* Clock icon - red */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={iconAnimation}
          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          className="hidden md:block absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] md:left-[10%] md:top-[15%] lg:left-[15%] lg:top-[18%] xl:left-[198px] xl:top-[179px]"
        >
          <div className="w-full h-full bg-red-600 rounded-md flex items-center justify-center">
            <svg className="md:w-[20px] md:h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Document icon - blue */}
        <motion.div 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={iconAnimation}
          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          className="hidden md:block absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] md:left-[55%] md:top-[5%] lg:left-[60%] xl:left-[729px] xl:top-[65px]"
        >
          <div className="w-full h-full bg-blue-600 rounded-md flex items-center justify-center">
            <svg className="md:w-[20px] md:h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* File icon - green */}
        <motion.div 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={iconAnimation}
          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          className="hidden md:block absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] md:right-[10%] md:top-[40%] lg:right-[15%] xl:left-[1181px] xl:top-[430px]"
        >
          <div className="w-full h-full bg-green-600 rounded-md flex items-center justify-center">
            <svg className="md:w-[20px] md:h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7H10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* User icon - dark red */}
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={iconAnimation}
          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          className="hidden md:block absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] md:left-[55%] md:bottom-[10%] lg:left-[60%] xl:left-[730px] xl:top-[780px]"
        >
          <div className="w-full h-full bg-[#6E0000] rounded-md flex items-center justify-center">
            <svg className="md:w-[20px] md:h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Award icon - black */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={iconAnimation}
          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          className="hidden md:block absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] md:left-[20%] md:bottom-[10%] lg:left-[25%] xl:left-[277px] xl:top-[772px]"
        >
          <div className="w-full h-full bg-[#1E1E1E] rounded-md flex items-center justify-center">
            <svg className="md:w-[20px] md:h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Question icon - teal */}
        <motion.div 
          custom={5}
          initial="hidden"
          animate="visible"
          variants={iconAnimation}
          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          className="hidden md:block absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] md:right-[20%] md:top-[10%] lg:right-[15%] xl:left-[993px] xl:bottom-[900px]"
        >
          <div className="w-full h-full bg-[#006655] rounded-md flex items-center justify-center">
            <svg className="md:w-[20px] md:h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15848 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;