import { ArrowTopRightIcon, HeartIcon } from "@/icons";
import Image from "next/image";

const Benefits = () => {
  const listItems = [
    {
      id: 1,
      title: "Efficient Patient Management:",
      description: "Centralized digital records for quick access.",
    },
    {
      id: 2,
      title: "Automated Appointments:",
      description: "Reduce no-shows with online bookings and reminders.",
    },
    {
      id: 3,
      title: "Real-Time Inventory:",
      description: "Track supplies to avoid stock-outs.",
    },
    {
      id: 4,
      title: "Data-Driven Insights:",
      description: "Make informed decisions with advanced reporting.",
    },
    {
      id: 5,
      title: "Data-Driven Insights:",
      description: "Make informed decisions with advanced reporting.",
    },
    {
      id: 6,
      title: "Secure & Compliant:",
      description:
        "Protect patient data with Kenyan Data Protection Act compliance.",
    },
  ];

  return (
    // container div - using xl for 1280+ which is closer to 1440px design
    <section className="bg-cosmic-void flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 xl:gap-[10px] w-full xl:w-[1440px] mx-auto h-auto xl:h-[1024px] px-4 sm:px-6 md:px-8 lg:px-[48px] xl:px-[64px] py-10 md:py-16 xl:py-[82px]">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="/assets/home/Benefits.png"
          alt="Benefits"
          width={1000}
          height={1000}
          className="w-[90%] sm:w-[80%] md:w-[450px] lg:w-[500px] xl:w-[533px] h-auto aspect-[533/840] xl:h-[840px] object-cover rounded-tl-[30px] sm:rounded-tl-[40px] md:rounded-tl-[60px] xl:rounded-tl-[100px] rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[60px] xl:rounded-br-[0px]"
        />
      </div>

      {/* Right Side - Text and Icons */}
      <div className="w-full md:w-1/2 lg:w-[600px] xl:w-[676px] h-auto xl:h-[766px] flex flex-col gap-6 md:gap-8 xl:gap-[33px] mt-8 md:mt-0">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-helvetica-bold">
          Benefits of Kazi Afya
        </h1>

        {/* List Container */}
        <div className="w-full h-auto xl:h-[591px] flex flex-col gap-3 md:gap-4 xl:gap-[15px]">
          {listItems.map((item) => (
            <div key={item.id} className="flex gap-3 xl:gap-[10px] p-2 xl:p-[10px]">
              <HeartIcon className="w-6 h-6 md:w-7 md:h-7 xl:w-[30px] xl:h-[30px]" />
              <div className="flex flex-col">
                <h2 className="text-sky-blue text-base sm:text-lg xl:text-[20px] font-helvetica-semibold">
                  {item.title}
                </h2>
                <p className="text-white text-sm sm:text-base xl:text-[20px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-wizard-white w-[180px] xl:w-[203px] h-[40px] xl:h-[44px] rounded-[20px] sm:rounded-[25px] xl:rounded-[30px] pr-[25px] sm:pr-[30px] xl:pr-[37px] py-[8px] xl:py-[10px] flex items-center gap-3 xl:gap-[15px] font-helvetica-regular">
          <ArrowTopRightIcon className="w-4 h-4 md:w-6 md:h-6" />
          <p className="text-sm md:text-base xl:text-[16px] text-nowrap">Request Demo</p>
        </button>
      </div>
    </section>
  );
};

export default Benefits;