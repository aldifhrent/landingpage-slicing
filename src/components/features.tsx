"use client";

import Visual from "@/assets/Visuals.png";
import Image from "next/image";
import UfoIcon from "@/assets/Ufo.png";
import ResponsiveIcon from "@/assets/icons/Responsive.png";
import MagicIcon from "@/assets/icons/Magic.png";
import BoxIcon from "@/assets/icons/Box.png";
import { motion } from "framer-motion";
const featuresCard = [
  {
    icon: UfoIcon,
    title: "Fast building",
  },
  {
    icon: ResponsiveIcon,
    title: "Easy to edit",
  },
  {
    icon: MagicIcon,
    title: "Responsiveness",
  },
  {
    icon: BoxIcon,
    title: "No code needed",
  },
];

export default function Features() {
  return (
    <section className="bg-neutral-zicon py-[100px]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col-reverse items-center xl:flex-row   gap-y-[30px] xl:gap-[60px]">
          <motion.div
            className="w-full lg:w-1/2 mt-[60px] md:mt-0"
            initial={{ x: 0, opacity: 0 }} // Mulai dari luar layar di sebelah kiri dengan opasitas 0
            animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi semula dengan opasitas 1
            transition={{
              duration: 0.5, // Durasi animasi dalam detik
              ease: "easeIn", // Tipe easing untuk animasi
            }}
          >
            <Image
              src={Visual}
              alt="Feature Visual"
              className="max-w-none mx-auto"
            />
          </motion.div>
          <div className="w-full">
            <h1 className="text-[28px] md:text-[38px] leading-[130%] font-bold tracking-tight text-center xl:text-start mb-4">
              Our features
            </h1>
            <p className="text-[16px] md:text-[21px] text-center xl:text-start tracking-wide mb-8">
              Few good reasons why you should use Anima Landing Page UI Kit to
              make your own pages.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuresCard.map((feature) => (
                <FeaturesCard
                  icon={feature.icon.src}
                  title={feature.title}
                  key={feature.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeaturesCardProps {
  icon: string;
  title: string;
}

function FeaturesCard({ icon, title }: FeaturesCardProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 w-auto">
      <div className="flex items-center p-4 gap-x-4 w-fit">
        <Image src={icon} alt={`${title} icon`} width={40} height={40} />
        <h3 className="text-[18px] md:text-[24px] leading-[150%] text-nowrap w-fit">
          {title}
        </h3>
      </div>
    </div>
  );
}
