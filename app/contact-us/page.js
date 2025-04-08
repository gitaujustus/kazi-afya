'use client'
import { Locations } from "@/components/Icons";
import Image from "next/image";
import ContactForm from "@/components/contausForm";

const Contacts = () => {
    return ( 
    <main className="flex flex-col md:flex-row">
        {/* image */}
        {/* <div className="bg-blue-leviathan w-full h-[30vh] md:h-auto md:w-1/3 lg:w-full hidden lg:block">
            <Image 
                src="/assets/contacts.webp" 
                width={1000} 
                height={5200} 
                alt="contacts" 
                className="object-cover opacity-40 w-full h-full"
            />
        </div> */}

        {/* locations */}
        <div className="pt-[80px] pb-[65px] sm:pt-[100px] md:pt-[150px] xl:pt-[207px] px-[20px] sm:px-[30px] md:px-[42px] xl:px-[56px] gap-[10px] w-full md:min-w-[37vw] bg-wizard-white">
            <h1 className="text-[48px] sm:text-[60px] md:text-[72px] xl:text-[96px] leading-[120%] font-helvetica-bold text-london-rain">Our locations</h1>
            <div className="flex flex-col gap-[11px] pb-[30px] sm:pb-[40px] md:pb-[50px] xl:pb-[67px] pt-[40px] sm:pt-[60px] md:pt-[75px] xl:pt-[91px]">
                <p className="flex items-center gap-[5px]">
                    <span><Locations/></span> 
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-helvetica-semibold text-cosmic-void">Kenya</span>
                </p>
            <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Jimkan House</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">39 Woodvale Grove, Westlands</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Nairobi, Kenya</p>
            </div>

            <div className="flex flex-col gap-[11px]">
                <p className="flex items-center gap-[5px]">
                    <span><Locations/></span> 
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-helvetica-semibold text-cosmic-void">UK</span>
                </p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Manchester Science Park, Manchester</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Pencroft Way</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Manchester M15 6GZ, UK</p>
            </div>
        </div>
        
        {/* form */}
        <div className="py-[20px] sm:py-[30px] md:py-[35px] xl:py-[41px] px-[20px] sm:px-[40px] md:px-[40px] xl:px-[78px] gap-[10px] w-full md:min-w-[47vw]">
            <ContactForm />
        </div>
    </main> 
);
}
 
export default Contacts;