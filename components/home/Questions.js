"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowTopRightIcon } from "@/icons";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can use Kazi Afya?",
      answer:
        "Hospitals, clinics, medical centers, and healthcare providers of all sizes can benefit from Kazi Afya.",
    },
    { question: "What features does Kazi Afya offer?", answer: "" },
    {
      question: "Can Kazi Afya integrate with existing hospital systems?",
      answer: "",
    },
    { question: "Is Kazi Afya cloud-based or on-premise?", answer: "" },
    { question: "Is Kazi Afya secure?", answer: "" },
    {
      question: "Does Kazi Afya comply with healthcare regulations?",
      answer: "",
    },
    { question: "How much does Kazi Afya cost?", answer: "" },
    { question: "Do you offer training for hospital staff?", answer: "" },
  ];

  return (
    // Section 5 - now responsive
    <section className="bg-white w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[75px] py-10 sm:py-16 md:py-20 xl:py-[92px] gap-8 sm:gap-12 md:gap-16 xl:gap-[92px]">
      {/* Exact dimensions for 1440x1024 screens */}
      <div className="hidden [1440px:1440px]:block [1024px:1024px]:block">
        <section className="bg-white w-[1440px] h-[1024px] flex flex-col px-[75px] py-[92px] gap-[92px]">
          {/* Content for exact dimensions kept intact */}
        </section>
      </div>
      
      {/* Heading */}
      <h1 className="font-helvetica-semibold text-center text-3xl sm:text-4xl md:text-5xl xl:text-[48px] text-cosmic-void">
        Your Questions <br className="md:hidden" /> <span className="text-london-rain">Answered</span>
      </h1>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-8 xl:gap-12 2xl:gap-[218px]">
        {/* Left column - FAQs */}
        <div className="flex flex-col justify-between w-full lg:w-3/5 xl:w-[604px]">
          {/* Inner div for mapping */}
          <div className="w-full flex flex-col justify-between gap-4 sm:gap-6 md:gap-8 xl:gap-[35px]">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col gap-2 sm:gap-[11px]">
                <button
                  className="flex justify-between w-full text-left text-blue-leviathan font-semibold text-base sm:text-lg md:text-xl xl:text-[20px] font-figtree"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && faq.answer && (
                  <p className="text-cosmic-void mt-2 font-figtree text-sm sm:text-base xl:text-[16px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Card */}
        <div className="w-full mt-10 lg:mt-0 lg:w-2/5 xl:w-[468px] bg-[#F2F4F5] rounded-[20px] flex flex-col items-center gap-3 sm:gap-[14px] px-4 sm:px-[21px] py-6 sm:py-[30px]">
          <Image
            src="/assets/home/Profile-Sect-5.png"
            alt="Profile Photo"
            width={2000}
            height={2000}
            className="w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full m-2 sm:m-[10px]"
          />

          <div className="w-full sm:w-[211px]">
            <h1 className="text-xl sm:text-2xl xl:text-[24px] font-helvetica-semibold text-cosmic-void text-center">
              <span className="text-london-rain">Book</span> a 30-Minute
              Discovery Call
            </h1>
          </div>

          <div className="w-full sm:w-[406px] p-2 sm:p-[10px] gap-2 sm:gap-[10px]">
            <p className="font-figtree text-sm sm:text-base xl:text-[16px] text-center">
              Let&apos;s optimize your hospital operations with Kazi Afya. Call
              to explore how our HMS can streamline workflows, enhance patient
              care, and drive efficiency for your health institution.
            </p>
          </div>

          <button className="w-[171px] h-[44px] rounded-[30px] bg-wizard-white pr-[37px] py-[10px] flex justify-between items-center gap-[15px]">
            <ArrowTopRightIcon className="w-4 h-4 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
            <p className="text-sm md:text-base xl:text-[16px] 2xl:text-[20px] text-nowrap font-helvetica-regular text-london-rain">
              Book Now
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;