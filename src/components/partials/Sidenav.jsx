import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[18%] h-full border-r-2 border-zinc-500 p-10 ">
      <h1 className="text-2xl text-white font-bold">
        <i className=" text-secondary ri-tv-fill mr-2"></i>
        <span className="text-2xl">MovieDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-secondary hover:text-white p-5 rounded-lg duration-300 "
        >
          <i className="mr-1 ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-secondary hover:text-white p-5 rounded-lg duration-300 "
        >
          <i className="mr-1  ri-bard-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-secondary hover:text-white p-5 rounded-lg duration-300 "
        >
          <i className="mr-1 ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-secondary hover:text-white p-5 rounded-lg duration-300 "
        >
          <i className="mr-1 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link
          to="/person"
          className="hover:bg-secondary hover:text-white mb-4 p-5 rounded-lg duration-300 "
        >
          <i className="mr-1 ri-team-fill"></i> Peopple
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 " />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          Website Information
        </h1>
        <Link
          to="/about"
          className="hover:bg-secondary hover:text-white p-5 rounded-lg duration-300 "
        >
          <i className="mr-1 ri-information-fill"></i>About MovieDB
        </Link>
        <Link
          to="/contact"
          className="hover:bg-secondary hover:text-white p-5 rounded-lg duration-300 "
        >
          <i className="mr-1  ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
