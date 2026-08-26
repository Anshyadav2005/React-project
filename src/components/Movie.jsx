import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import navlogo from "../assets/navlogo.jpg";
import Card from "./Card";

const Movie = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [Input, setInput] = useState(searchParams.get("q") || "");
  const [InputData, setInputData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get("q");

    if (!query) {
      navigate("/", { replace: true });

      return;
    }
    async function fetchMovie() {
      const token = import.meta.env.VITE_TMDB_TOKEN;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      setInputData(data.results);
    }

    fetchMovie();
  },[searchParams, navigate]);

  const handlesearch = () => {
    if (Input.trim()) {
      setsearchParams({
        q: Input,
      });

      setInput("");
    }
  };

  return (
    <div className="bg-black w-full px-6 py-1">
      <div className="bg-black w-full px-6 py-1 sticky top-0 left-0 z-20 flex items-center justify-between border-[#2A2A2A] border-b-2">
        <img
          src={navlogo}
          alt="logo.jpg"
          className="size-1/6"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="w-3/10 bg-[#1A1A1A] px-4 py-2 rounded-2xl flex justify-between border-2 border-[#2A2A2A]">
          <input
            type="text"
            value={Input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handlesearch()}
            placeholder="Search for movies..."
            className="w-9/10 bg-[#1A1A1A]"
          />
          <button
            className="active:scale-95 "
            onClick={() => {
              handlesearch();
            }}
          >
            <Search />
          </button>
        </div>
        <div className="flex justify-between gap-4">
          <Link to={"/popular"}>Popular</Link>
          <Link to={"/top-rated"}>Top Rated</Link>
          <Link to={"/upcoming"}>Upcoming</Link>
        </div>
      </div>
      <div className=" grid grid-cols-6 bg-black gap-4 text-[#FFFFFF] py-2 px-4">
        {InputData?.map((elem, index) => {
          return (
            <Card
              key={index}
              index={index}
              img={elem.backdrop_path}
              title={elem.title}
              date={elem.release_date}
              dimention={"lg:min-h-[50vh] h-auto  w-auto"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
