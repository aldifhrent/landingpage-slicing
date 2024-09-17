import Youtube from "@/assets/icons/youtube.png";
import Instagram from "@/assets/icons/instagram.png";
import Github from "@/assets/icons/github.png";
import Linkedin from "@/assets/icons/linkedin.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000000] min-h-[80px] z-40 relative">
      <div className="container px-6 lg:px-[60px] py-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          <h1 className="text-[#FFFFFF] mt-5 md:mt-0">
            © 2023 Anima’s Landing Page Ui Kit.{" "}
          </h1>
          <div className="flex gap-4 items-center">
            <Image src={Youtube.src} alt="" height={32} width={32} />
            <Image src={Instagram.src} alt="" height={32} width={32} />
            <Image src={Github.src} alt="" height={32} width={32} />
            <Image src={Linkedin.src} alt="" height={32} width={32} />
          </div>
        </div>
      </div>
    </footer>
  );
}
