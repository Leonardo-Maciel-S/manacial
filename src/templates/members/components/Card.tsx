import { LucideIcon } from "lucide-react";
import { IMembers } from "../../../@types/Members";

interface CardProps {
  member: IMembers;
  icon: LucideIcon;
}

export const Card = ({ member, icon: Icon }: CardProps) => {
  return (
    <div className="group max-w-56 md:max-w-64 max-h-96 rounded-lg overflow-hidden text-center space-y-2 pb-3 bg-white hover:scale-105 transition-all duration-150 hover:bg-gray-400 cursor-pointer border-5 border-white">
      <div className="overflow-hidden max-h-[400px] rounded-md">
        <img src={member.image} alt="" className="object-cover h-ful" />
      </div>

      <div className="space-y-2 text-black p-2 group-hover:text-white">
        <h3 className="font-bold text-lg md:text-2xl">{member.name}</h3>

        <div className="flex items-center gap-2 justify-center ">
          <Icon color="orange" />
          <p className="md:text-xl italic font-semibold">{member.role}</p>
        </div>
      </div>
    </div>
  );
};
