import { Container } from "../../components/Container";
import fundo from "./../../../public/img/fundo.jpg";

export const About = () => {
  return (
    <Container className="p-0" columns={1}>
      <div className="w-full relative h-screen flex justify-center items-center">
        <img
          src={fundo}
          alt=""
          className="object-cover absolute h-screen opacity-10 "
        />

        <p className="z-10 px-5 md:px-20 text-lg text-zinc-50 md:text-4xl text-center max-w-[900px] font-light leading-14 italic">
          Grupo de louvor da{" "}
          <strong className="font-bold">Igreja Batista Gileade</strong>{" "}
          comandada atualmente pelo baterista{" "}
          <strong className="font-bold">Vinícius Henrique</strong>, esse grupo
          possui anos de existência cantando fielmente todo domingo nos cultos
          de celabração desde 2018.
        </p>
      </div>
    </Container>
  );
};
