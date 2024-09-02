import icon1 from "@/assets/logo/1.png";
import icon2 from "@/assets/logo/2.png";
import icon3 from "@/assets/logo/3.png";
import icon4 from "@/assets/logo/4.png";
import icon5 from "@/assets/logo/5.png";
import icon6 from "@/assets/logo/6.png";
import icon7 from "@/assets/logo/7.png";
import icon8 from "@/assets/logo/8.png";
import icon9 from "@/assets/logo/9.png";
import icon10 from "@/assets/logo/10.png";
import icon11 from "@/assets/logo/1.png";
import icon12 from "@/assets/logo/12.png";
import icon13 from "@/assets/logo/13.png";
import icon14 from "@/assets/logo/14.png";
import icon15 from "@/assets/logo/15.png";
import Image from "next/image";

export default function Integrations() {
  const icons = [
    {
      firstColumn: [
        { name: "icon1", src: icon1 },
        { name: "icon2", src: icon2 },
        { name: "icon2", src: icon3 },
        { name: "icon2", src: icon4 },
        { name: "icon2", src: icon5 },
        { name: "icon2", src: icon6 },
        // Tambahkan item lainnya untuk kolom pertama
      ],
    },
    {
      secondColumn: [
        { name: "logo3", src: icon7 },
        { name: "icon2", src: icon8 },
        { name: "icon2", src: icon9 },
        { name: "icon2", src: icon10 },
        { name: "icon2", src: icon11 },
        // Tambahkan item lainnya untuk kolom kedua
      ],
    },
    {
      thirdColumn: [
        { name: "logo3", src: icon12 },
        { name: "icon2", src: icon13 },
        { name: "icon2", src: icon14 },
        { name: "icon2", src: icon15 },
        // Tambahkan item lainnya untuk kolom kedua
      ],
    },
    // Tambahkan objek lain untuk kolom berikutnya
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-[55px] py-[120px] text-center">
        <h2 className="text-[38px] md:text-3xl font-bold">
          More than 50 Integrations
        </h2>
        <p className="text-gray-600 mt-4">
          We integrate with more than 50 apps you use daily
        </p>

        <div className="mt-12">
          {/* First Column with grid-cols-6 */}
          <div className="flex items-center justify-center gap-[15px] lg:gap-[76px] ">
            {icons[0]?.firstColumn?.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image src={item.src} alt={item.name} width={50} height={50} />
              </div>
            ))}
          </div>

          {/* Second Column with grid-cols-5 */}
          <div className="flex items-center justify-center gap-[13.75] lg:gap-[67.5px]">
            {icons[1]?.secondColumn?.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image src={item.src} alt={item.name} width={50} height={50} />
              </div>
            ))}
          </div>
          {/* Second Column with grid-cols-5 */}
          <div className="flex items-center justify-center gap-[11.67px] lg:gap-[66.67px]">
            {icons[2]?.thirdColumn?.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image src={item.src} alt={item.name} width={50} height={50} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[58px]">
          <button className="px-[50px] py-[18px] bg-green-dark rounded-[20px] text-[#FFFFFF]">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
}
