import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import Image from "next/image";

export default function Team() {
  return (
    <section className="bg-neutral-zicon">
      <div className="container mx-auto px-[55px] py-[120px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[38px] font-bold text-center text-nowrap">
            Meet our team
          </h1>
          <p className="text-center">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </p>
          <div className="flex flex-col lg:flex-row gap-[30px] mt-[60px]">
            {TeamData.map((team) => (
              <TeamCard
                image={team.image.src}
                name={team.name}
                role={team.role}
                description={team.description}
                key={team.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TeamData = [
  {
    name: "Sarah K",
    image: team1,
    role: "UX Designer @Brello",
    description:
      "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
    rate: 5,
  },
  {
    name: "Michael L",
    image: team2,
    role: "Creative Director @Yo",
    description:
      "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!",
    rate: 5,
  },
  {
    name: "Lauren M.",
    image: team3,
    role: "UI Designer @Boo",
    description:
      "Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.",
    rate: 5,
  },
];
interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  rate?: number;
}

function TeamCard({ image, name, role, description, rate }: TeamCardProps) {
  return (
    <div className="bg-[#FFFFFF] py-[40px] px-[30px]  max-w-[370px] rounded-[20px]">
      <div className="flex flex-col items-center justify-center">
        <Image src={image} alt="" width={56} height={56} />
        <h1 className="text-[21px] font-semibold leading-[130%] mt-4">
          {name}
        </h1>
        <p className="text-[14px] leading-[160%] mt-[6px]">{role}</p>
        <q className="text-center text-[16px] leading-[160%] mt-[30px]">
          {description}
        </q>
      </div>
      <div className="flex gap-5 items-center justify-center mt-[30px] mb-4">
        <p className="text-[14px] font-bold text-green-dark">Team</p>
        <p className="text-[14px] font-bold text-green-dark">Dribbble</p>
        <p className="text-[14px] font-bold text-green-dark">Linkedin</p>
      </div>
    </div>
  );
}
