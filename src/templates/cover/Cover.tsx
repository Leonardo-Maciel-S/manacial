import { Globe } from "lucide-react";
import { Container } from "../../components/Container";

import banda from "./../../../public/img/banda.jpg";

export const Cover = () => {
  return (
    <Container className="gap-10 h-screen px-10">
      <div className="flex flex-col gap-4 justify-end ">
        <Globe className="size-12 lg:size-20" color="white" />
        <h1 className="text-3xl md:text-7xl  text-white">
          Manancial de adoração
        </h1>
      </div>

      <div className="shadow-amber-50 shadow-2x md:pt-20 lg:pt-0">
        <img src={banda} alt="" className="rounded-2xl object-cover " />
      </div>
    </Container>
  );
};
