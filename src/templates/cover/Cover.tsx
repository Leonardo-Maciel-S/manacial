import { Globe } from "lucide-react";
import { Container } from "../../components/Container";

import banda from "./../../../public/img/banda.jpg";
import fundo from "./../../../public/img/fundo.jpg";

export const Cover = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Globe size={40} color="white" />
        <h1 className="text-3xl md:text-7xl  text-white">
          Manancial de adoração
        </h1>
      </div>

      <div className="rounded-4xl border-10 border-white">
        <img src={banda} alt="" className="relative rounded-4xl object-cover" />
      </div>
    </Container>
  );
};
