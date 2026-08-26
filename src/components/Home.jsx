import CardTray from "./CardTray";
import Hero from "./Hero";
import Nav from "./Nav";

const Home = ({Popular,TopRated,Upcoming,Week}) => {
  return (
    <div className="min-h-screen w-full bg-black text-[#FFFFFF] py-2 px-4 flex flex-col gap-2 relative">
      <Nav />
      <Hero MovieData={Week} />
      <CardTray MovieData={Popular} neache={"Popular Movies"} link={"/popular"} />
      <CardTray MovieData={TopRated} neache={"Top Rated Movies"} link={"/top-rated"} />
      <CardTray MovieData={Upcoming} neache={"Up coming"}  link={"/upcoming"} />
    </div>
  )
}

export default Home
