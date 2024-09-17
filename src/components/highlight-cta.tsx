import RocketIcon from "@/assets/icons/RocketLaunch.png";
import Image from "next/image";
import CTAImage from "@/assets/CTA.png";

export default function HighlightCTA() {
  return (
    <section className="bg-sweet-corn">
      <div className="container mx-auto px-[50px] pt-[60px] pb-0">
        <div className="flex flex-col items-center justify-center relative z-10">
          <h1 className="text-[50px] leading-[130%] font-bold max-w-xl text-center">
            Get Landing Page UI Kit Today!
          </h1>
          <p className="text-[21px] leading-[150%] mt-5 text-center xl:text-start">
            Break Figma limits and explore the endless possibilities with Anima.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center py-4 bg-green-dark/80 hover:bg-green-dark px-5 md:px-[50px] rounded-[16px] text-white gap-2">
              <Image src={RocketIcon} alt="" className="" />
              <p className="text-[#FFFFFF]">Get Started</p>
            </button>
          </div>
          <div className="relative z-0 mt-10 -mb-8">
            <Image src={CTAImage} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
