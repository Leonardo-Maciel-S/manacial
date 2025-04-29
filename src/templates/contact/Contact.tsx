import { Instagram, Mail } from "lucide-react";
import { Container } from "../../components/Container";
import { FaWhatsapp } from "react-icons/fa";

import contact from "./../../../public/img/contact.jpg";

export const Contact = () => {
  return (
    <Container className="text-white justify-center items-center p-20 bg-zinc-900">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl ">Contato</h2>

        <ul className="text-xl flex flex-col gap-3 pt-10">
          <li className="flex gap-2">
            <Mail size={30} />
            <span>email@gmail.com</span>
          </li>
          <li className="flex gap-2">
            <FaWhatsapp size={30} />
            <span>61 99999-9999</span>
          </li>

          <li className="flex gap-2">
            <Instagram size={30} />
            <a
              href="https://www.instagram.com/manancialdeadoracao_oficial/#"
              target="_blank"
              rel="noreferrer"
            >
              @manancialdeadoração_oficial
            </a>
          </li>
        </ul>
      </div>

      <div className="">
        <img
          src={contact}
          alt=""
          className="object-cover w-full h-[400px] mx-auto rounded-4xl"
        />
      </div>
    </Container>
  );
};
