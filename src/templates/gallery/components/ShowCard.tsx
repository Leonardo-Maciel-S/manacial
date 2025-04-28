interface ShowCardProps {
  showImgSrc: string;
}

export const ShowCard = ({ showImgSrc }: ShowCardProps) => {
  return (
    <div className="group flex-1 min-w-[270px] md:min-w-[370px] relative">
      <div className="rounded-2xl overflow-hidden group-hover:scale-105 cursor-pointer group-hover:opacity-25 group-hover:shadow-xl shadow-pink-800">
        <img src={showImgSrc} alt="" />
      </div>

      <div className="absolute top-0 py-5 px-10 hidden group-hover:flex justify-center items-center h-full md:text-xl">
        <p className="text-zinc-50 gallery-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus
          reiciendis dolorum velit veniam ipsam praesentium architecto, dicta
        </p>
      </div>
    </div>
  );
};
