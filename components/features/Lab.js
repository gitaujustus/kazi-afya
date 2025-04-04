import Image from "next/image";
import LabCard from "./LabCard";
import { FileIcon, RunIcon, ReportingIcon, TestTrackingIcon } from "../../icons";

const labData = [
    {
        icon: FileIcon,
        title: "Patient Result Access",
        description: "Provides secure online access to diagnostic reports, coupled with timely notifications, to improve patient engagement and convenience."
    },
    {
        icon: RunIcon,
        title: "Resource Scheduling",
        description: "Optimizes the scheduling of laboratory and radiology equipment, effectively managing appointments for MRI, CT scans, and X-rays to maximize efficiency."
    },
    {
        icon: ReportingIcon,
        title: "Automated Reporting",
        description: "Generates digital reports to reduce errors and improve accuracy, seamlessly integrating with doctors for easy access to patient results."
    },
    {
        icon: TestTrackingIcon,
        title: "Lab Test Tracking",
        description: "Configures alerts for low stock levels, automating supplier requests to guarantee timely restocking and continuity of supply."
    }
];

const Lab = () => {
    return ( 
        // Section 5 
        <section className="bg-white flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[102px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[112px]">
            {/* Left column */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <Image
                    src="/assets/Doc.png"
                    alt="Doctor with a stethoscope"
                    width={1000}
                    height={1000}
                    className="object-cover w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[710px] xl:h-[710px] mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-[96px]"
                />
            </div>

            {/* Right column */}
            <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
                <h1 className="font-helvetica-bold font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[120%] text-london-rain text-center md:text-right">Laboratory & Radiology Management</h1>

                <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-[42px] pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-[36px]">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] text-cosmic-void font-figtree font-medium text-center md:text-right">
                    The Kazi Afya platform transforms healthcare management by offering a comprehensive laboratory management system that enhances patient engagement, streamlines operations, and ensures accuracy. Its key features include:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-y-[25px] xl:gap-x-[40px] justify-items-center">
                    {labData.map((item, index) => (
                        <LabCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Lab;