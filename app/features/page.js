// import { FeatureCard, FeatureCardRow2 } from "@/components/features/featuresCard";
// import { FileIcon, FirstRegIcon, ReferalIcon, CommunicationIcon, RecordIcon } from "@/components/Icons";
// import Image from "next/image";

// // Feature card data defined at the top of the file
// const featuresData = [
//   {
//     icon: FileIcon,
//     title: "Centralized Records:",
//     description: "Securely stores and manages complete patient histories—such as diagnoses and treatment plans—allowing healthcare providers quick and easy access to critical information."
//   },
//   {
//     icon: FirstRegIcon,
//     title: "Fast Registration:",
//     description: "Streamlines onboarding with a quick, paperless registration process, reducing wait times and improving the overall patient experience."
//   }
// ];

// // Second row feature data
// const featuresRow2Data = [
//     {
//       icon: RecordIcon, 
//       title: "Electronic Medical Records:",
//       description: "Enables easy retrieval of medical data to support accurate diagnoses and effective treatment plans, while fostering better coordination among healthcare providers through shared access."
//     },
//     {
//       icon: CommunicationIcon, 
//       title: "Patient Communication:",
//       description: "Offers a secure messaging portal for sending appointment reminders and sharing test results, boosting patient engagement with timely notifications and follow-ups."
//     },
//     {
//       icon: ReferalIcon, 
//       title: "Referral Management:",
//       description: "Seamlessly handles referrals between departments and external specialists, ensuring efficient communication and continuity of care for patients."
//     }
//   ];

// const Features = () => {
//   return (
//     <main>

//       {/* Patient Management System Features */}
//       <section className="px-4 pb-[65px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[188px] min-h-screen">
//         {/* Flex container with reverse order on medium screens and up */}
//         <div className="pt-[20px] md:pt-0 flex flex-col md:flex-row-reverse gap-6 md:gap-8 lg:gap-10 xl:gap-[50px] items-center justify-between">
//           {/* Image container - only visible from lg (large screens) and up */}
//           <div className="sm:hidden lg:block w-[300px] sm:w-[400px] xl:w-[432px]">
//             <Image
//               src="/assets/features/sect1.png"
//               alt="features"
//               width={1024}
//               height={1024}
//               className="w-full h-auto"
//             />
//           </div>

//           {/* Text content - responsive width */}
//           <div className=" w-full md:w-full lg:w-[580px] xl:w-[683px]">
//             <h1 className="font-helvetica-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-london-rain">
//               Patient Management System Features
//             </h1>
//             <p className="pt-4 sm:pt-6 md:pt-8 xl:pt-[40px] text-cosmic-void font-figtree text-base sm:text-lg">
//               The Kazi Afya system transforms healthcare management by offering
//               a comprehensive set of tools designed to streamline processes,
//               enhance patient care, and improve provider coordination. Its key
//               features include:
//             </p>

//             {/* First row of cards */}
//             <div className="flex flex-col sm:flex-row pt-6 sm:pt-8 xl:pt-[34px] gap-4 sm:gap-6 xl:gap-[25px]">
//               <FeatureCard 
//                 icon={featuresData[0].icon}
//                 title={featuresData[0].title}
//                 description={featuresData[0].description}
//               />
              
//               <div className="mt-4 sm:mt-0">
//                 <FeatureCard 
//                   icon={featuresData[1].icon}
//                   title={featuresData[1].title}
//                   description={featuresData[1].description}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second row of cards - responsive flex */}
//         <div className="flex flex-col sm:flex-row flex-wrap pt-6 sm:pt-8 xl:pt-[34px] gap-8 sm:gap-6 xl:gap-[25px] mt-4 md:mt-6 lg:mt-8">
//           {featuresRow2Data.map((feature, index) => (
//             <FeatureCardRow2 
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//       </section>


//     {/* Section 2 */}

//     </main>
//   );
// };

// export default Features;


// pages/features.jsx
import FeatureSection from "@/components/features/featuresIndenticalSections";
import React from "react";
import { section1Data, section2Data, section3Data, section4Data, section7Data } from "@/components/features/featuresData";
const Features = () => {
  return (
    <main>
      {/* Section 1: Patient Management System Features */}
      <section className="px-4 pb-[65px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[188px] min-h-screen">
        <FeatureSection sectionData={section1Data} />
      </section>

      {/* Section 2: Appointment Scheduling & Telemedicine */}
      <section className="px-4 pb-[5px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section2Data} />
      </section>

      {/* Section 3:  Billing & Payments*/}
      <section className="px-4 pb-[5px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section3Data} />
      </section>
      {/* Section 4: Inventory & Pharmacy Management*/}
      <section className="px-4 pb-[65px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section4Data} />
      </section>

      
      {/* Section 7: Staff, Payroll & HR Management*/}
      <section className="px-4 pb-[65px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section7Data} />
      </section>

    </main>
  );
};

export default Features;