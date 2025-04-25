import { Globe } from "lucide-react";
import { Container } from "../../components/Container";

import banda from "./../../../public/img/banda.jpg";

export const Cover = () => {
  return (
    <Container className="gap-10 h-screen px-10">
      <div className="flex flex-col gap-4">
        <Globe size={40} color="white" />
        <h1 className="text-3xl md:text-7xl  text-white">
          Manancial de adoração
        </h1>
      </div>

      <div className="rounded-4xl shadow-amber-50 shadow-2x">
        <img src={banda} alt="" className="rounded-4xl object-cover " />
      </div>
    </Container>
  );
};
