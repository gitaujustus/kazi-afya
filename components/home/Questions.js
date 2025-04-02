"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowTopRightIcon } from "@/icons";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    }));
  }, [controls]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can use Kazi Afya?",
      answer:
        "Hospitals, clinics, medical centers, and healthcare providers of all sizes can benefit from Kazi Afya.",
    },
    { question: "What features does Kazi Afya offer?", answer: "It offers a range of features that can help hospitals, clinics, and healthcare providers streamline their operations and improve patient care. Some of the key features include patient management, scheduling, billing, and reporting." },
    {
      question: "Can Kazi Afya integrate with existing hospital systems?",
      answer: "Yes, Kazi Afya can integrate with existing hospital systems. We offer seamless integration with existing systems, ensuring a smooth transition and efficient workflow.",
    },
    { question: "Is Kazi Afya cloud-based or on-premise?", answer: "Kazi Afya is a cloud-based system, which means it is accessible from anywhere with an internet connection. This allows for easy access to patient data and streamlined workflows." },
    { question: "Is Kazi Afya secure?", answer: "Yes, Kazi Afya is secure. We use industry-standard encryption and security measures to protect your data. Additionally, we regularly update our system to ensure the highest level of security." },
    {
      question: "Does Kazi Afya comply with healthcare regulations?",
      answer: "Yes, Kazi Afya complies with healthcare regulations. We are HIPAA compliant and follow all relevant regulations to ensure the privacy and security of patient data.",
    },
    { question: "How much does Kazi Afya cost?", answer: "Kazi Afya is a subscription-based system. The cost depends on the size of your hospital and the features you need. We offer a free trial to help you evaluate the system before committing to a subscription." },
    { question: "Do you offer training for hospital staff?", answer: "Yes, we offer training for hospital staff. We provide comprehensive training to ensure that you get the most out of Kazi Afya." },
  ];

  // Section container animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  // Heading animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  // Card hover animations
  const cardVariants = {
    rest: { scale: 1},
    hover: { 
      scale: 1.02, 
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  // FAQ item variants
  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Animated chevron (arrow) for FAQ items
  const chevronVariants = {
    open: { rotate: 180, transition: { duration: 0.3 } },
    closed: { rotate: 0, transition: { duration: 0.3 } }
  };

  // Answer content animation
  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-white w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[75px] py-10 sm:py-16 md:py-20 xl:py-[92px] gap-8 sm:gap-12 md:gap-16 xl:gap-[92px]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Exact dimensions for 1440x1024 screens */}
      <div className="hidden [1440px:1440px]:block [1024px:1024px]:block">
        <section className="bg-white w-[1440px] h-[1024px] flex flex-col px-[75px] py-[92px] gap-[92px]">
          {/* Content for exact dimensions kept intact */}
        </section>
      </div>

      {/* Heading */}
      <motion.h1 
        className="font-helvetica-semibold text-center text-3xl sm:text-4xl md:text-5xl xl:text-[48px] text-cosmic-void"
        variants={headingVariants}
      >
        Your Questions, <br />{" "}
        <motion.span 
          className="text-london-rain"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Answered
        </motion.span>
      </motion.h1>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-8 xl:gap-12 2xl:gap-[218px]">
        {/* Left column - FAQs */}
        <motion.div 
          className="flex flex-col justify-between w-full lg:w-3/5 xl:w-[604px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-full flex flex-col justify-between gap-4 sm:gap-6 md:gap-8 xl:gap-[35px] ">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={faqItemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2 sm:gap-[11px]"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex justify-between w-full text-left text-blue-leviathan font-semibold text-base sm:text-lg md:text-xl xl:text-[20px] font-figtree"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <motion.span
                    variants={chevronVariants}
                    animate={openIndex === index ? "open" : "closed"}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && faq.answer && (
                    <motion.p
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-cosmic-void mt-2 font-figtree text-sm sm:text-base xl:text-[16px]"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
                {/* <motion.div 
                  className="h-px w-full bg-gray-200"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                /> */}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Contact Card */}
        <motion.div
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          animate={{ 
            opacity: [0, 1], 
            x: [50, 0],
            transition: { duration: 0.7, delay: 0.4 }
          }}
          className="w-full mt-10 lg:mt-0 lg:w-2/5 xl:w-[468px] bg-[#F2F4F5] rounded-[20px] flex flex-col items-center gap-3 sm:gap-[14px] px-4 sm:px-[21px] py-6 sm:py-[30px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.6 
            }}
          >
            <Image
              src="/assets/home/Profile-Sect-5.png"
              alt="Profile Photo"
              width={2000}
              height={2000}
              className="w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full m-2 sm:m-[10px]"
            />
          </motion.div>
          <motion.div 
            className="w-full sm:w-[211px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h1 className="text-xl sm:text-2xl xl:text-[24px] font-helvetica-semibold text-cosmic-void text-center">
              <span className="text-london-rain">Book</span> a 30-Minute
              Discovery Call
            </h1>
          </motion.div>
          <motion.div 
            className="w-full sm:w-[406px] p-2 sm:p-[10px] gap-2 sm:gap-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="font-figtree text-sm sm:text-base xl:text-[16px] text-center">
              Let&apos;s optimize your hospital operations with Kazi Afya. Call to
              explore how our HMS can streamline workflows, enhance patient
              care, and drive efficiency for your health institution.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-[171px] h-[44px] rounded-[30px] bg-wizard-white pr-[37px] py-[10px] flex justify-between items-center gap-[15px]"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 3
                }
              }}
            >
              <ArrowTopRightIcon className="w-4 h-4 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
            </motion.div>
            <p className="text-sm md:text-base xl:text-[16px] 2xl:text-[20px] text-nowrap font-helvetica-regular text-london-rain">
              Book Now
            </p>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQs;