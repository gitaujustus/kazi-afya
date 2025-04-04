import Image from "next/image";

const AdditionalCard = ({ image, title, description }) => {
    return ( 
        <div className="w-full h-full rounded-[20px] bg-white p-3 sm:p-4 lg:p-[15px] 2xl:p-5 flex flex-col gap-3 sm:gap-4 lg:gap-[15px] 2xl:gap-5 shadow-[0_0_3.8px_#0057B840] 2xl:shadow-md">
            <div className="w-full aspect-[294/230] relative rounded-[10px] overflow-hidden">
                <Image 
                    src={image} 
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[10px]"
                />
            </div>

            <h3 className="font-figtree font-medium text-lg sm:text-xl lg:text-[20px] 2xl:text-[22px] text-london-rain">{title}</h3>

            <p className="font-figtree font-normal text-sm sm:text-base lg:text-[16px] 2xl:text-lg text-cosmic-void">{description}</p>
        </div>
     );
}
 
export default AdditionalCard;