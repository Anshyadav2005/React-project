import { Star } from "lucide-react";

const Card = ({ title, date, img, rotateStyle, dimention, rateing }) => {
  const Rating = Math.round(((rateing / 2) * 10) /10);
  return (
    <div
      className={` ${dimention} shrink-0 bg-[#2A2A2A] rounded-2xl overflow-hidden p-1 ${rotateStyle} `}
    >
      <img
        className="h-[60%] rounded-t-2xl"
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt=""
      />
      <div className="h-[35%] flex flex-col py-2 px-2">
        <h1 className="text-sm">{title}</h1>
        <span className="text-xs text-[#B3B3B3]">{date}</span>
        <div className="flex gap-4 items-center">
          <span className="flex text-yellow-400 gap-1 text-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                fill={star <= Rating ? "currentColor" : "none"}
              />
            ))}
          </span>
          <p className="text-[#FFFFFF]">{Rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
