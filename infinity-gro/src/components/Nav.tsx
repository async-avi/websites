"use client";
import Image from "next/image";
import tribarPng from "@/assets/tribar.png";
import { useState } from "react";
import MobNav from "./mobileOnly/MobNav";

const Nav = () => {
  const [mobNav, setMobNav] = useState(false);
  function handleClick() {
    setMobNav(!mobNav);
  }

  return (
    <div className="w-screen h-72 ">
      <nav className="w-full h-max border-b-2 border-white p-4 flex flex-row justify-between">
        <h1 className="text-lg basis-1/3 bg-red-400">Infinity Gro</h1>
        <div className="flex-row w-full basis-1/2 bg-green-400 justify-between hidden lg:flex">
          <span>About</span>
          <span>Blog</span>
          <span>Services</span>
          <span>Embassy</span>
        </div>
        <button className="lg:hidden" onClick={handleClick}>
          <Image src={tribarPng} alt="tribar-icon" />
        </button>
      </nav>
      {mobNav ? <MobNav /> : null}
    </div>
  );
};

export default Nav;
