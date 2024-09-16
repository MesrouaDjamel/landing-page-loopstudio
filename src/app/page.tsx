import MaxWrapper from "@/components/MaxWrapper";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });
export default function Home() {
  const imagesGrid = [
    { id: 1, src: "/images/mobile/image-deep-earth.jpg", title: "Deep Earth" },
    {
      id: 2,
      src: "/images/mobile/image-night-arcade.jpg",
      title: "Night Arcade",
    },
    {
      id: 3,
      src: "/images/mobile/image-soccer-team.jpg",
      title: "Soccer Team VR",
    },
    { id: 4, src: "/images/mobile/image-grid.jpg", title: "The Grid" },
    {
      id: 5,
      src: "/images/mobile/image-from-above.jpg",
      title: "From Up Above VR",
    },
    {
      id: 6,
      src: "/images/mobile/image-pocket-borealis.jpg",
      title: "Pocket Borealis",
    },
    {
      id: 7,
      src: "/images/mobile/image-curiosity.jpg",
      title: "The Curiosity",
    },
    {
      id: 8,
      src: "/images/mobile/image-fisheye.jpg",
      title: "Make It Fisheye",
    },
  ];

  const imagesGridDesktop = [
    { id: 1, src: "/images/desktop/image-deep-earth.jpg", title: "Deep Earth" },
    {
      id: 2,
      src: "/images/desktop/image-night-arcade.jpg",
      title: "Night Arcade",
    },
    {
      id: 3,
      src: "/images/desktop/image-soccer-team.jpg",
      title: "Soccer Team VR",
    },
    { id: 4, src: "/images/desktop/image-grid.jpg", title: "The Grid" },
    {
      id: 5,
      src: "/images/desktop/image-from-above.jpg",
      title: "From Up Above VR",
    },
    {
      id: 6,
      src: "/images/desktop/image-pocket-borealis.jpg",
      title: "Pocket Borealis",
    },
    {
      id: 7,
      src: "/images/desktop/image-curiosity.jpg",
      title: "The Curiosity",
    },
    {
      id: 8,
      src: "/images/desktop/image-fisheye.jpg",
      title: "Make It Fisheye",
    },
  ];
  return (
    <MaxWrapper>
      <main className="pt-28">
        <div className="flex flex-col lg:flex-row items-center max-w-[860px] xl:max-w-[1110px] ">
          <Image
            src={"/images/mobile/image-interactive.jpg"}
            width={315}
            height={220}
            alt="Image of an interactive VR"
            className="w-full md:w-[600px] flex-1   "
          />
          <div className="flex-1 bg-white max-w-[500px] lg:-translate-x-36 lg:translate-y-36  pt-12">
            <h2 className="uppercase text-center lg:text-left lg:pl-10 text-black font-light text-titleXs">
              The leader in interactive VR
            </h2>

            <p
              className={`${josefin.className} lg:pl-10 leading-loose text-center lg:text-left text-veryDarkGray lg:pb-14 font-normal text-[18px]`}
            >
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some the best companies around the
              globe. Our award-winning creations digital experiences that bind
              to their brand
            </p>
          </div>
        </div>

        <div className="pt-20 lg:pt-64 lg:pb-12 ">
          <div className=" flex flex-col lg:flex-row lg:justify-between  lg:max-w-[860px] xl:max-w-[1110px] lg:items-centre">
            <h2 className="uppercase text-center lg:text-left pb-9 lg:pb-0 text-black font-light text-titleXs">
              Our creations
            </h2>

            <div className="pb-32 flex flex-col lg:hidden gap-10 ">
              <div className="grid grid-cols-1 lg:hidden sm:grid-cols-2   gap-8 ">
                {imagesGrid.map((image) => (
                  <div
                    key={image.id}
                    className="relative h-[150px] sm:min-w-[250px] md:max-w-[450px]"
                  >
                    <Image
                      src={image.src}
                      width={315}
                      height={220}
                      alt="Image of an interactive VR"
                      className="w-full h-full brightness-50 hover:brightness-100 object-cover cursor-pointer transition-all ease-in-out duration-300"
                    />

                    <p className="uppercase absolute bottom-4 left-5 text-white  max-w-40 font-light text-[28px]">
                      {image.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className=" hover:bg-black hover:text-white  transition-all ease-in-out duration-300 uppercase text-center border border-black py-2 w-[200px] self-center  text-black font-semibold tracking-widest text-[28px]">
              See All
            </button>
          </div>
        </div>

        <div className=" hidden pb-32 max-w-[860px] lg:grid grid-cols-3 xl:grid-cols-4 xl:max-w-[1110px] gap-8 ">
          {imagesGridDesktop.map((image) => (
            <div key={image.id} className="relative group h-[450px]  w-[256px]">
              <Image
                src={image.src}
                width={256}
                height={450}
                alt="Image of an interactive VR"
                className="w-full h-full brightness-50 object-cover group-hover:brightness-100 cursor-pointer transition-all ease-in-out duration-300 "
              />

              <p className="uppercase absolute bottom-4 left-5  text-white max-w-40 font-light text-[28px]">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </MaxWrapper>
  );
}
