import { Container } from "../../components/Container";
import { Card } from "./components/Card";

import baterista from "./../../../public/img/baterista.png";
import { IMembers } from "../../@types/Members";
import { Drum, Guitar, KeyboardMusic, MicVocal } from "lucide-react";

export const Members = () => {
  const members: IMembers[] = [
    {
      srcImg: baterista,
      name: "Vinícius Henrique",
      role: "Bateria",
      icon: Drum,
    },
    {
      srcImg: baterista,
      name: "Tamires Miranda",
      role: "Vocal",
      icon: MicVocal,
    },
    {
      srcImg: baterista,
      name: "Talisson",
      role: "Vocal",
      icon: MicVocal,
    },
    {
      srcImg: baterista,
      name: "Marcia",
      role: "Vocal",
      icon: MicVocal,
    },
    {
      srcImg: baterista,
      name: "Jessé Trindade",
      role: "Vocal",
      icon: MicVocal,
    },
    {
      srcImg: baterista,
      name: "Geazi",
      role: "Guitarra",
      icon: Guitar,
    },
    {
      srcImg: baterista,
      name: "Flávio",
      role: "Teclado",
      icon: KeyboardMusic,
    },

    {
      srcImg: baterista,
      name: "Hélio",
      role: "Baixo",
      icon: Guitar,
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
