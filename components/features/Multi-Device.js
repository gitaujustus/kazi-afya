import LabCard from "./LabCard";
import { FileIcon, RunIcon, ReportingIcon, TestTrackingIcon } from "../../icons";
import FeatureSection from "../shared/FeatureSection";

const labData = [
    {
        icon: FileIcon,
        title: "Anytime Access",
        description: "Provides secure access to the system from any device—desktops, tablets, or smartphones—allowing convenient data retrieval from anywhere with an internet connection."
    },
    {
        icon: RunIcon,
        title: "Offline Functionality",
        description: "Enables uninterrupted work in low-connectivity environments, with automatic data syncing once the connection is restored, ensuring no information is lost."
    },
    {
        icon: ReportingIcon,
        title: "Third-Party Integration",
        description: "Seamlessly connects with government health databases, insurance firms, and financial platforms, facilitating smooth data exchange and boosting operational efficiency across systems."
    }
];

const MultiDevice = () => {
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
            imageSrc="/assets/Multi-Device.png"
            imageAlt="Multi device and Cloud Based Access"
            title="Multi-Device & Cloud-Based Access"
            description="The Kazi Afya platform transforms healthcare management by offering a flexible, cloud-based system with multi-device access, ensuring connectivity, resilience, and convenience. Its key features include:"
            content={content}
            imagePosition="right"
            className="relative"
        />
    );
}

export default MultiDevice;