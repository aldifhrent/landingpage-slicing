import ImagePlaceholder from "@/assets/ImagePlaceholder.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-neutral-zicon py-16">
      <div className="container mx-auto px-4 lg:px-[55px] py-5 lg:py-[120px]">
        <div className="flex flex-col items-center ">
          <h1 className="hidden lg:block text-3xl md:text-[38px] font-bold leading-[130%] tracking-[-2%]">
            Discover our latest work
          </h1>
          <h1 className="lg:hidden text-3xl md:text-[38px] font-bold leading-[130%] tracking-[-2%]">
            Selected Work
          </h1>
          <p className="text-base md:text-lg leading-[150%] max-w-2xl mt-4 text-center">
            Explore our portfolio and see the latest projects that we&apos;ve
            brought to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className="bg-white min-w-[315px] max-w-[370px] rounded-2xl overflow-hidden shadow-lg transition transform duration-300 hover:scale-105">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={ImagePlaceholder}
          alt="Project thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2">Project Title</h3>
        <p className="text-gray-600 mb-4">Short Description</p>
        <p className="text-sm text-gray-400">Category</p>
      </div>
    </div>
  );
}
