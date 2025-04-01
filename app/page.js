import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/home/Benefits";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Who Are We Section */}
      <section className="w-full bg-cosmic-void flex justify-center items-center px-5 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-[1024px]">
        <div className="mx-auto">
          <div className="text-center mb-[10px] sm:mb-[15px] md:mb-[20px]">
            <span className="text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-wider leading-[120%]">
              who we are
            </span>
          </div>
          <div className="relative text-center">
            <h2 className="text-[50px] sm:text-[60px] md:text-[90px] lg:text-[140px] font-700 leading-[120%]">
              <span className="block text-sky-blue mb-2 sm:mb-3 md:mb-4">Critical thinkers</span>
              <span className="block text-blue-leviathan mb-2 sm:mb-3 md:mb-4">Analysts</span>
              <span className="block text-private-jet">Weavers</span>
            </h2>
          </div>
        </div>
      </section>


      <section>
        <div className=" pt-[80px] lg:pt-[129px] pb-[100px] lg:pb-[157px] max-w-[1440px] mx-auto">
          <h2 className="font-500 text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] text-cosmic-void max-w-[900px] text-center mx-auto">
            Discover hospital management redefined. Experience seamless efficiency at every step
          </h2>

          {/* content */}
          <div className="mt-[80px] lg:mt-[147px] px-5 lg:px-[75px]  lg:mb-[119px] space-y-[60px] md:space-y-[80px]">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="text-london-rain text-[80px] md:text-[120px] lg:text-[200px] font-bold leading-none">
                01
              </div>
              <div className="flex-1 relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-london-rain before:to-wizard-white">
                <div className="mb-3 pt-[20px] text-[20px] tracking-wider text-blue-leviathan">
                  Step 1
                </div>
                <h3 className="text-[24px] md:text-[32px] lg:text-[48px] font-500 tracking-[0.15px] text-london-rain  mb-4 leading-[120%]">
                  Customize Your Hospital Setup
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#000000] leading-[160%] max-w-[906px] font-400 py-[30px] tracking-[0.15px]">
                  Provide key details about your hospital, including departments, staff roles, and operational needs. Our system will tailor the best configuration for you.
                </p>
                <button className="px-[20px] py-[10px] bg-london-rain text-white rounded-[30px] text-[14px] md:text-[16px] hover:bg-opacity-90 transition-all">
                  Set Up Now
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="text-london-rain text-[80px] md:text-[120px] lg:text-[200px] font-bold leading-none">
                02
              </div>
              <div className="flex-1 border-t-2 border-wizard-white">
                <div className="mb-3 pt-[20px] text-[20px] tracking-wider text-blue-leviathan">
                  Step 2
                </div>
                <h3 className="text-[24px] md:text-[32px] lg:text-[48px] font-500 tracking-[0.15px] text-london-rain  mb-4 leading-[120%]">
                  Integrate & Onboard Effortlessly
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#000000] leading-[160%] max-w-[906px] font-400 py-[30px] tracking-[0.15px]">
                  Seamlessly integrate Kazi Afya with your existing systems. Our experts will guide you through data migration, user training, and workflow optimization.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="text-london-rain text-[80px] md:text-[120px] lg:text-[200px] font-bold leading-none">
                03
              </div>
              <div className="flex-1 border-t-2 border-wizard-white">
                <div className="mb-3 pt-[20px] text-[20px] tracking-wider text-blue-leviathan">
                  Step 3
                </div>
                <h3 className="text-[24px] md:text-[32px] lg:text-[48px] font-500 tracking-[0.15px] text-london-rain  mb-4 leading-[120%]">
                  Launch & Optimize
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#000000] leading-[160%] max-w-[906px] font-400 py-[30px] tracking-[0.15px]">
                  Go live with Kazi Afya and experience smooth hospital management. Monitor real-time analytics, automate processes, and enhance patient care from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
    </main>
  );
}
