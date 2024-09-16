"use client";

import NavItems from "./NavItems";
import { Alata } from "next/font/google";

const alata = Alata({ subsets: ["latin"], weight: ["400"] });

const MenuDesktop = () => {
  return (
    <nav className={`hidden md:flex ${alata.className}`}>
      <NavItems className="flex  text-white gap-6 uppercase text-[18px] " />
    </nav>
  );
};

export default MenuDesktop;
