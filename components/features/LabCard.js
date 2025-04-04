const LabCard = ({ icon: Icon, title, description }) => {
    return ( 
        <div className="w-full min-h-[180px] sm:min-h-[195px] md:min-h-[203px] lg:min-h-[207px] xl:min-h-[211px] rounded-[10px] p-3 sm:p-4 md:p-[12px] lg:p-[13px] xl:p-[15px] flex flex-col gap-2 sm:gap-3 md:gap-[8px] lg:gap-[9px] xl:gap-[10px] bg-white shadow-[0_4px_8px_rgba(0,87,184,0.25)]">
            <Icon />
            <h3 className="leading-[120%] text-base sm:text-[16px] md:text-[17px] lg:text-[17.5px] xl:text-[18px] text-london-rain font-figtree font-medium">{title}</h3>
            <p className="leading-[24px] text-sm sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] text-cosmic void font-figtree font-normal">{description}</p>
        </div>
     );
}
 
export default LabCard;