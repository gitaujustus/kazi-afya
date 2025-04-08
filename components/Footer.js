import { Facebook, Instagram, LinkedIn, WhatsApp } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-[40px] xl:px-[68px] 2xl:px-[74px] py-8 md:py-10 lg:py-12 2xl:py-16 flex flex-col gap-8 md:gap-12 lg:gap-16 font-figtree text-sm sm:text-base bg-wizard-white text-cosmic-void">
      {/* Top div */}
      <div className="flex flex-col  md:flex-row gap-[38.6px] md:gap-[58px] lg:gap-[77px] xl:gap-[116px] 2xl:gap-[154.6px]">
        {/* Part one */}
        <div className="flex items-center text-center justify-center md:text-left  md:justify-start  flex-col gap-6 w-full md:w-2/5 lg:w-[472px]">
          <div>
            <Image
              src="/assets/Kazi Afya Logo.svg"
              alt="logo"
              width={1000}
              height={500}
              className="w-40 sm:w-48 md:w-56 lg:w-64 2xl:w-72"
            />
          </div>

          <p className="text-sm sm:text-base lg:text-[16px] 2xl:text-xl">
            Kazi Afya is the leading hospital management system designed to
            streamline operations for healthcare providers, ensuring seamless
            patient management, billing, and reporting—all in one secure,
            cloud-based platform.
          </p>
        </div>

        <div className="flex  justify-around md:justify-start gap-16 xl:gap-24 2xl:gap-32">
          {/* Part two */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-cosmic-void pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-[8px] xl:gap-[10px] ">
              <li>
                <Link href="/features" className="leading-tight group relative">
                  Inpatient
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="leading-tight group relative">
                  Outpatient
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="leading-tight group relative">
                  Billing
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="leading-tight group relative">
                  Pharmacy
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Part three */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-cosmic-void pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl text-nowrap">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-[8px] xl:gap-[10px]">
              <li>
                <Link href="/" className="leading-tight group relative">
                  Home
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="leading-tight group relative">
                  Features
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="leading-tight group relative">
                  Pricing
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="leading-tight group relative"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Part three */}
        <div className="flex flex-col  mx-auto md:mx-0">
          <div>
            <h3 className="font-semibold pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl text-center md:text-left">
              Reach Us
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              39 Jimkan House, Woodvale Grove
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Westlands - Nairobi
            </p>
          </div>
          <div className="mt-2 2xl:mt-5">
            <p className="text-sm sm:text-base lg:text-lg">
              Phone: +254 113 306358, +254 113 305897
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Email: info@kaziafya.co.ke
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-[34px] lg:gap-[64px] justify-center items-center font-figtree ">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
          <p>
            <a
              href="#"
              className="leading-tight text-sm sm:text-base group relative"
            >
              Privacy Policy
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="leading-tight text-sm sm:text-base group relative"
            >
              Terms & Conditions
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-void transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
        </div>

        <p className="leading-tight text-sm sm:text-base order-3 sm:order-none">
          &copy;2025 Kazi Afya. All rights reserved
        </p>

        <div className="flex gap-4 sm:gap-6 justify-center items-center">
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <LinkedIn className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
