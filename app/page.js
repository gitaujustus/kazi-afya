'use client'
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/home/Benefits";
import CTASection from "@/components/home/CTA";
import FAQs from "@/components/home/Questions";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1 */}
      <HeroSection />
      
     

<motion.section 
initial={{ opacity: 0.7, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
className="w-full bg-cosmic-void flex justify-center items-center  px-[20px] py-[150px] sm:px-[48px] md:py-[180px] md:px-[64px] lg:py-[200px] lg:px-[80px] xl:py-[221px] xl:px-[10.57vw]">
  <motion.div className="max-w-[95%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[1078px] 2xl:max-w-[1338px] gap-[10px]"
  
  >
    <div className="text-center mb-10 sm:mb-8 md:mb-10 lg:mb-[15px] xl:mb-[20px]">
      <span className="text-white text-[22px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] tracking-wider leading-[120%] font-helvetica-bold">
        who we are
      </span>
    </div>
    <div className="relative text-center">
      <h2 className="text-[40px] sm:text-[50px] md:text-[75px] lg:text-[110px] xl:text-[140px] 2xl:text-[160px] font-helvetica-bold font-700 leading-[120%]">
        <span className="block text-sky-blue mb-6 sm:mb-3 md:mb-4">Critical thinkers</span>
        <span className="block text-blue-leviathan mb-6 sm:mb-3 md:mb-4">Analysts</span>
        <span className="block text-private-jet">Weavers</span>
      </h2>
    </div>
  </motion.div>
</motion.section>


      {/* Section 3 */}
      <section>
        <div className=" py-[80px] lg:py-[119px] px-[2vw] md:px-[3vw] lg:px-[5.21vw]  max-w-[1440px] mx-auto">
          <motion.h2 
          initial={{opacity:0.7, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 1, delay: 0.2}}
          viewport={{once:false}}
          className="font-helvetica-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] text-cosmic-void max-w-[98vw] md:max-w-[90vw] lg:max-w-[78vw] text-center mx-auto">
            Discover hospital management redefined. Experience seamless efficiency at every step
          </motion.h2>
          {/* content */}
          <div className="mt-[80px] lg:mt-[147px] px-5 lg:px-[75px]  lg:mb-[119px] space-y-[60px] md:space-y-[80px]">
            {/* Step 1 */}
            <motion.div className="flex flex-col md:flex-row gap-6 "
              initial={{ opacity: 0.7, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="text-london-rain text-[80px] md:text-[120px] lg:text-[200px] font-helvetica-semibold leading-none">
                01
              </div>
              <div className="flex-1 relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-london-rain before:to-wizard-white">
                <div className="mb-3 pt-[20px] text-[20px] tracking-wider text-blue-leviathan font-helvetica-bold">
                  Step 1
                </div>
                
                <h3 className="text-[24px] md:text-[32px] lg:text-[48px] font-helvetica-semibold tracking-[0.15px] text-london-rain mb-4 leading-[120%]">
                  Customize Your Hospital Setup
                </h3>
                <motion.p 
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1, delay: 0.5}}
                viewport={{once:true}}
                className="text-[14px] md:text-[16px] lg:text-[20px] 78vw]text-[#000000] leading-[160%] max-w-[906px] font-figtree font-400 py-[30px] tracking-[0.15px]">
                  Provide key details about your hospital, including departments, staff roles, and operational needs. Our system will tailor the best configuration for you.
                </motion.p>
                <button className="px-[20px] py-[10px] bg-london-rain text-white rounded-[30px] text-[14px] transition-all duration-300 ease-in-out hover:bg-blue-leviathan">
              Set Up Now
            </button>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="flex flex-col md:flex-row gap-6 "
             initial={{ opacity: 0.7, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-london-rain text-[80px] md:text-[120px] lg:text-[200px] font-helvetica-semibold leading-none">
                02
              </div>
              <div className="flex-1 border-t-2 border-wizard-white">
                <div className="mb-3 pt-[20px] text-[20px] tracking-wider text-blue-leviathan font-helvetica-bold">
                  Step 2
                </div>
                <h3 className="text-[24px] md:text-[32px] lg:text-[48px] font-helvetica-semibold tracking-[0.15px] text-london-rain mb-4 leading-[120%]">
                  Integrate & Onboard Effortlessly
                </h3>
                <motion.p 
                initial={{opacity:0, y: 40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1, delay: 0.5}}
                viewport={{once:true}}
                className="text-[14px] md:text-[16px] lg:text-[20px] text-[#000000] leading-[160%] max-w-[906px] font-figtree font-400 py-[30px] tracking-[0.15px]">
                  Seamlessly integrate Kazi Afya with your existing systems. Our experts will guide you through data migration, user training, and workflow optimization.
                </motion.p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="flex flex-col md:flex-row gap-6 "
             initial={{ opacity: 0.7, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="text-london-rain text-[80px] md:text-[120px] lg:text-[200px] font-helvetica-semibold leading-none">
                03
              </div>
              <div className="flex-1 border-t-2 border-wizard-white">
                <div className="mb-3 pt-[20px] text-[20px] tracking-wider text-blue-leviathan font-helvetica-bold">
                  Step 3
                </div>
                <h3 className="text-[24px] md:text-[32px] lg:text-[48px] font-helvetica-semibold tracking-[0.15px] text-london-rain mb-4 leading-[120%]">
                  Launch & Optimize
                </h3>
                <motion.p 
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1, delay: 0.5}}
                viewport={{once:true}}
                className="text-[14px] md:text-[16px] lg:text-[20px] text-[#000000] leading-[160%] max-w-[906px] font-figtree font-400 pt-[30px] tracking-[0.15px]">
                  Go live with Kazi Afya and experience smooth hospital management. Monitor real-time analytics, automate processes, and enhance patient care from day one.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>  
     </section>

     {/* Section 4 - Benefits  */}
      <Benefits />

      {/* Section 5 - Questions */}
      <FAQs />

      {/* Section 6 - CTA */}
      <CTASection />



    </main>
  );
}
