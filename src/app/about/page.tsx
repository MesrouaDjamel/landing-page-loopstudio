import Image from 'next/image';
import React from 'react'
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center max-w-[860px] mx-auto ">
      <Image
        src={"/images/mobile/image-interactive.jpg"}
        width={315}
        height={220}
        alt="Image of an interactive VR"
        className="w-full md:w-[500px] flex-1   "
      />
      <div className="flex-1  max-w-[500px] lg:-translate-x-36 lg:translate-y-36  pt-12">
        <h2 className="uppercase text-center lg:text-left lg:pl-10 text-black font-light text-titleXs">
          The leader in interactive VR
        </h2>

        <p
          className={`${josefin.className} lg:pl-10 leading-loose text-center lg:text-left text-veryDarkGray lg:pb-14 font-normal text-[18px]`}
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some the best companies around the globe. Our
          award-winning creations digital experiences that bind to their brand
        </p>
      </div>
    </div>
  );
}

export default AboutPage