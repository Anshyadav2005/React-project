import { ChevronRight } from "lucide-react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardTray = ({ neache, MovieData, link }) => {
  return (
    <div className="h-[50vh]  flex flex-col gap-2 px-2 py-2">
      <div className="h-1/10 flex justify-between items-center px-2">
        <h1 className="text-lg font-bold">{neache}</h1>
        <h1 className="flex self-end text-red-600 font-bold cursor-pointer active:scale-95">
          <Link to={link} className="flex cursor-pointer">
            VIEW ALL
            <ChevronRight />
          </Link>
        </h1>
      </div>
      <div className="h-9/10 flex overflow-x-auto transform-[rotateX(180deg)] scroll-m-2 scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin gap-4 ">
        {MovieData.map((elem, index) => {
          return (
            <Card
              key={index}
              index={index}
              img={elem.backdrop_path}
              title={elem.title}
              date={elem.release_date}
              rateing={elem.vote_average}
              rotateStyle={"transform-[rotateX(180deg)]"}
              dimention={"h-full w-40"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardTray;
