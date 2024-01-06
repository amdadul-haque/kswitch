'use client'
import React, { useEffect, useState } from "react";

// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  useEffect(() => {
    window.innerWidth < 768 && setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolY, setScrolY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrolY(window.scrollY);
      });
    };
  }, []);


  const navItems = [
    {
      name: 'Our Systems',
      link: '/',
    },
    {
      name: 'Booking',
      link: '/booking',
    },
    {
      name: 'Get a Quote',
      link: '/get-a-quote',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const currentPage = usePathname();

  return (
    <nav className={`w-full opacity-80 ${typeof window !== 'undefined' && scrolY > 60 ? 'bg-black-main' : 'bg-transparent'} px-3 lg:px-0 fixed z-100 h-[80px]`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full h-full text-white-main navBar">
        <Link href="/" className="z-10 flex h-full items-center">
          <img src="/logo.png" alt="logo" className={`${typeof window !== 'undefined' && scrolY > 60 ? 'h-[60px]' : 'h-[80px]'} ml-2 my-2 transition-all duration-300`} />
        </Link>

        <div
          className="sm:hidden cursor-pointer z-10 mr-2"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-[25px]" />
        </div>
        <motion.ul
          className={` h-full ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'} flex-col absolute px-4 py-2 top-[80px] left-0 right-0 w-[90%] md:w-auto mx-auto md:mx-0 md:top-0 bg-[#222] md:bg-transparent text-white md:flex md:flex-row justify-end md:items-centern gap-2 md:gap-6 md:relative`}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0, display: isMobileMenuOpen ? 'flex' : 'none' }}
        >

          {
            navItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <li className={`cursor-pointer uppercase ${item?.link === currentPage && 'font-bold'}`}>
                  <p>{item.name}</p>
                  <span>{item.name}</span>
                </li>
              </Link>
            ))
          }

        </motion.ul>
      </div>
    </nav >
  );
};

export default Navbar;  