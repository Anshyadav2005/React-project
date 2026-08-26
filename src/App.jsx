import { useEffect, useState } from "react";
import Allmovies from "./components/Allmovies";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/Movie"

const App = () => {
  const [Popular, setPopular] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [Week, setWeek] = useState();

  
  useEffect(()=>{
    const token = import.meta.env.VITE_TMDB_TOKEN;
    async function ApiCall() {
    try {
      const options = {
      headers: { accept: "application/json", Authorization: `Bearer ${token}` },
    };
    const [popMovies, topMovies, upcomingMovies,weekMovies] = await Promise.all([
      fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options),
      fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options),
      fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options),
      fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1", options),
    ]);

    if (!popMovies || !topMovies || !upcomingMovies || !weekMovies) {
          throw new Error("Failed to fetch movies");
        
    }

    const PopularData = await popMovies.json();
    const TopRatedData = await topMovies.json();
    const UpcomingData = await upcomingMovies.json();
    const WeekData = await weekMovies.json();

    setPopular(PopularData.results);
    setTopRated(TopRatedData.results);
    setUpcoming(UpcomingData.results);  
    setWeek(WeekData.results[[Math.floor(Math.random() * 20)]]);
    } catch (error) {
      console.log(error)
    }
 
  }
  ApiCall();
},[])

  


  return (
    <div className="min-h-screen w-full bg-black text-[#FFFFFF] py-2 px-4 flex flex-col gap-2 relative">
     
      <Routes>
        <Route path="/" element={ <Home Popular={Popular} TopRated={TopRated} Upcoming={Upcoming} Week={Week} />} />

        <Route path="/popular" element={<Allmovies neache={"popular"} neacheheading={"Popular"} />} />          
        <Route path="/top-rated" element={<Allmovies neache={"top_rated"} neacheheading={"Top Rated"} />} />          
        <Route path="/upcoming" element={<Allmovies neache={"upcoming"} neacheheading={"Up Coming"}/>} />    

        <Route path="/movie" element={<Movie/>} />                
      </Routes>
              
    </div>
  );
};

export default App;


