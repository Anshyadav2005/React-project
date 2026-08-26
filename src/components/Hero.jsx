import { Star } from "lucide-react";
const Hero = (props) => {
  console.log(props.MovieData?.vote_average)
  const img = props.MovieData?.backdrop_path;
  const imgPath = img ? `https://image.tmdb.org/t/p/original${img}` : "";
  const rating = Math.floor(((props.MovieData?.vote_average) / 2 ) *10 )/10 ;

  return (
    <div className="h-[60%] w-full flex overflow-hidden font-inter rounded-2xl ">
      <div className="h-full w-1/2  flex flex-col z-10 gap-4 py-6 px-6">
        <h1 className="text-red-600 font-bold text-xl">TODAY SPECIAL </h1>
        <h1 className="text-6xl  tracking-tighter md:text-6xl text-nowrap font-extrabold">
          {props.MovieData?.title}
        </h1>
        <p className="font-bold text-xl"></p>
        <p className="text-sm">{props.MovieData?.overview}</p>
        <div className="flex gap-2 text-yellow-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={25} fill= {star <= (rating) ? "currentColor" : "none"} />
          ))}
          <span className="text-[#FFFFFF]">{rating}</span>
        </div>
        <div className="flex gap-4">
          <button className="active:scale-95 bg-red-600 py-2 px-4 rounded-lg ">
            Watch Trailer
          </button>
          <button className="active:scale-95 border-2 border-[#2A2A2A] py-2 px-4 rounded-lg">
            Add to Favorites
          </button>
        </div>
      </div>
      <div
        className="relative h-auto w-1/2 bg-amber-700  bg-cover bg-center"
        style={{ backgroundImage: `url(${imgPath})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
