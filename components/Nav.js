'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { LogoIcon, OutlineHomeIcon } from './Icons';
import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MotionLink = motion(Link);

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { href: '/', label: <OutlineHomeIcon className='w-6 h-6 2xl:w-10 2xl:h-10' />, isIcon: true },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  const authItems = [
    { href: '/sign_in', label: 'Login', className: 'border border-white px-4 py-1 rounded-[50px] text-center' },
    { href: '/sign_up', label: 'Get Started', className: 'bg-blue-leviathan text-red_reign px-4 py-1 rounded-[50px] text-center' },
  ];

  return (
    <div className="flex items-center justify-between bg-blue-leviathan text-white w-[90vw] rounded-[25px] px-4 py-2 2xl:py-4 2xl:px-10   mx-auto mt-5 absolute left-[50%] transform -translate-x-[50%] z-20 font-inter">
      {/* Logo */}
      <div className="flex items-center justify-between gap-1 md:gap-2 2xl:gap-4">
        {/* <LogoIcon className="text-red_shimmer" /> */}
        {/* logo as image */}
        <img src="/assets/Kazi Afya Reverse Logo.svg" alt="logo" className=" h-6 md:h-7 lg:h-8 2xl:h-12  " />

        {/* <span className="lg:text-small 2xl:text-[2.0rem]">KaziAfya</span> */}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
<div className="hidden md:flex items-center justify-center gap-3 lg:gap-6 2xl:gap-8">
  {menuItems.map((item) => (
    <MotionLink
    key={item.href}
    href={item.href}
            className={`relative flex items-center justify-center ${pathname === item.href ? 'active' : ''}`}
          >
            <span className="relative z-10 px-2 lg:px-4 py-2 text-nowrap text-[16px] 2xl:text-[1.8rem]">
      {item.label}
    </span>
  </MotionLink>
  ))}
</div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center justify-between gap-4">
        <MotionLink
          href="/sign_in"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="border border-white py-1 2xl:py-2  rounded-[50px] text-tiny 2xl:text-[1.8rem] w-32 2xl:w-38 text-center"
        >
          Login
        </MotionLink>
        <MotionLink
          href="/sign_up"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="text-blue-leviathan bg-white py-1 2xl:py-2  rounded-[50px] text-nowrap text-tiny w-32 2xl:text-[1.8rem]   2xl:w-48 text-center"
        >
          Get Started
        </MotionLink>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            ref={menuRef}
            className="absolute top-full left-0 right-0 mt-2 bg-blue-leviathan rounded-[25px] px-2 py-6 md:p-4 flex flex-col gap-4 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex px-3 items-center gap-2 transition-all duration-300 ${
                    pathname === item.href ? 'active !bg-[#070734]/90' : 'hover:bg-[#070734]/20'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.isIcon ? (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.2 }}
                    >
                      {item.label}
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
              ))}
            </div>
            <hr className="border-white/20" />
            <div className="flex flex-col gap-3 mb-4">
              {authItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.className}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut', delay: (menuItems.length + index) * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;  