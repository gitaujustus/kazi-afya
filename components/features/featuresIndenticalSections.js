// components/features/FeatureSection.jsx
import { FeatureCard, FeatureCardRow2 } from "@/components/features/featuresCard";
import Image from "next/image";

const FeatureSection = ({ sectionData }) => {
  const { title, description, imageSrc, imageAlt, featuresRow1, featuresRow2 } = sectionData;

  return (
    <section>
      {/* Flex container with reverse order on medium screens and up */}
      <div className="pt-[20px] md:pt-0 flex flex-col md:flex-row-reverse gap-6 md:gap-8 lg:gap-10 xl:gap-[50px] items-center ">
        {/* Image container - only visible from lg (large screens) and up */}
        <div className="sm:hidden lg:block w-[300px] sm:w-[400px] xl:w-[432px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </div>

        {/* Text content - responsive width */}
        <div className="w-full md:w-full lg:w-[580px] xl:w-[683px]">
          <h1 className="font-helvetica-bold leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-london-rain  ">
            {title}
          </h1>
          <p className="pt-4 sm:pt-6 md:pt-8 xl:pt-[40px] text-cosmic-void font-figtree text-base sm:text-lg">
            {description}
          </p>

          {/* First row of cards */}
          <div className="flex flex-col sm:flex-row pt-6 sm:pt-8 xl:pt-[34px] gap-4 sm:gap-6 xl:gap-[25px]">
            {featuresRow1.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Second row of cards - responsive flex */}
      <div className="flex flex-col sm:flex-row flex-wrap pt-6 sm:pt-8 xl:pt-[34px] gap-8 sm:gap-6 xl:gap-[25px] mt-4 md:mt-6 lg:mt-8">
        {featuresRow2.map((feature, index) => (
          <FeatureCardRow2
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;