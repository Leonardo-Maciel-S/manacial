import { Container } from "../../components/Container";
import show1 from "./../../../public/img/shows/show1.jpg";
import show2 from "./../../../public/img/shows/show2.jpg";
import show3 from "./../../../public/img/shows/show3.jpg";
import show4 from "./../../../public/img/shows/show4.jpg";
import show5 from "./../../../public/img/shows/show5.jpg";
import { ShowCard } from "./components/ShowCard";

export const Gallery = () => {
  const shows = [show1, show2, show3, show4, show5];

  return (
    <Container columns={1}>
      <div className="space-y-20 py-22 px-10">
        <h2 className="text-center text-5xl md:text-7xl text-white">Galeria</h2>

        <div className="flex gap-10 flex-wrap">
          {shows.map((show) => (
            <ShowCard showImgSrc={show} />
          ))}
        </div>
      </div>
    </Container>
  );
};
