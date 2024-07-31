"use client";

import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 z-50">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
        <div className="w-auto h-full flex flex-row items-center justify-center md:mr-20">
          <div className="flex items-center justify-between w-auto h-auto bg-black px-8 py-3 rounded-full text-white space-x-12 ml-20">
            {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
