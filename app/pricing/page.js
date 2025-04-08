"use client";
import { TickIcon } from "@/components/Icons";
import { ArrowTopRightIcon, ArrowRight, WhiteArrowRight } from "@/icons";
import { useState } from "react";
import { motion } from "framer-motion";

const essentialPlanIncluded = [
  "Patient Management System (access for up to 5 healthcare providers)",
  "Appointment Scheduling",
  "Billing & Payments",
  "Inventory & Pharmacy",
  "Laboratory",
  "Multi-Device Access",
  "Support",
  "Creative Add-On: Basic Patient Portal",
  "Limitations: Limited to 5,000 patient records; no multi-branch support or advanced AI analytics.",
];

const professionalPlanIncluded = [
  "Patient Management System",
  "Appointment Scheduling & Telemedicine",
  "Billing & Payments",
  "Inventory & Pharmacy",
  "Laboratory",
  "Multi-Device Access",
  "Support",
  "Creative Add-On: Basic Patient Portal",
  "Ambulance management",
  "Ward allocation",
  "Creative Add-On: AI-Powered Chatbot",
];

const enterprisePlanIncluded = [
  "Patient Management System",
  "Appointment Scheduling & Telemedicine",
  "Billing & Payments",
  "Inventory & Pharmacy",
  "Laboratory",
  "Multi-Device Access",
  "Support",
  "Creative Add-On: Basic Patient Portal",
  "Ambulance management",
  "Ward Allocation",
  "Patient Feedback",
  "Multi-branch Support",
  "Support 24/7",
  "Limitations: None",
  "Creative Add-On: Basic Patient Portal",
  "Predictive Resource Allocator",
  "Patient Wellness App",
];

const backgroundVariants = {
  initial: {
    width: '0%',
  },
  hover: {
    width: '100%',
    transition: {
      duration: 0.5, 
      ease: 'easeInOut',
    },
  },
};

const Pricing = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Pricing calculations (10% discount for annual)
  const plans = {
    essential: {
      monthly: 150,
      annual: Math.round(150 * 12 * 0.9), // $1620/year
    },
    professional: {
      monthly: 350,
      annual: Math.round(350 * 12 * 0.9), // $3780/year
    },
    enterprise: {
      monthly: 800,
      annual: Math.round(800 * 12 * 0.9), // $8640/year
    }
  };

  return (
    <main className="px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] pt-[100px] md:pt-[120px] lg:pt-[155px] pb-[24px] sm:pb-[32px] md:pb-[48px]">
      {/* Promo Banner */}
      <section
        className="p-[15px] sm:p-[20px] md:p-[30px] w-full rounded-[10px] flex flex-col lg:flex-row justify-between gap-4 "
        style={{
          boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
        }}
      >
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col sm:flex-row gap-[12px] sm:items-center sm:mb-0">
            <p className="font-figtree text-[18px] sm:text-[20px] md:text-[24px] text-black leading-[120%] font-500 h-[29px]">
              Free 1-month Professional trial available
            </p>
            <p className="font-figtree text-[12px] sm:text-[14px] leading-[120%] p-[8px] sm:p-[10px] w-[70px] sm:w-[80px] rounded-[10px] bg-london-rain text-white text-center my-4 sm:my-0 h-[29px] flex items-center justify-center ">
              save 10%
            </p>
          </div>
          <p className="font-figtree text-[14px] sm:text-[16px] text-black leading-[120%] ">
            Upgrade to any annually plan today and get the first 1 month free trial.
          </p>
        </div>

        <div>
          {/* <motion.button
            className="bg-wizard-white flex items-center gap-[10px] md:gap-[15px] w-[200px] md:w-[229px] h-[46px] md:h-[44px] rounded-[30px] pr-[30px] md:pr-[37px] py-[9px] md:py-[10px] hover:text-white group transition-all duration-700 ease-in-out relative overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-london-rain z-0 rounded-[30px]"
              variants={backgroundVariants}
              style={{ transformOrigin: 'left' }}
            />
            <div className="group-hover:rotate-47 group-transition-all duration-700 ease-in-out">
              <ArrowTopRightIcon className="w-11 h-11" />
            </div>
            <span className="text-[14px] z-10 md:text-[16px] text-london-rain font-helvetica-regular text-nowrap group-hover:text-white font-500">
              Switch to annually
            </span>
          </motion.button> */}
           <motion.button
          className="bg-london-rain relative mx-auto w-[160px] md:w-[200px] xl:w-[300px] 2xl:w-[280px] h-[46px] md:h-[54px] 2xl:h-[72px] rounded-[36px] 2xl:rounded-[40px] px-[100px] xl:px-[82px] py-[8px] xl:py-[10px] 2xl:py-[14px] 2xl:my-20 flex items-center justify-center gap-3 xl:gap-[15px] 2xl:gap-[20px] font-helvetica-regular text-white hover:text-white group hover:bg-[#022c61] transition-all duration-700 ease-in-out "
          initial="initial"
          whileHover="hover"
        >
          {/* <motion.div
            className="absolute left-5 inset-0 bg-london-rain z-0 rounded-full"
            variants={backgroundVariants} // Assumed to be defined at the top
            style={{ transformOrigin: "left" }}
          /> */}
          <p className="text-md md:text-lg z-10 text-sm md:text-md xl:text-[16px] 2xl:text-[20px] text-nowrap font-helvetica-regular ">
            Switch to Annually
          </p>
          <div className=" group-hover:">
            {/* <ArrowRight className="w-4 h-4 " /> */}
            <WhiteArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
          </div>
        </motion.button>
        </div>
      </section>

      {/* Toggle button */}
      <div className="flex items-center rounded-full px-2 sm:px-4 py-[30px] sm:py-[40px] md:py-[59px] w-[200px]">
        <span className="text-[20px] font-semibold text-black mr-2">
          Monthly
        </span>
        <div
          className="relative inline-flex items-center cursor-pointer"
          onClick={handleToggle}
        >
          <div
            className={`w-10 sm:w-11 h-5 sm:h-6 rounded-full transition-colors duration-300 ${
              isToggled ? "bg-blue-500" : "bg-blue-500"
            }`}
          >
            <div
              className={`w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform duration-300 ${
                isToggled ? "translate-x-5 sm:translate-x-5" : "left-0.5"
              }`}
            ></div>
          </div>
        </div>
        <span className="text-[20px] font-semibold text-black ml-2">
          Annually
        </span>
      </div>

      {/* Pricing */}
      <section className="flex flex-wrap gap-6 justify-between">
        {/* Essential Plan */}
        <div
          className="p-[20px] sm:p-[25px] md:p-[30px] rounded-[15px] sm:rounded-[20px] flex flex-col gap-[8px] sm:gap-[10px] bg-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[27.2vw]"
          style={{
            boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
        >
          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px] leading-[120%]">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-figtree font-semibold text-cosmic-void">
              Essential Plan
            </h3>
            <p className="font-figtree font-400 text-[14px] sm:text-[16px]">Small clinics or startups</p>
            <p className="font-figtree text-[20px] sm:text-[22px] md:text-[24px]">
            <span className="text-london-rain font-bold">
              ${isToggled ? plans.essential.annual.toLocaleString() : plans.essential.monthly}
            </span>
            /{isToggled ? " year" : " month"}
          </p>
          </div>

          <button className="my-[15px] sm:my-[20px] md:my-[29px] px-[30px] sm:px-[40px] md:px-[50px] py-[10px] rounded-[8px] sm:rounded-[10px] bg-london-rain text-white font-figtree font-400 text-[14px] sm:text-[16px] leading-[120%] hover:bg-white hover:text-london-rain border-2 border-london-rain transition-all duration-700 ease-in-out">
            Get Started
          </button>

          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px]">
            {essentialPlanIncluded.map((feature, index) => (
              <div key={index} className="flex gap-[8px] sm:gap-[10px] max-w-full sm:max-w-[90%] md:max-w-[80%]">
                <p className="flex-shrink-0">
                  <TickIcon className="w-[16px] h-[16px] sm:w-auto sm:h-auto" />
                </p>
                <p className="font-figtree text-[14px] sm:text-[16px] font-400 leading-[120%] text-cosmic-void">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Plan */}
        <div
          className="p-[20px] sm:p-[25px] md:p-[30px] rounded-[15px] sm:rounded-[20px] flex flex-col gap-[8px] sm:gap-[10px] bg-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[29.4vw]"
          style={{
            boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
        >
          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px] leading-[120%]">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-figtree font-semibold text-cosmic-void">
              Professional Plan
            </h3>
            <p className="font-figtree font-400 text-[14px] sm:text-[16px]">
              Mid-sized facilities or growing practices
            </p>
            <p className="font-figtree text-[20px] sm:text-[22px] md:text-[24px]">
              <span className="text-london-rain font-bold">
                ${isToggled ? plans.professional.annual.toLocaleString() : plans.professional.monthly}
              </span>
              /{isToggled ? " year" : " month"}
            </p>
          </div>

          <button className="my-[15px] sm:my-[20px] md:my-[29px] px-[30px] sm:px-[40px] md:px-[50px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] bg-london-rain text-white font-figtree font-400 text-[14px] sm:text-[16px] leading-[120%] hover:bg-white hover:text-london-rain border-2 border-london-rain transition-all duration-700 ease-in-out">
            Get Started
          </button>

          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px]">
            {professionalPlanIncluded.map((feature, index) => (
              <div key={index} className="flex gap-[8px] sm:gap-[10px] max-w-full sm:max-w-[90%] md:max-w-[80%]">
                <p className="flex-shrink-0">
                  <TickIcon className="w-[16px] h-[16px] sm:w-auto sm:h-auto" />
                </p>
                <p className="font-figtree text-[14px] sm:text-[16px] font-400 leading-[120%] text-cosmic-void">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Plan */}
        <div
          className="p-[20px] sm:p-[25px] md:p-[30px] rounded-[15px] sm:rounded-[20px] flex flex-col gap-[8px] sm:gap-[10px] bg-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[29.4vw]"
          style={{
            boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
        >
          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px] leading-[120%]">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-figtree font-semibold text-cosmic-void">
              Enterprise Plan
            </h3>
            <p className="font-figtree font-400 text-[14px] sm:text-[16px]">
              Large hospitals or multi-facility networks
            </p>
            <p className="font-figtree text-[20px] sm:text-[22px] md:text-[24px]">
              <span className="text-london-rain font-bold">
                ${isToggled ? plans.enterprise.annual.toLocaleString() : plans.enterprise.monthly}
              </span>
              /{isToggled ? " year" : " month"}
            </p>
          </div>

          <button className="my-[15px] sm:my-[20px] md:my-[29px] px-[30px] sm:px-[40px] md:px-[50px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] bg-london-rain text-white font-figtree font-400 text-[14px] sm:text-[16px] leading-[120%] hover:bg-white hover:text-london-rain border-2 border-london-rain transition-all duration-700 ease-in-out">
            Get Started
          </button>

          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px]">
            {enterprisePlanIncluded.map((feature, index) => (
              <div key={index} className="flex gap-[8px] sm:gap-[10px] max-w-full sm:max-w-[90%] md:max-w-[80%]">
                <p className="flex-shrink-0">
                  <TickIcon className="w-[16px] h-[16px] sm:w-auto sm:h-auto" />
                </p>
                <p className="font-figtree text-[14px] sm:text-[16px] font-400 leading-[120%] text-cosmic-void">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;