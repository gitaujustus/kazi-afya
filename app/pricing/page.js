'use client'
import { ArrowTopRightIcon } from "@/icons";
import { useState } from "react";

const Pricing = () => {


    const [isToggled, setIsToggled] = useState(false); 
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

  return (
    <main className="px-[64px] pt-[155px]">
      <section
        className=" p-[30px] w-full rounded-[10px] flex justify-between"
        style={{
          boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
        }}
      >
        <div>
          <div className="flex gap-[10px] items-center">
            <p className="font-figtree text-[24px] text-black leading-[120%] h-[29px] font-500">
              Free 1 - month Professional trial available
            </p>
            <p className="font-figtree text-[14px] leading-[120%] p-[10px] w-[80px] rounded-[10px] bg-london-rain text-white">
              save 10%
            </p>
          </div>
          <p className="font-figtree text-[16px] text-black leading-[120%]">
            No credit card required
          </p>
        </div>

        <div>
          <button className="bg-wizard-white flex items-center gap-[10px] md:gap-[15px] w-[200px] md:w-[229px] h-[40px] md:h-[44px] rounded-[30px] pr-[30px] md:pr-[37px] py-[8px] md:py-[10px] hover:bg-london-rain hover:text-white group transition-all duration-700 ease-in-out">
            <div className="group-hover:rotate-47 group-transition-all duration-700 ease-in-out">
              <ArrowTopRightIcon width="44" height="44" />
            </div>
            <span className="text-[14px] md:text-[16px] text-london-rain font-helvetica-regular text-nowrap group-hover:text-white">
              Switch to annually
            </span>
          </button>
        </div>
      </section>

{/* toggle button */}
      <div className="flex items-center justify-center rounded-full px-4 py-[59px] w-[200px]">
      <span className="text-sm font-semibold text-gray-700 mr-2">Monthly</span>
      <div
        className="relative inline-flex items-center cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`w-11 h-6 rounded-full transition-colors duration-300 ${
            isToggled ? "bg-gray-200" : " bg-blue-500"
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform duration-300 ${
              isToggled ? "translate-x-5" : "left-0.5"
            }`}
          ></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-700 ml-2">Annually</span>
    </div>

    {/* pricing */}
    <section>

      {/* pricing 1 */}
      <div className="p-[30px] rounded-[20px] flex flex-col gap-[10px] bg-white h-[1126px] w-[423px] "
      style={{
        boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
      }}
      >
        <div className="flex flex-col gap-[27px] leading-[120%]">
          <h3 className="text-[24px]  font-figtree font-600 text-cosmic-void">Essential Plan </h3>
          <p className="font-figtree  font-400">Small clinics or startups</p>
          <p className="font-figtree text-[24px]"><span className="text-london-rain font-800">$150</span>/ months</p>
        </div>

        <button>
          Get Started
        </button>


      </div>

    </section>


    </main>
  );
};

export default Pricing;
