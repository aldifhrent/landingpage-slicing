import Image from "next/image";

export default function Integrations() {
  // Create a mapping of image paths
  const icons = {
    firstColumn: [
      { name: "icon1", src: require("@/assets/integration-logo/1.png") },
      { name: "icon2", src: require("@/assets/integration-logo/2.png") },
      { name: "icon3", src: require("@/assets/integration-logo/3.png") },
      { name: "icon4", src: require("@/assets/integration-logo/4.png") },
      { name: "icon5", src: require("@/assets/integration-logo/5.png") },
      { name: "icon6", src: require("@/assets/integration-logo/6.png") },
    ],
    secondColumn: [
      { name: "icon7", src: require("@/assets/integration-logo/7.png") },
      { name: "icon8", src: require("@/assets/integration-logo/8.png") },
      { name: "icon9", src: require("@/assets/integration-logo/9.png") },
      { name: "icon10", src: require("@/assets/integration-logo/10.png") },
      { name: "icon11", src: require("@/assets/integration-logo/11.png") },
    ],
    thirdColumn: [
      { name: "icon12", src: require("@/assets/integration-logo/12.png") },
      { name: "icon13", src: require("@/assets/integration-logo/13.png") },
      { name: "icon14", src: require("@/assets/integration-logo/14.png") },
      { name: "icon15", src: require("@/assets/integration-logo/15.png") },
    ],
  };

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
          <div className="flex items-center justify-center gap-[15px] lg:gap-[76px]">
            {icons.firstColumn.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            ))}
          </div>

          {/* Second Column with grid-cols-5 */}
          <div className="flex items-center justify-center gap-[13.75] lg:gap-[67.5px]">
            {icons.secondColumn.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image src={item.src} alt={item.name} width={50} height={50} />
              </div>
            ))}
          </div>

          {/* Third Column with grid-cols-5 */}
          <div className="flex items-center justify-center gap-[11.67px] lg:gap-[66.67px]">
            {icons.thirdColumn.map((item, index) => (
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
