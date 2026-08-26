import { Link } from "react-router-dom";
import navlogo from "../assets/navlogo.jpg";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [Input, setInput] = useState("");
  const navigate = useNavigate();

  const handlesearch = () => {
    if (Input === "") return;

    if (Input.trim()) {
      navigate(`/movie?q=${encodeURIComponent(Input)}`);
    }
  };

  return (
    <div className="bg-black w-full px-6 py-1 sticky top-0 left-0 z-20 flex items-center justify-between border-[#2A2A2A] border-b-2 ">
      <img src={navlogo} alt="logo.jpg" className="size-1/6" />
      <div className="w-3/10 bg-[#1A1A1A] px-4 py-2 rounded-2xl flex justify-between border-2 border-[#2A2A2A]">
        <input
          type="text"
          value={Input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handlesearch();
          }}
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
  );
};

export default Nav;
