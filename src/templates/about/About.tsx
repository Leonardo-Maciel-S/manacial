import { Container } from "../../components/Container";
import fundo from "./../../../public/img/fundo.jpg";

export const About = () => {
  return (
    <Container className="p-0" columns={1}>
      <div className="w-full relative h-screen flex justify-center items-center">
        <img
          src={fundo}
          alt=""
          className="object-fill absolute h-screen opacity-20 "
        />

        <p className="z-10 text-white text-4xl text-center max-w-[900px] font-normal leading-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          officia, rem obcaecati possimus odio consectetur quia itaque odit
          voluptate error recusandae atque culpa impedit vero quis eaque ex?
          Laudantium, eaque. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quos eaque odit quisquam placeat quam pariatur, mollitia
          temporibus consectetur nisi! Iure eveniet commodi hic doloribus
          excepturi odio quia tenetur! Rerum, harum.
        </p>
      </div>
    </Container>
  );
};
