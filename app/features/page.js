import FeatureSection from "@/components/features/featuresIndenticalSections";
import React from "react";
import { section1Data, section2Data, section3Data, section4Data, section7Data } from "@/components/features/featuresData";
import Lab from "@/components/features/Lab";
const Features = () => {
  return (
    <main>
      {/* Section 1: Patient Management System Features */}
      <section className="px-4 pb-[5px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40  xl:pt-[188px] min-h-screen">
        <FeatureSection sectionData={section1Data} />
      </section>

      {/* Section 2: Appointment Scheduling & Telemedicine */}
      <section className="px-4 pb-[5px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section2Data} />
      </section>

      {/* Section 3:  Billing & Payments*/}
      <section className="px-4 pb-[5px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section3Data} />
      </section>
      {/* Section 4: Inventory & Pharmacy Management*/}
      <section className="px-4 pb-[65px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section4Data} />
      </section>

      {/* Other Sections */}
      <Lab />


      {/* Section 7: Staff, Payroll & HR Management*/}
      <section className="px-4 pb-[65px] sm:px-8 md:px-12 lg:px-16 xl:px-[70px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[117px] min-h-screen">
          <FeatureSection sectionData={section7Data} />
      </section>

    </main>
  );
};

export default Features;