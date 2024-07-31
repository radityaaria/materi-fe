"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";

const Komponen = () => {
    const openNewTab = () => {
      window.open("https://www.instagram.com/ariaramadhani");
    };

  return (
    <div
      className="min-h-screen w-full bg-indigo-300 rounded-lg"
      style={{ borderRadius: "45px" }}
    >
      <div className="w-full p-6">
        <p className="text-center p-4 mt-8 text-2xl font-bold text-black">
          Belajar Komponen
        </p>
        <div className="text-center mt-4 bg-gray-300 h-60 p-6 rounded-lg flex flex-row space-x-4 justify-between">
          <div className="bg-slate-100 rounded-md flex flex-col w-1/3">
            <p className="bg-blue-400 font-bold p-2 text-white">Button</p>
            <div className="flex flex-row justify-around p-2 mt-3">
              <button className="btn btn-md bg-green-500 text-white border-4 hover:bg-green-700">
                contoh
              </button>
              <Link
                className="btn  btn-md bg-red-500 hover:bg-red-700 p-2 text-white"
                href="https://youtube.com"
              >
                Link ke Youtube
              </Link>
              <button
                className="bg-blue-500 p-2 text-white rounded-lg"
                onClick={openNewTab}
              >
                Buka tab baru
              </button>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md flex flex-col w-1/3">
            <p className="bg-blue-400 font-bold p-2 text-white">Image</p>
            <div className="flex flex-row justify-around p-2 mt-3 items-center">
              <Image src="/next.svg" width={80} height={80} />
              <button className="mt-4 bg-blue-500 p-4 rounded-md">
                <Image src="/vercel.svg" width={80} height={80} />
              </button>
              <button className="mt-4 bg-red-500 p-4 rounded-md">
                <IoLogoYoutube className="text-black h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md flex flex-col w-1/3">
            <p className="bg-blue-400 font-bold p-2 text-white">Toogle</p>
            <div className="flex flex-row justify-around p-2 mt-3 items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <input
                type="checkbox"
                value="synthwave"
                className="checkbox theme-controller mt-2"
              />
              <label className="swap swap-flip text-7xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
              </label>
            </div>
          </div>
        </div>
        <Link
          className="btn btn-xl text-center mt-5 bg-blue-400 hover:bg-blue-700 text-white"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Komponen;
