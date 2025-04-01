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
            description: "Protect patient data with Kenyan Data Protection Act compliance.",
        },
    ];


  return (
    // container div
    <section className="bg-cosmic-void flex justify-between items-center gap-[10px]   w-[1440px] h-[1024px] px-[64px] py-[82px] ">
      {/* Right side - Image */}
      <Image
        src="/assets/home/Benefits.png"
        alt="Benefits"
        width={1000}
        height={1000}
        className="w-[533px] h-[840px] object-cover rounded-tl-[100px]"
      />


      {/* Left Side - Text and Icons */}
      <div className="w-[676px] h-[766px] flex flex-col gap-[33px]">

        {/* Heading */}
        <h1 className="text-wizard-white text-[48px] font-helvetica-regular"> Benefits of Kazi Afya</h1>

        {/* List Container  */}
        <div className="w-full h-[591px] flex flex-col gap-[15px]">
          {listItems.map((item) => (
            <div key={item.id} className="flex gap-[10px] p-[10px]">
                <HeartIcon />
               <div className="flex flex-col text-[20px]">
                  <h2 className="text-sky-blue font-bold font-helvetica-semibold">{item.title}</h2>
                  <p className="text-white ">{item.description}</p>
               </div>
            </div>
          ))}
        </div>


        {/* Button  */}

        <button className="bg-wizard-white w-[203px] h-[44px] rounded-[30px] pr-[37px] py-[10px] flex items-center gap-[15px] font-helvetica-regular ">
          <ArrowTopRightIcon />
          <p>Request Demo</p>

        </button>



      </div>
    </section>
  );
};

export default Benefits;
