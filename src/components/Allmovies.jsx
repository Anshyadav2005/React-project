/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "./Card";

const Allmovies = ({ neache,neacheheading }) => {
  const [Data1, setData1] = useState();
  const [Data2, setData2] = useState();
  const [Data3, setData3] = useState();
  const [Data4, setData4] = useState();
  

  useEffect(() => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    async function fetchApiCall() {
      try {
        const options = {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const [Call1, Call2, Call3, Call4] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${neache}?language=en-US&page=1`,
            options,
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${neache}?language=en-US&page=2`,
            options,
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${neache}?language=en-US&page=3`,
            options,
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${neache}?language=en-US&page=4`,
            options,
          ),
        ]);

        if (!Call1 || !Call2 || !Call3 || !Call4) {
          throw new Error("Failed to fetch movies");
        }

        const Call1Data = await Call1.json();
        const Call2Data = await Call2.json();
        const Call3Data = await Call3.json();
        const Call4Data = await Call4.json();

        setData1(Call1Data.results);
        setData2(Call2Data.results);
        setData3(Call3Data.results);
        setData4(Call4Data.results);

        
      } catch (error) {
        console.log(error);
      }
    }

    fetchApiCall();
  }, []);

  return (
    <div className="min-h-screen flex flex-col  bg-black gap-4 text-[#FFFFFF] py-2 px-4">
      <h1 className="text-2xl font-bold">{neacheheading}</h1>
      <div className="grid grid-cols-6  bg-black gap-4 text-[#FFFFFF] py-2 px-4">
        {Data1?.map((elem, index) => {
        return (
          <Card
            key={index}
            index={index}
            img={elem.backdrop_path}
            title={elem.title}
            date={elem.release_date}
            rateing={elem.vote_average}
            dimention={"lg:min-h-[50vh] h-auto  w-auto"}
          />
        );
      })}

      {Data2?.map((elem, index) => {
        return (
          <Card
            key={index}
            index={index}
            img={elem.backdrop_path}
            title={elem.title}
            date={elem.release_date}
            rateing={elem.vote_average}
            dimention={"lg:min-h-[50vh] h-auto  w-auto"}
          />
        );
      })}

      {Data3?.map((elem, index) => {
        return (
          <Card
            key={index}
            index={index}
            img={elem.backdrop_path}
            title={elem.title}
            date={elem.release_date}
            rateing={elem.vote_average}
            dimention={"lg:min-h-[50vh] h-auto  w-auto"}
          />
        );
      })}

      {Data4?.map((elem, index) => {
        return (
          <Card
            key={index}
            index={index}
            img={elem.backdrop_path}
            title={elem.title}
            date={elem.release_date}
            rateing={elem.vote_average}
            dimention={"lg:min-h-[50vh] h-auto  w-auto"}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Allmovies;
