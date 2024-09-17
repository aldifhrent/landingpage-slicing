"use client";

import HeroVisual from "@/assets/Mockup.png";
import Image from "next/image";
import RocketIcon from "@/assets/icons/RocketLaunch.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="bg-sweet-corn w-screen h-fit">
      <div className="container flex flex-col xl:flex-row lg:justify-between px-[30px] md:px-[32px] lg:px-[55px] pt-[80px] xl:pt-[50px] items-center">
        <div className="w-full">
          <motion.h1
            className="text-center xl:text-start text-[65px] md:text-[67px] leading-[130%] font-extrabold"
            initial={{ x: -100, opacity: 0 }} // Mulai dari luar layar di sebelah kiri dengan opasitas 0
            animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi semula dengan opasitas 1
            transition={{
              duration: 1, // Durasi animasi dalam detik
              ease: "easeOut", // Tipe easing untuk animasi
            }}
          >
            Create Engaging Landing Pages
          </motion.h1>
          <motion.p
            className="text-center xl:text-start mt-5 text-[24px] md:text-[21px]"
            initial={{ x: -100, opacity: 0 }} // Mulai dari luar layar di sebelah kiri dengan opasitas 0
            animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi semula dengan opasitas 1
            transition={{
              duration: 1, // Durasi animasi dalam detik
              ease: "easeOut", // Tipe easing untuk animasi
            }}
          >
            Build beautiful landing pages in record time with Anima’s Landing
            Page UI kit for Figma. No code required!
          </motion.p>
          <motion.div
            className="flex flex-col lg:flex-row mt-10 items-center  gap-[18px] justify-center "
            initial={{ x: -100, opacity: 0 }} // Mulai dari luar layar di sebelah kiri dengan opasitas 0
            animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi semula dengan opasitas 1
            transition={{
              duration: 1, // Durasi animasi dalam detik
              ease: "easeOut", // Tipe easing untuk animasi
            }}
          >
            <button className="flex items-center py-[18px] px-[50px] bg-green-dark text-white font-semibold rounded-[16px] gap-2 max-w-[221px] mx-auto lg:mx-0">
              <Image src={RocketIcon} alt="" className="w-4" />
              Get Started
            </button>
            <button className="py-[18px] px-[50px] bg-neutral-zicon text-green-dark rounded-[16px] max-w-[221px] outline outline-green-dark">
              How it works
            </button>
          </motion.div>
        </div>
        <motion.div
          className="mt-[60px] lg:mt-[120px]"
          initial={{ x: 100, opacity: 0 }} // Mulai dari luar layar di sebelah kiri dengan opasitas 0
          animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi semula dengan opasitas 1
          transition={{
            duration: 1, // Durasi animasi dalam detik
            ease: "easeOut", // Tipe easing untuk animasi
          }}
        >
          <Image src={HeroVisual} alt="Hero Visual" className="max-w-none" />
        </motion.div>
      </div>
    </section>
  );
}
