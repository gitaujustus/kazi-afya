import Image from "next/image";

const FeatureSection = ({ 
    imageSrc, 
    imageAlt, 
    title, 
    description, 
    content, 
    imagePosition = "left", // "left" or "right"
    className = "" // Additional classes for customization
}) => {
    const ImageColumn = () => (
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={1000}
                height={1000}
                className=" relative z-10 object-contain w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[714px] xl:h-[715px] mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-[96px]"
            />
        </div>
    );

    const ContentColumn = () => (
        <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0 relative z-0">
            <h1 className={`font-helvetica-bold font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] leading-[120%] text-london-rain ${imagePosition === "left" ? "text-right" : "text-left"}`}>
                {title}
            </h1>

            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-[42px] pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-[36px]">
                <p className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] text-cosmic-void font-figtree font-medium ${imagePosition === "left" ? "text-right" : "text-left"}`}>
                    {description}
                </p>
            </div>

            {content}
        </div>
    );

    return (
        <section className={`bg-white flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[102px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[112px] ${className}`}>
            {imagePosition === "left" ? (
                <>
                    <ImageColumn />
                    <ContentColumn />
                </>
            ) : (
                <>
                    <ContentColumn />
                    <ImageColumn />
                </>
            )}
        </section>
    );
};

export default FeatureSection; 