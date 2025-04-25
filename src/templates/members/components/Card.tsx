import { LucideIcon } from "lucide-react";
import { IMembers } from "../../../@types/Members";

interface CardProps {
  member: IMembers;
  icon: LucideIcon;
}

export const Card = ({ member, icon: Icon }: CardProps) => {
  return (
    <div className="max-w-64 rounded-4xl overflow-hidden text-center space-y-2 pb-3 bg-white hover:scale-105 transition-all duration-300">
      <div className="">
        <img src={member.srcImg} alt="" className="" />
      </div>

      <div className="space-y-2 text-black p-2">
        <h3 className="font-bold text-2xl">{member.name}</h3>

        <div className="flex items-center gap-2 justify-center">
          <Icon />
          <p className="text-xl">{member.role}</p>
        </div>
      </div>
    </div>
  );
};
