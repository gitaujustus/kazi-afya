import LabCard from "./LabCard";
import { FileIcon, RunIcon, ReportingIcon, TestTrackingIcon } from "../../icons";
import FeatureSection from "../shared/FeatureSection";

const labData = [
    {
        icon: FileIcon,
        title: "Custom Dashboards:",
        description: "Monitors key performance indicators in real-time, with tailored dashboards displaying relevant metrics for different departments to support informed decision-making."
    },
    {
        icon: RunIcon,
        title: "AI Analytics",
        description: "Leverages artificial intelligence to predict patient trends and seasonal diseases, while generating financial forecasts to guide strategic planning and resource allocation."
    },
    {
        icon: ReportingIcon,
        title: "Compliance Reporting",
        description: "Produces detailed reports to meet regulatory requirements, ensuring adherence to data privacy regulations through automated audits for seamless compliance."
    }
];

const ReportingBI = () => {
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
            imageSrc="/assets/ReportingBI.png"
            imageAlt="Doctor with a laptop"
            title="Reporting & Business Intelligence"
            description="The Kazi Afya platform enhances healthcare management with a powerful reporting and business intelligence system, delivering actionable insights, predictive analytics, and regulatory compliance. Its key features include:"
            content={content}
            imagePosition="right"
            className="relative"
        />
    );
}

export default ReportingBI;