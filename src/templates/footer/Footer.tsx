import { BsGithub } from "react-icons/bs";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <Container columns={1} className="py-8 text-xl">
      <div className="flex justify-center gap-2">
        <p>Developer: </p>
        <a
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
          href="https://github.com/Leonardo-Maciel-S?tab=repositories"
        >
          <BsGithub />
          Leonardo-Maciel-S
        </a>
      </div>
    </Container>
  );
};
