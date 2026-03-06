"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Briefcase,
  Video,
  GraduationCap,
  Wheat,
  Leaf,
  Crown,
  Gem,
  Star,
  ChevronDown
} from "lucide-react";

const Navbar = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories" },
    { name: "Works", path: "#works" },
    { name: "Pricing" },
    { name: "Contact", path: "#contact" },
  ];

  const categories = [
    { name: "JMO BizHub", icon: Briefcase, path: "#" },
    { name: "JMO Media", icon: Video, path: "#" },
    { name: "JMO Academy", icon: GraduationCap, path: "#" },
    { name: "JMO Food and Agriculture", icon: Wheat, path: "#" },
    { name: "JMO Climate", icon: Leaf, path: "#" },
  ];

  const pricing = [
    { name: "JMO Premium", icon: Star, path: "#" },
    { name: "JMO Gold", icon: Crown, path: "#" },
    { name: "JMO Platinum", icon: Gem, path: "#" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full bg-indigo-500 text-white flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 z-50">

      {/* Logo + Brand Name */}
<Link href="/" className="flex items-center gap-2">

  <Image
    src="/Logo.png"
    alt="JMO Logo"
    width={55}
    height={55}
    className="object-contain"
  />

  <div className="flex flex-col leading-tight">
    <span className="font-bold text-lg tracking-wide">
      JMO
    </span>
    <span className="text-xs opacity-90">
      Empowering
    </span>
  </div>

</Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">

        <Link href="/">Home</Link>

        {/* Categories Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setCategoryOpen(true)}
          onMouseLeave={() => setCategoryOpen(false)}
        >

          <button className="flex items-center gap-1">
            Categories <ChevronDown size={16}/>
          </button>

          {categoryOpen && (

            <div className="absolute top-10 bg-white text-black rounded-xl shadow-lg w-64 p-3">

              {categories.map((item, index) => {
                const Icon = item.icon

                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Icon size={18}/>
                    {item.name}
                  </Link>
                )
              })}

            </div>

          )}

        </div>

        <Link href="#works">Works</Link>

        {/* Pricing Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPricingOpen(true)}
          onMouseLeave={() => setPricingOpen(false)}
        >

          <button className="flex items-center gap-1">
            Pricing <ChevronDown size={16}/>
          </button>

          {pricingOpen && (

            <div className="absolute top-10 bg-white text-black rounded-xl shadow-lg w-56 p-3">

              {pricing.map((item, index) => {
                const Icon = item.icon

                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Icon size={18}/>
                    {item.name}
                  </Link>
                )
              })}

            </div>

          )}

        </div>

        <Link href="#contact">Contact</Link>

      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">

        <button className="border px-4 py-1 rounded-full">
          JMO
        </button>

        <Link href="/Auth" className="bg-white text-black px-6 py-2 rounded-full">
          Login
        </Link>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(true)}
      >
        ☰
      </button>

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 left-0 h-screen w-[270px] bg-white text-black p-6 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

        <button
          className="mb-6 text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col gap-5">

          <Link href="/">Home</Link>

          {/* Mobile Categories */}
          <div>

            <button
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="flex items-center justify-between w-full"
            >
              Categories
              <ChevronDown size={16}/>
            </button>

            {mobileCategoryOpen && (

              <div className="ml-4 mt-3 flex flex-col gap-3">

                {categories.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className="flex items-center gap-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={18}/>
                      {item.name}
                    </Link>
                  )
                })}

              </div>

            )}

          </div>

          <Link href="#works">Works</Link>

          {/* Mobile Pricing */}
          <div>

            <button
              onClick={() => setMobilePricingOpen(!mobilePricingOpen)}
              className="flex items-center justify-between w-full"
            >
              Pricing
              <ChevronDown size={16}/>
            </button>

            {mobilePricingOpen && (

              <div className="ml-4 mt-3 flex flex-col gap-3">

                {pricing.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className="flex items-center gap-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={18}/>
                      {item.name}
                    </Link>
                  )
                })}

              </div>

            )}

          </div>

          <Link href="#contact">Contact</Link>

          <button className="border py-2 rounded-full">
            JMO BizHub
          </button>

          <button className="bg-black text-white py-2 rounded-full">
            Login
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar;