import Image from "next/image";
import HeadLogo from "@/assets/Logo.png";
import RocketIcon from "@/assets/icons/RocketLaunch.png";
import ArrowIcon from "@/assets/icons/ArrowRight.png";

export default function Header() {
  return (
    <header className="bg-sweet-corn py-5 px-5 md:px-[30px] lg:px-[50px]">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image src={HeadLogo} alt="Logo" className="w-10 lg:w-12" />
          <h1 className="hidden lg:inline">
            <span className="font-bold">Landing</span>Page
          </h1>
        </div>

        <nav className="flex items-center gap-5">
          <h1 className="hidden md:block text-green-dark font-semibold">
            Contact
          </h1>
          <button className="hidden md:block py-4 bg-light-white px-[50px] rounded-[16px] text-green-dark font-semibold">
            How it works
          </button>
          <button className="inline-flex items-center py-4 bg-green-dark/80 hover:bg-green-dark px-5 md:px-[50px] rounded-[16px] text-white gap-2">
            <Image src={RocketIcon} alt="" className="hidden lg:inline w-4" />
            <p className="text-[#FFFFFF] font-semibold">Get Started</p>
            <Image src={ArrowIcon} alt="" className="block w-4 lg:hidden" />
          </button>
        </nav>
      </div>
    </header>
  );
}
