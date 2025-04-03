'use client'
import { ArrowTopRightIcon, HeartIcon } from "@/icons";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Benefits = () => {
  const listItems = [
    { id: 1, title: "Efficient Patient Management:", description: "Centralized digital records for quick access." },
    { id: 2, title: "Automated Appointments:", description: "Reduce no-shows with online bookings and reminders." },
    { id: 3, title: "Real-Time Inventory:", description: "Track supplies to avoid stock-outs." },
    { id: 4, title: "Data-Driven Insights:", description: "Make informed decisions with advanced reporting." },
    { id: 5, title: "Secure & Compliant:", description: "Protect patient data with Kenyan Data Protection Act compliance." },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-cosmic-void flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 xl:gap-[10px] w-full mx-auto h-auto xl:h-[1024px] 2xl:h-[1080px] px-4 sm:px-6 md:px-8 lg:px-[48px] xl:px-[64px] 2xl:px-[96px] py-10 md:py-16 xl:py-[82px] 2xl:py-[100px]"
    >
      {/* Left side - Image */}
      <motion.div variants={fadeIn} className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="/assets/home/Benefits.png"
          alt="Benefits"
          width={1000}
          height={1000}
          className="w-[90%] sm:w-[80%] md:w-[450px] lg:w-[500px] xl:w-[533px] 2xl:w-[710px] h-auto aspect-[533/840] xl:h-[840px] 2xl:h-[900px] object-cover rounded-tl-[30px] sm:rounded-tl-[40px] md:rounded-tl-[60px] xl:rounded-tl-[100px] 2xl:rounded-tl-[120px] rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[60px] xl:rounded-br-[0px]"
        />
      </motion.div>

      {/* Right Side - Text and Icons */}
      <motion.div variants={fadeIn} className="w-full md:w-1/2 lg:w-[600px] xl:w-[676px] 2xl:w-[900px] h-auto xl:h-[766px] 2xl:h-[820px] flex flex-col gap-6 md:gap-8 xl:gap-[33px] 2xl:gap-[40px] mt-8 md:mt-0">
        {/* Heading */}
        <motion.h1 variants={fadeIn} className="text-white text-3xl sm:text-4xl lg:text-[48px] 2xl:text-[64px] font-helvetica-bold">
          Benefits of Kazi Afya
        </motion.h1>

        {/* List Container */}
        <motion.div variants={fadeIn} className="w-full h-auto xl:h-[591px] 2xl:h-[640px] flex flex-col gap-3 md:gap-4 xl:gap-[15px] 2xl:gap-[20px]">
          {listItems.map((item) => (
            <motion.div key={item.id} variants={fadeIn} className="flex gap-3 xl:gap-[10px] 2xl:gap-[16px] p-2 xl:p-[10px] 2xl:p-[14px]">
              <HeartIcon className="w-6 h-6 md:w-7 md:h-7 xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px]" />
              <div className="flex flex-col">
                <h2 className="text-sky-blue text-base sm:text-lg xl:text-[20px] 2xl:text-[26px] font-helvetica-semibold">
                  {item.title}
                </h2>
                <p className="text-white text-sm sm:text-base xl:text-[20px] 2xl:text-[24px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button with animation */}
        <motion.button
          className="bg-wizard-white  w-[180px] xl:w-[203px] 2xl:w-[260px] h-[40px] xl:h-[44px] 2xl:h-[56px] rounded-[20px] sm:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px] pr-[25px] sm:pr-[30px] xl:pr-[37px] 2xl:pr-[45px] py-[8px] xl:py-[10px] 2xl:py-[14px] 2xl:my-20 flex items-center gap-3 xl:gap-[15px] 2xl:gap-[20px] font-helvetica-regular hover:text-white group hover:bg-london-rain transition-all duration-700 ease-in-out "
        >
          <div className=" group-hover:rotate-47 transition-all duration-700 ease-in-out">
          <ArrowTopRightIcon className="w-4 h-4 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-sm md:text-base xl:text-[16px] 2xl:text-[20px] text-nowrap font-helvetica-regular ">Request Demo</p>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Benefits;
