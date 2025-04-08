"use client";
import React from "react";
import {
  ArrowRight,
  WhiteArrowRight,
  ArrowTopRightIcon,
  BlackIcon,
  BlueIcon,
  BrownIcon,
  GreenIcon,
  RedIcon,
  TealIcon,
} from "@/icons";
import { motion } from "framer-motion";

const CTASection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const popIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  // Variants for the background flow effect
  const backgroundVariants = {
    initial: {
      width: "0%",
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Modified icon animation with slower timing
  const iconAnimation = {
    hidden: { scale: 0.3, opacity: 0, zIndex: 0 },
    visible: (index) => {
      const positions = [
        { left: "17%", top: "18%" }, // Red Clock
        { left: "55%", top: "10%" }, // Blue Document
        { left: "87%", top: "40%" }, // Green File
        { left: "55%", top: "75%" }, // Dark Red User
        { left: "20%", top: "80%" }, // Black Award
        { left: "75%", top: "80%" }, // Teal Question
      ];

      const position = positions[index] || { left: "50%", top: "50%" };

      return {
        scale: 1,
        opacity: 1,
        left: position.left,
        top: position.top,
        zIndex: 10,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 1.5,
          delay: 0.7 + index * 0.2,
          duration: 2.5,
        },
      };
    },
  };

  // Modified mobile icon animation
  const mobileIconAnimation = {
    hidden: { scale: 0.3, opacity: 0, zIndex: 0 },
    visible: (index) => {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 10,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 1.5,
          delay: 0.7 + index * 0.2,
          duration: 2.5,
        },
      };
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-[#f2f4f5] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Container that preserves the 1440x1024 design on large screens */}
      <div className="relative w-full max-w-[1440px] min-h-[1024px] mx-auto">
        {/* Center point reference */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {/* Radial gradient background - responsive but maintains original size on xl */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[700px] md:h-[700px] xl:w-[800px] xl:h-[800px] rounded-full bg-[radial-gradient(circle,#0031CB_0%,#F2F4F5_70%)]"
          />

          {/* White card container - responsive with preserved original size on xl */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={popIn}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[400px] md:h-auto md:w-[600px] lg:w-[700px] xl:w-[756px] xl:h-[448px] bg-white rounded-[20px] md:rounded-[30px] shadow-lg p-6 md:p-8 lg:p-10 xl:p-[60px] flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-[30px] z-20"
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
              Let&apos;s transform healthcare together. Bring your vision to
              life with Kazi Afya and build a smarter, more efficient hospital
              system.
            </motion.p>

            <motion.button
              className="bg-london-rain relative mx-auto w-[180px] md:w-[200px] xl:w-[300px]  h-[48px] md:h-[54px] 2xl:h-[72px] rounded-[36px] 2xl:rounded-[40px] px-[82px] py-[8px] xl:py-[10px] 2xl:py-[14px] flex items-center justify-center gap-3 xl:gap-[15px] 2xl:gap-[20px] font-helvetica-regular text-white hover:text-white group hover:bg-[#022c61] transition-all duration-700 ease-in-out "
              initial="initial"
              whileHover="hover"
            >
              <p className="text-md md:text-lg z-10 xl:text-[16px] 2xl:text-[20px] text-nowrap font-helvetica-regular ">
                Book Now
              </p>
              <div className=" group-hover:">
                <WhiteArrowRight className="w-4 h-4 relative z-10" />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* SMALL SCREEN ICONS - Only visible on small screens */}
        <div className="md:hidden w-full h-full">
          {/* Top row of icons on mobile */}
          <div className="absolute top-[20%] left-0 w-full flex justify-between px-4">
            {/* Icon 1 - Red Clock */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={mobileIconAnimation}
              viewport={{ once: true }}
              className="w-[32px] h-[32px]"
              style={{ zIndex: 10 }}
            >
              <div className="w-full h-full bg-red-600 rounded-md flex items-center justify-center">
                <RedIcon />
              </div>
            </motion.div>

            {/* Icon 2 - Blue Document */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={mobileIconAnimation}
              viewport={{ once: true }}
              className="w-[32px] h-[32px]"
              style={{ zIndex: 10 }}
            >
              <div className="w-full h-full bg-blue-600 rounded-md flex items-center justify-center">
                <BlueIcon />
              </div>
            </motion.div>

            {/* Icon 3 - Teal Question */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={mobileIconAnimation}
              viewport={{ once: true }}
              className="w-[32px] h-[32px]"
              style={{ zIndex: 10 }}
            >
              <div className="w-full h-full bg-[#006655] rounded-md flex items-center justify-center">
                <TealIcon />
              </div>
            </motion.div>
          </div>

          {/* Bottom row of icons on mobile */}
          <div className="absolute bottom-[20%] left-0 w-full flex justify-between px-4">
            {/* Icon 4 - Green File */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={mobileIconAnimation}
              viewport={{ once: true }}
              className="w-[32px] h-[32px]"
              style={{ zIndex: 10 }}
            >
              <div className="w-full h-full bg-green-600 rounded-md flex items-center justify-center">
                <GreenIcon />
              </div>
            </motion.div>

            {/* Icon 5 - Dark Red User */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={mobileIconAnimation}
              viewport={{ once: true }}
              className="w-[32px] h-[32px]"
              style={{ zIndex: 10 }}
            >
              <div className="w-full h-full bg-[#6E0000] rounded-md flex items-center justify-center">
                <BrownIcon />
              </div>
            </motion.div>

            {/* Icon 6 - Black Award */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={mobileIconAnimation}
              viewport={{ once: true }}
              className="w-[32px] h-[32px]"
              style={{ zIndex: 10 }}
            >
              <div className="w-full h-full bg-[#1E1E1E] rounded-md flex items-center justify-center">
                <BlackIcon />
              </div>
            </motion.div>
          </div>
        </div>

        {/* LARGE SCREEN ICONS - Only visible on medium screens and up */}
        <div className="hidden md:block">
          {/* Clock icon - red */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full bg-red-600 rounded-md flex items-center justify-center">
              <RedIcon />
            </div>
          </motion.div>

          {/* Document icon - blue */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full bg-blue-600 rounded-md flex items-center justify-center">
              <BlueIcon />
            </div>
          </motion.div>

          {/* File icon - green */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full bg-green-600 rounded-md flex items-center justify-center">
              <GreenIcon />
            </div>
          </motion.div>

          {/* User icon - dark red */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full bg-[#6E0000] rounded-md flex items-center justify-center">
              <BrownIcon />
            </div>
          </motion.div>

          {/* Award icon - black */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full bg-[#1E1E1E] rounded-md flex items-center justify-center">
              <BlackIcon />
            </div>
          </motion.div>

          {/* Question icon - teal */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="absolute md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full bg-[#006655] rounded-md flex items-center justify-center">
              <TealIcon />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
