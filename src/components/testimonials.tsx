import Profile1 from "@/assets/user-1.png";
import Profile2 from "@/assets/user-2.png";
import Star from "@/assets/icons/star.png";
import Image from "next/image";
import Marquee from "./magicui/marquee";

const TestimonialData = [
  {
    image: Profile1,
    name: "Lauren M.",
    role: "UI Designer @Boo",
    rate: 5,
    description:
      "Anima's Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
  },
  {
    image: Profile1,
    name: "Lauren M.",
    role: "UI Designer @Boo",
    rate: 5,
    description:
      "Anima's Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
  },
  {
    image: Profile1,
    name: "Lauren M.",
    role: "UI Designer @Boo",
    rate: 5,
    description:
      "Anima's Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
  },
  {
    image: Profile2,
    name: "David B.",
    role: "Lead Designer @Creative",
    rate: 4,
    description:
      "Anima's Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
  },
];
const firstRow = TestimonialData.slice(0, TestimonialData.length / 2);
const secondRow = TestimonialData.slice(TestimonialData.length / 2);
export default function Testimonials() {
  return (
    <section className="bg-sweet-corn px-4 md:px-8 py-16 md:py-24 w-full border">
      <div className="container mx-auto px-[55px] py-[120px] w-full">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
            Real Stories from Satisfied Customers
          </h1>
          <p className="text-lg text-center mb-8">
            See how our landing page ui kit is making an impact.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                image={testimonial.image.src}
                name={testimonial.name}
                role={testimonial.role}
                rate={testimonial.rate}
                description={testimonial.description}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                image={testimonial.image.src}
                name={testimonial.name}
                role={testimonial.role}
                rate={testimonial.rate}
                description={testimonial.description}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  rate: number;
  description: string;
}

function TestimonialCard({
  image,
  name,
  role,
  rate,
  description,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-md max-w-[570px] min-h-[271px]">
      <div className="flex flex-col p-[30px] lg:p-[60px] items-center md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded-full mb-2"
          />
          <h3 className="font-semibold text-lg text-nowrap">{name}</h3>
          <p className="text-sm text-gray-600 text-nowrap">{role}</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start">
          <div className="flex mb-2 mt-2 gap-[5px] ">
            {[...Array(rate)].map((_, index) => (
              <Image
                key={index}
                src={Star}
                alt="star"
                width={20}
                height={20}
                className={`${
                  index < rate ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700 mt-2 md:mt-0 text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
