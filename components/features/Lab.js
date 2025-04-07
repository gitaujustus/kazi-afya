import LabCard from "./LabCard";
import { ResourceIcon,
    SearchResualtIcon,
    ClipboardIcon,
    LabIcon
     } from "../Icons";
import FeatureSection from "../shared/FeatureSection";

const labData = [
    {
        icon: ResourceIcon,
        title: "Patient Result Access",
        description: "Provides secure online access to diagnostic reports, coupled with timely notifications, to improve patient engagement and convenience."
    },
    {
        icon: SearchResualtIcon,
        title: "Resource Scheduling",
        description: "Optimizes the scheduling of laboratory and radiology equipment, effectively managing appointments for MRI, CT scans, and X-rays to maximize efficiency."
    },
    {
        icon: ClipboardIcon,
        title: "Automated Reporting",
        description: "Generates digital reports to reduce errors and improve accuracy, seamlessly integrating with doctors for easy access to patient results."
    },
    {
        icon: LabIcon,
        title: "Lab Test Tracking",
        description: "Configures alerts for low stock levels, automating supplier requests to guarantee timely restocking and continuity of supply."
    }
];

const Lab = () => {
    const content = (
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
    );

    return (
        <FeatureSection
            imageSrc="/assets/Doc.webp"
            imageAlt="Doctor with a stethoscope"
            title="Laboratory & Radiology Management"
            description="The Kazi Afya platform transforms healthcare management by offering a comprehensive laboratory management system that enhances patient engagement, streamlines operations, and ensures accuracy. Its key features include:"
            content={content}
            imagePosition="left"
        />
    );
}

export default Lab;