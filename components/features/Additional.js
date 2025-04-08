import { ArrowTopRightIcon, ArrowRight, WhiteArrowRight } from "@/icons";
import AdditionalCard from "./AdditionalCard";

const additionalFeaturesData = [
  {
    id: 1,
    image: "/assets/Additional-1.webp",
    title: "Ambulance Management",
    description:
      "Offers real-time tracking of ambulance locations for efficient dispatch, coordinating emergency services to ensure timely and effective patient care.",
  },
  {
    id: 2,
    image: "/assets/Additional-2.webp",
    title: "Ward Allocation",
    description:
      "Manages bed availability and patient assignments efficiently, optimizing resource utilization across the hospital to improve operational flow.",
  },
  {
    id: 3,
    image: "/assets/Additional-3.webp",
    title: "Patient Feedback",
    description:
      "Collects valuable insights from patients to enhance service quality, fostering better engagement and communication for continuous improvement.",
  },
  {
    id: 4,
    image: "/assets/Additional-4.webp",
    title: "Multi-Branch Support",
    description:
      "Designed to manage operations across multiple healthcare facilities, ensuring consistent service delivery and seamless resource sharing.",
  },
];

const AdditionalFeatures = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[45px] 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[117px] 2xl:py-28 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[66px] 2xl:gap-16 min-h-screen">
      <h1 className="font-helvetica-bold font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] 2xl:text-[72px] leading-tight text-center text-london-rain">
        Additional Features
      </h1>

      <p className="font-figtree font-medium text-base sm:text-lg md:text-xl lg:text-[20px] 2xl:text-xl text-center text-cosmic-void w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-[985px] 2xl:max-w-3xl">
        The Kazi Afya platform enhances healthcare management with a set of
        additional features focused on emergency response, resource
        optimization, patient engagement, and scalability. Its key features
        include:
      </p>

      <div className="w-full max-w-7xl 2xl:max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[18px] 2xl:gap-10 px-4 sm:px-6 md:px-8 lg:px-0">
        {additionalFeaturesData.map((feature) => (
          <AdditionalCard
            key={feature.id}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* <button className="w-full max-w-[226px] h-[47px] 2xl:max-w-[250px] 2xl:h-12 rounded-[30px] flex items-center justify-center gap-3 py-[10px] pr-[37px] bg-wizard-white hover:bg-london-rain hover:text-white font-helvetica-regular transition-all duration-500 ease-in-out group">
        <span className="transition-transform duration-500 ease-in-out group-hover:rotate-[47deg]">
          <ArrowTopRightIcon className="w-11 h-11"  />
        </span>
        Get Started Today
      </button> */}
       <button
          className="bg-london-rain  relative mx-auto w-[180px] md:w-[200px] xl:w-[300px] 2xl:w-[280px] h-[48px] md:h-[54px] 2xl:h-[72px] rounded-[36px] 2xl:rounded-[40px] px-[82px] py-[8px] xl:py-[10px] 2xl:py-[14px] 2xl:my-20 flex items-center justify-center gap-3 xl:gap-[15px] 2xl:gap-[20px] font-helvetica-regular text-white hover:text-white group hover:bg-[#022c61]   transition-all duration-700 ease-in-out "
          // initial="initial"
          // whileHover="hover"
        >
          {/* <div
            className="absolute left-5 inset-0 bg-london-rain z-0 rounded-full"
            variants={backgroundVariants} // Assumed to be defined at the top
            style={{ transformOrigin: "left" }}
          /> */}
          <p className="text-md md:text-lg z-10 xl:text-[16px] 2xl:text-[20px] text-nowrap font-helvetica-regular ">
            Get Started Today
          </p>
          <div className=" group-hover:">
            {/* <ArrowRight className="w-4 h-4 hidden group-hover:block" /> */}
            <WhiteArrowRight className="w-4 h-4 relative z-10 " />
          </div>
        </button>
    </section>
  );
};

export default AdditionalFeatures;
