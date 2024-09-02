import HeroVisual from "@/assets/Mockup.png";
import Image from "next/image";
import RocketIcon from "@/assets/icons/RocketLaunch.png";

export default function Hero() {
  return (
    <section className="bg-sweet-corn w-full">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between px-[30px] md:px-[32px] lg:px-[55px] pt-[60px] md:pt-[100px] lg:pt-[120px] items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-center lg:text-start text-[38px] md:text-[67px] leading-[130%] font-extrabold ">
            Create Engaging Landing Pages
          </h1>
          <p className="text-center lg:text-start mt-5 text-[16px] md:text-[21px]">
            Build beautiful landing pages in record time with Anima’s Landing
            Page UI kit for Figma. No code required!
          </p>
          <div className="flex flex-col md:flex-row gap-[18px] mt-10 items-center">
            <button className="flex items-center py-[18px] px-[50px] bg-green-dark text-light-white font-semibold rounded-[16px] gap-2 max-w-[221px]">
              <Image src={RocketIcon} alt="" className="w-4" />
              Get Started
            </button>
            <button className="py-[18px] px-[50px] bg-light-white text-green-dark rounded-[16px] max-w-[221px] outline outline-green-dark">
              How it works
            </button>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-0">
          <Image
            src={HeroVisual}
            alt="Hero Visual"
            className="w-full md:w-[450px] h-auto md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
