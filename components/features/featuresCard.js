// FeatureCard.jsx
import React from "react";

// First card style component
export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="flex flex-col gap-2 sm:gap-[10px] w-full sm:w-1/2 lg:w-[315px] xl:w-[331px] h-auto sm:h-[220px] lg:h-[211px] rounded-[10px] px-3 py-5 sm:p-4 xl:p-[15px]"
      style={{
        boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
      }}
    >
      <Icon />
      <p className="font-figtree font-medium text-base sm:text-lg xl:text-[18px] leading-tight xl:leading-[120%] text-london-rain">
        {title}
      </p>
      <p className="text-cosmic-void leading-normal text-sm sm:text-base xl:text-[16px] xl:leading-[24px]">
        {description}
      </p>
    </div>
  );
};

// Second card style component (for the second row)
export const FeatureCardRow2 = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="flex flex-col gap-2 sm:gap-[10px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-17px)] xl:w-[331px] h-auto sm:h-[220px] lg:h-[211px] rounded-[10px] px-3 py-5 sm:p-4 xl:p-[15px]"
      style={{
        boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
      }}
    >
      <Icon />
      <p className="font-figtree font-medium text-base sm:text-lg xl:text-[18px] leading-tight xl:leading-[120%] text-london-rain">
        {title}
      </p>
      <p className="text-cosmic-void leading-normal text-sm sm:text-base xl:text-[16px] xl:leading-[24px]">
        {description}
      </p>
    </div>
  );
};