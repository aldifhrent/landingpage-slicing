import Twitter from "@/assets/twitter.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000000] h-fit   z-40 relative">
      <div className="container px-6 lg:px-[60px] py-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          <h1 className="text-[#FFFFFF] mt-5 md:mt-0">
            © 2023 Anima’s Landing Page Ui Kit.{" "}
          </h1>
          <div className="flex gap-4 items-center">
            <Image src={Twitter.src} alt="" height={32} width={32} />
            <Image src={Twitter.src} alt="" height={32} width={32} />
            <Image src={Twitter.src} alt="" height={32} width={32} />
            <Image src={Twitter.src} alt="" height={32} width={32} />
          </div>
        </div>
      </div>
    </footer>
  );
}
