import { Container } from "../../components/Container";
import { Card } from "./components/Card";

import { IMembers } from "../../@types/Members";
import { Drum, Guitar, MicVocal } from "lucide-react";

import vinicius from "./../../../public/img/members/vinicius.png";
import geazi from "./../../../public/img/members/geazi.png";
import lyedson from "./../../../public/img/members/lyedson.png";
import marcia from "./../../../public/img/members/marcia.png";
import talisson from "./../../../public/img/members/talisson.png";
import tamyres from "./../../../public/img/members/tamyres.png";

export const Members = () => {
  const members: IMembers[] = [
    {
      name: "Vinícius Henrique",
      role: "Bateria",
      icon: Drum,
      image: vinicius,
    },
    {
      name: "Tamyres Miranda",
      role: "Vocal",
      icon: MicVocal,
      image: tamyres,
    },
    {
      name: "Talisson",
      role: "Vocal",
      icon: MicVocal,
      image: talisson,
    },
    {
      name: "Marcia",
      role: "Vocal",
      icon: MicVocal,
      image: marcia,
    },

    {
      name: "Geazi",
      role: "Guitarra",
      icon: Guitar,
      image: geazi,
    },

    {
      name: "Lyedson",
      role: "Baixo",
      icon: Guitar,
      image: lyedson,
    },
  ];

  return (
    <Container className="min-h-screen" columns={1}>
      <div className="space-y-20 py-22 px-10">
        <h2 className="text-center text-5xl md:text-7xl text-white">Membros</h2>

        <div className="flex flex-wrap gap-20 justify-center items-center">
          {members.map((member) => (
            <Card member={member} icon={member.icon} />
          ))}
        </div>
      </div>
    </Container>
  );
};
