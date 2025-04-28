import { LucideIcon } from "lucide-react";
import { IMembers } from "../../../@types/Members";

interface CardProps {
  member: IMembers;
  icon: LucideIcon;
}

export const Card = ({ member, icon: Icon }: CardProps) => {
  return (
    <div className="group max-w-56 md:max-w-64 rounded-lg overflow-hidden text-center space-y-2 pb-3 bg-gradient-to-bl to-[#adadad] from-[#797878] hover:scale-105 transition-all duration-150 hover:bg-gray-400 cursor-pointer">
      <div className="">
        <img src={member.srcImg} alt="" className="" />
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
