import { Facebook, Instagram, LinkedIn, WhatsApp } from "@/icons";
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="px-4 sm:px-8 md:px-16 lg:px-16 xl:px-20 2xl:px-24 py-8 md:py-10 lg:py-12 2xl:py-16 flex flex-col gap-8 md:gap-12 lg:gap-16 font-figtree text-sm sm:text-base bg-wizard-white text-cosmic-void">

            {/* Top div */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32">
                {/* Part one */}
                <div className="flex flex-col gap-6 w-full md:w-2/5 lg:w-1/3">
                    <div>
                        <Image 
                            src="/assets/Kazi Afya Logo.svg" 
                            alt="logo" 
                            width={1000} 
                            height={500} 
                            className="w-40 sm:w-48 md:w-56 lg:w-64 2xl:w-72"
                        />
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
                        Kazi Afya is the leading hospital management system designed to streamline operations for healthcare providers, ensuring seamless patient management, billing, and reporting—all in one secure, cloud-based platform.
                    </p>
                </div>

                {/* Part two */}
                <div className="flex flex-col">
                    <h3 className="font-semibold text-cosmic-void pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl">Solutions</h3>
                    <ul className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                        <li className="leading-tight">Home</li>
                        <li className="leading-tight">About</li>
                        <li className="leading-tight">Services</li>
                        <li className="leading-tight">Contact</li>
                    </ul>
                </div>

                {/* Part three */}
                <div className="flex flex-col">
                    <div>
                        <h3 className="font-semibold pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl">Reach Us</h3>
                        <p className="text-sm sm:text-base lg:text-lg">39 Jimkan House, Woodvale Grove</p>
                        <p className="text-sm sm:text-base lg:text-lg">Westlands - Nairobi</p>
                    </div>
                    <div className="mt-4 sm:mt-5 lg:mt-6 2xl:mt-8">
                        <p className="text-sm sm:text-base lg:text-lg">Phone: +254 113 306358, +254 113 305897</p>
                        <p className="text-sm sm:text-base lg:text-lg">Email: info@hillganinnovations.co.ke</p>
                    </div>
                </div>
            </div>

            {/* Bottom Div */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-between items-center">
                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
                    <p><a href="#" className="leading-tight text-sm sm:text-base">Privacy Policy</a></p>
                    <p><a href="#" className="leading-tight text-sm sm:text-base">Terms & Conditions</a></p>
                </div>
                
                <p className="leading-tight text-sm sm:text-base order-3 sm:order-none">&copy;2025 Kazi Afya. All rights reserved</p>

                <div className="flex gap-4 sm:gap-6 justify-center items-center">
                    <p><a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-5 h-5 sm:w-6 sm:h-6"/></a></p>
                    <p><a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-5 h-5 sm:w-6 sm:h-6"/></a></p>
                    <p><a href="#" className="hover:opacity-80 transition-opacity"><WhatsApp className="w-5 h-5 sm:w-6 sm:h-6"/></a></p>
                    <p><a href="#" className="hover:opacity-80 transition-opacity"><LinkedIn className="w-5 h-5 sm:w-6 sm:h-6"/></a></p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;