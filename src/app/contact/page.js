import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="min-h-screen text-white p-4 bg-gradient-to-r from-sky-900 to-indigo-900 place-items-center text-center">
      <p className="text-4xl font-semibold mt-12 tracking-wider">Welcome !</p>
      <div className="text-4xl font-semibold text-left mt-20 tracking-widest flex flex-row justify-around p-10">
        <div className="mt-6">
          <p>Halo, saya</p>
          <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Aria Ramadhani .
          </p>
          <p className="text-lg mt-4 tracking-normal font-thin">
            Front End Web Developer + UI/UX Designer
          </p>
          <p className="text-sm tracking-normal font-serif font-normal">
            at Carakan Sadhana Dirgantara
          </p>
          <div className="text-sm tracking-wide mt-8 font-medium">
            <p className="flex flex-row items-center">
              <FaInstagram className="mr-2 h-6 w-6" />
              ariaramadhani
            </p>
            <p className="flex flex-row items-center mt-2">
              <FaWhatsapp className="mr-2 h-6 w-6" />
              +6287882094028
            </p>
          </div>
        </div>
        <div>
          <div className="avatar">
            <div className="w-80 rounded-xl">
              <Image src="/profile.jpg" height={120} width={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
